import React from 'react'

export default function Maintenance() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-md shadow-lg w-96 space-y-6 text-center">
        <svg
          className="mx-auto h-20 w-20 text-red-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Under Maintenance
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We're currently undergoing scheduled maintenance. We'll be back shortly. Thank you for
          your patience!
        </p>
      </div>
    </div>
  )
}
