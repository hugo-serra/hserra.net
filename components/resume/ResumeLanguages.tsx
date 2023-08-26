import React from 'react'
import { FaLanguage } from 'react-icons/fa'

const fluencyOrder = {
  Native: 1,
  'Full Professional Proficiency': 2,
  'Limited Working Proficiency': 3,
  'Elementary Proficiency': 4,
}

const ResumeLanguages = ({ languagesData }) => {
  // Sort the array by fluency
  const sortedLanguages = languagesData.sort(
    (a, b) => fluencyOrder[a.fluency] - fluencyOrder[b.fluency]
  )

  return (
    <div className="mb-8 flex w-full flex-col items-start space-y-2 p-5">
      <h3 className="mb-3 flex items-center text-lg font-bold text-gray-800 dark:text-gray-200">
        <FaLanguage className="mr-2 h-7 w-7 text-red-600 dark:text-red-400" />
        Languages
      </h3>

      <div className="flex w-full flex-col gap-2 pl-3">
        {sortedLanguages.map((lang, index) => (
          <div
            key={index}
            className="flex w-full items-center justify-between border-b border-red-200 font-mono transition duration-300 hover:border-red-600"
          >
            <span className="text-lg font-semibold text-black dark:text-white">
              {lang.language}
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-400">{lang.fluency}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResumeLanguages
