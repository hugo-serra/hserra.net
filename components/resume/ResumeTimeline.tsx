export default function ResumeTimeline({ resume }) {
  return (
    <div className=" w-full p-5">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-200">Work Experience</h2>
      <div className="relative m-4">
        <div className="absolute top-0 bottom-0 left-5 border-l-2 border-gray-300 dark:border-gray-600"></div>
        {resume.work.map((exp, index) => (
          <div
            key={index}
            className="relative mb-8 pl-10 font-mono text-black dark:text-white break-inside-avoid"
          >
            <div className="absolute -left-5 top-1 h-8 w-8 rounded-full bg-red-500"></div>
            <div className="flex items-center space-x-4">
              <h3 className="text-lg font-semibold">{exp.name}</h3>
              <p className="mb-0 text-xs">
                {exp.startDate} - {exp.endDate || 'Present'}
              </p>
            </div>

            <p className="mb-2 font-serif text-sm text-cyan-600 dark:text-cyan-500">
              {exp.position}
            </p>
            <p className="mb-2 text-sm">{exp.summary}</p>
            <a
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-red-600 underline hover:text-red-500"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
