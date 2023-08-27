import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaMailBulk,
  FaMapMarkerAlt,
  FaStackOverflow,
  FaMediumM,
  FaHackerrank,
} from 'react-icons/fa'
import { IoShareSocialOutline } from 'react-icons/io5'
import ContactForm from '../ContactMe'

export default function ResumeHeader({ resume }) {
  const data = resume.basics

  const renderIcon = (network) => {
    switch (network) {
      case 'gitconnected':
        return <IoShareSocialOutline size={24} />
      case 'GitHub':
        return <FaGithub size={24} />
      case 'Twitter':
        return <FaTwitter size={24} />
      case 'LinkedIn':
        return <FaLinkedin size={24} />
      case 'Stack Overflow':
        return <FaStackOverflow size={24} />
      case 'Medium':
        return <FaMediumM size={24} />
      case 'HackerRank':
        return <FaHackerrank size={24} />
      default:
        return null
    }
  }

  return (
    <div className="flex w-full flex-col space-y-4 py-5 dark:bg-gray-900 print:flex-col print:space-x-0 print:space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
      <img
        src={data.image}
        alt={data.name}
        className="mx-auto mb-3 h-24 w-24 rounded-full object-cover md:mx-0"
      />
      <div className="flex flex-1 flex-col space-y-2">
        <h1 className="text-center text-3xl font-bold text-black dark:text-white md:text-left">
          {data.name}
        </h1>
        <h2 className="text-center text-xl text-gray-700 dark:text-gray-300 md:text-left">
          {data.label}
        </h2>
        <div className="flex items-center justify-center space-x-2 md:justify-start cursor-pointer">
          <ContactForm />
        </div>
        <div className="flex items-center justify-center space-x-2 md:justify-start">
          <FaMapMarkerAlt className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400">{data.locationAsString}</p>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 md:text-left">
          Years of Experience: {data.yearsOfExperience}
        </p>
        <a
          href={data.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-red-600 dark:text-red-500 md:text-left"
        >
          {data.website}
        </a>
        <div className="mt-2 flex justify-center space-x-3 print:hidden md:justify-start">
          {data.profiles.map((profile) => (
            <a
              key={profile.network}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 dark:text-gray-300"
            >
              {renderIcon(profile.network)}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
