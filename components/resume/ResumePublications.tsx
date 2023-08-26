import React from 'react'

const ResumePublications = ({ publications }) => {
  return (
    <div className="mb-8 w-full p-5">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-200">Publications</h2>

      {publications.map((pub, index) => (
        <div key={index} className="mb-6 font-mono text-black dark:text-white">
          <h3 className="text-lg font-semibold">{pub.name}</h3>
          <p className="mb-2 text-sm">{pub.publisher}</p>
          <p className="mb-2 text-xs">
            Published on:{' '}
            {`${pub.fullReleaseDate.day}-${pub.fullReleaseDate.month}-${pub.fullReleaseDate.year}`}
          </p>
          {pub.summary && <p className="mb-2 text-sm">{pub.summary}</p>}
          <a
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-red-600 underline hover:text-red-500"
          >
            View Publication
          </a>
        </div>
      ))}
    </div>
  )
}

export default ResumePublications
