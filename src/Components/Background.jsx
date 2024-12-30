function Background({darkMode}) {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
    <div className={`absolute top-[5%] w-full py-10 flex justify-center ${darkMode ? "text-zinc-600" : "text-zinc-600"} font-semibold text-xl`}>Documents.</div>
      <h1 className={`absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold ${darkMode ? "text-zinc-900" : "text-zinc-300"}`}>
        Docs.
      </h1>
    </div>
    </>
  )
}

export default Background
