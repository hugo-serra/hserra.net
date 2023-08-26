function Quote({ text }) {
  return (
    <div className="relative mt-4 mb-5 w-full p-5 text-center">
      <span className="absolute left-0 top-1/2 -translate-y-1/2 transform text-red-600">
        &#8220;
      </span>
      <blockquote className="text-xl italic leading-relaxed text-black dark:text-white">
        {text}
      </blockquote>
      <span className="absolute right-0 top-1/2 -translate-y-1/2 transform text-red-600">
        &#8221;
      </span>
    </div>
  )
}

export default Quote
