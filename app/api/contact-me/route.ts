// pages/api/sendEmail.js
export const runtime = 'edge'

import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { kv } from '@vercel/kv'

const ratelimit = new Ratelimit({
  redis: kv,
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(5, '10 s'),
})

async function handler(req: NextRequest, res: NextResponse) {
  if (req.method !== 'POST') {
    return res.status
  }

  const ip = req.ip ?? '127.0.0.1'
  const { limit, reset, remaining } = await ratelimit.limit(ip)

  if (limit <= 0) {
    return NextResponse.json(
      {
        error: {
          message: 'Too many requests',
          reset: reset,
          remaining: remaining,
        },
      },
      { status: 429 }
    )
  }

  const { name, email, message } = await req.json()

  const mailgunURL = `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`

  try {
    const response = await fetch(mailgunURL, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`api:${process.env.MAILGUN_API_KEY}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        from: email,
        to: 'hugo@hserra.dev',
        subject: 'Contact form submission',
        text: message,
      }),
    })
    return NextResponse.json(await response.json())
  } catch (error) {
    console.error('There was an error sending the email', error)
    return NextResponse.error()
  }
}

export { handler as POST }
