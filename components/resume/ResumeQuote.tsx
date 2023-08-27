function Quote({ text }) {
  return (
    <div className="flex flex-row mt-4 mb-5 w-full p-5 text-center items-center">
      <span className="text-red-600">&#8220;</span>
      <p className="flex-grow mx-2 text-xl italic leading-relaxed text-black dark:text-white">
        {text}
      </p>
      <span className="text-red-600">&#8221;</span>
    </div>
  )
}

export default Quote
