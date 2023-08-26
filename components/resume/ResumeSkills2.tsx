import { SiPython, SiReact, SiTrello } from 'react-icons/si'
import { AiOutlineCloudServer } from 'react-icons/ai'

function getIconForSkill(skillName) {
  switch (skillName) {
    case 'Python':
      return <SiPython className="h-8 w-8 text-red-500" />
    case 'React':
      return <SiReact className="h-8 w-8 text-red-500" />
    case 'Cloud Operations (CloudOps)':
      return <AiOutlineCloudServer className="h-8 w-8 text-red-500" />
    case 'Team Management':
      return <SiTrello className="h-8 w-8 text-red-500" />
    default:
      return <span className="block h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
  }
}

function SkillsList({ skills }) {
  return (
    <div className="mb-8 space-y-2 print:space-y-1">
      <h2 className="mb-4 ml-4 text-xl font-bold text-gray-800 dark:text-gray-200">Skills</h2>
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-row items-center space-x-4 border-b p-2 dark:border-gray-700 print:p-1"
        >
          {getIconForSkill(skill.name)}
          <div className="flex-1">
            <h4 className="mb-1 font-mono text-xl print:text-lg">{skill.name}</h4>
            <p className="mt-1 font-mono text-sm text-cyan-600 dark:text-cyan-500">{skill.level}</p>
            <div className="mt-1 flex flex-wrap gap-1 print:gap-0.5">
              {skill.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs dark:bg-gray-800"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillsList
