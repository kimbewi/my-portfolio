export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 sm:px-12 text-white scroll-mt-24">
      
      <div className="bg-[#121214] border border-zinc-800 rounded-3xl p-8 md:p-16 flex flex-col items-center text-center">
        
        <p className="text-zinc-400 font-medium tracking-widest text-sm uppercase mb-3">Contact Me</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-100">Let's Connect</h2>
        <p className="text-zinc-400 leading-relaxed mb-12 max-w-xl mx-auto">
          Let’s connect and discuss opportunities, collaborations, or projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kimberlytisip@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all group"
          >
            <div className="w-12 h-12 mb-4 bg-zinc-800/80 group-hover:bg-zinc-700 rounded-xl flex items-center justify-center text-zinc-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-1">Email</span>
            <span className="text-zinc-200 font-medium text-sm break-all">kimberlytisip@gmail.com</span>
          </a>

          <a 
            href="tel:09951593987" 
            className="flex flex-col items-center p-6 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all group"
          >
            <div className="w-12 h-12 mb-4 bg-zinc-800/80 group-hover:bg-zinc-700 rounded-xl flex items-center justify-center text-zinc-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-1">Phone</span>
            <span className="text-zinc-200 font-medium text-sm">0995 159 3987</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/kimberlyisip/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all group"
          >
            <div className="w-12 h-12 mb-4 bg-zinc-800/80 group-hover:bg-zinc-700 rounded-xl flex items-center justify-center text-zinc-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-1">LinkedIn</span>
            <span className="text-zinc-200 font-medium text-sm">Let's Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
}