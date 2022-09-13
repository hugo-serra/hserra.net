export default function ResumeHeader({ resume }) {
  return (
    <header className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <img
          src="https://i.imgur.com/trSl9Xv.png"
          alt="The author"
          width={128}
          height={128}
          className="rounded-full"
        />
      </div>
      <div className="mt-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">{resume.basics.name}</h1>
        <p className="text-gray-600 dark:text-gray-400">{resume.basics.label}</p>
      </div>
    </header>
  )
}
