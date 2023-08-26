import { FaPython, FaReact, FaCloud, FaUsers } from 'react-icons/fa' // Sample icons

export default function ResumeSkills({ resume }) {
  const skillToIconMapping = {
    Python: <FaPython className="mr-2 text-black dark:text-white" size={24} />,
    React: <FaReact className="mr-2 text-red-600 dark:text-red-400" size={24} />,
    'Cloud Operations (CloudOps)': (
      <FaCloud className="mr-2 text-black dark:text-white" size={24} />
    ),
    'Team Management': <FaUsers className="mr-2 text-black dark:text-white" size={24} />,
  }

  const getSkillColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'text-gray-500 dark:text-gray-400'
      case 'Intermediate':
        return 'text-red-600 dark:text-red-400'
      case 'Advanced':
        return 'text-black dark:text-white'
      case 'Expert':
        return 'text-red-600 dark:text-red-400'
      default:
        return 'text-gray-400 dark:text-gray-300'
    }
  }

  return (
    <div className="w-full bg-white p-5 shadow-md dark:bg-gray-900">
      <h2 className="mb-4 text-xl font-bold text-black dark:text-white">Skills</h2>
      <div className="-m-2 flex flex-wrap">
        {resume.skills.map((skill, index) => (
          <div key={index} className="w-full p-2 print:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="rounded bg-white p-4 shadow dark:bg-gray-900">
              <div className="mb-2 flex items-center">
                {skillToIconMapping[skill.name]}
                <span className="text-lg font-medium text-black dark:text-white">{skill.name}</span>
                <span
                  className={`ml-2 rounded-full px-2 py-1 text-xs ${getSkillColor(skill.level)}`}
                >
                  {skill.level}
                </span>
              </div>
              <ul className="list-disc pl-6 text-black dark:text-white">
                {skill.keywords.map((keyword, kIndex) => (
                  <li key={kIndex} className="text-sm">
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
