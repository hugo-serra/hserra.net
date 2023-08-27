'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEnvelope, FaTimes } from 'react-icons/fa'

const onSubmit = async (data) => {
  const { name, email, message } = data

  try {
    const response = await fetch('/api/contact-me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.status === 200) {
      console.log('Email sent successfully')
    } else {
      console.error('Error sending email')
    }
  } catch (error) {
    console.error('There was an error sending the email', error)
  }
}

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const ContactForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <>
      <div className="flex items-center justify-center space-x-2 md:justify-start">
        <button
          className="flex space-x-2 items-center justify-center"
          onClick={(e) => setIsFormVisible(true)}
          onKeyDown={(e) => setIsFormVisible(true)}
        >
          <FaEnvelope className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
          <p className="text-cyan-500 dark:text-cyan-400 font-semibold">Reach out</p>
        </button>

        {isFormVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-999999">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full relative">
              <FaTimes
                className="text-red-600 dark:text-red-400 cursor-pointer absolute top-3 right-3"
                onClick={(e) => setIsFormVisible(false)}
                onKeyDown={(e) => setIsFormVisible(false)}
              />

              <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-200">
                Contact Me
              </h3>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2 dark:text-gray-400"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    className={classNames(
                      'appearance-none rounded w-full py-2 px-3 text-gray-700 placeholder-gray-300 leading-tight mb-1',
                      errors.name ? 'border-red-500' : 'border'
                    )}
                    id="name"
                    {...register('name', { required: true })}
                    type="text"
                    placeholder="John Doe"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2 dark:text-gray-400"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    className={classNames(
                      'appearance-none rounded w-full py-2 px-3 text-gray-700 placeholder-gray-300 leading-tight mb-1',
                      errors.email ? 'border-red-500' : 'border'
                    )}
                    id="email"
                    {...register('email', {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                    type="email"
                    placeholder="johndoe@example.com"
                  />
                  {errors.email && errors.email?.type === 'required' && (
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                  )}
                  {errors.email && errors.email?.type === 'pattern' && (
                    <p className="text-red-500 text-xs italic">Invalid email address.</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2 dark:text-gray-400"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className={classNames(
                      'appearance-none rounded w-full py-2 px-3 text-gray-700 placeholder-gray-300 leading-tight mb-1',
                      errors.message ? 'border-red-500' : 'border'
                    )}
                    id="message"
                    {...register('message', { required: true })}
                    rows={6}
                    placeholder="Your message..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                  )}
                </div>

                <div className="flex items-center justify-end">
                  <button
                    className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400"
                    type="submit"
                    disabled={Object.keys(errors).length > 0}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ContactForm
