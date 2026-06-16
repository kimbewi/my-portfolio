export default function Hero() {
  return (
    <section id="home" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4 lg:mt-8 max-w-7xl mx-auto px-6 sm:px-12 text-white">      

      {/* Left Column */}
      <div className="flex flex-col items-start">
        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
          Hi, I'm Kim!
        </h1>
        
        <h2 className="text-lg md:text-xl text-zinc-400 mb-3 max-w-md">
          <span className="font-bold text-zinc-100">Computer Engineering Graduate</span> |{' '}
          <span className="font-bold text-zinc-100">Aspiring Cloud Engineer & Software Developer</span>
        </h2>
        
        <p className="text-zinc-400 mb-10 max-w-md leading-relaxed text-base">
          Passionate about building data-driven solutions and continuously learning emerging technologies. 
        </p>
        
        <div className="flex items-center gap-6">
          
          <div className="flex flex-col items-start gap-6">
          <a 
            href="https://drive.google.com/uc?export=download&id=1uwS-EDj6U0mrzVahvYjEzqrEQcupDgkz" 
            download
            className="px-5 py-2 bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-600/50 text-sm font-medium rounded-lg text-zinc-300 hover:text-white transition-colors shadow-sm flex items-center gap-2 group w-max"
          >
            <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            Download Resume
          </a>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-500/25 cursor-pointer flex items-center gap-2 group"
            >
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border border-zinc-700 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium rounded-xl transition-colors cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
        <div className="w-full max-w-sm aspect-[4/5] bg-zinc-900 border border-zinc-800 rounded-[2rem] flex flex-col items-center justify-center text-zinc-600 overflow-hidden relative shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800/50"></div>
           <svg className="w-16 h-16 mb-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
           </svg>
           <span className="text-sm font-medium tracking-widest uppercase relative z-10">Image Placeholder</span>
        </div>
      </div>

    </section>
  );
}