import Link from 'next/link'
import React from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Logo() {
  return (
    <Link href="/" aria-label={siteMetadata.headerTitle}>
      <div className="flex items-center justify-between">
        <div className="mr-3">
          <div className="typewriter">
            <h1 className="text-2xl font-extrabold">
              <span className="font-black tracking-tighter text-red-500">{'</> '}</span>
              hserra
            </h1>
          </div>
        </div>
      </div>
    </Link>
  )
}
