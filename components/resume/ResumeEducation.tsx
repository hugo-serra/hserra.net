import React from 'react'

const ResumeEducation = ({ educationData }) => {
  return (
    <div className=" w-full p-5">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-200">Education</h2>

      {educationData.map((edu, index) => (
        <div key={index} className="mb-6 font-mono text-black dark:text-white">
          <h3 className="text-lg font-semibold">{edu.institution}</h3>
          <p className="mb-2 text-sm">{edu.area}</p>
          <p className="mb-2 text-sm">{edu.studyType}</p>
          <p className="mb-2 text-xs">
            {`${edu.start.year}`} - {`${edu.end.year || 'Present'}`}
          </p>
          {edu.activities && <p className="mb-2 text-sm">Activities: {edu.activities}</p>}
          <a
            href={edu.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-red-600 underline hover:text-red-500"
          >
            Visit Institution
          </a>
        </div>
      ))}
    </div>
  )
}

export default ResumeEducation
