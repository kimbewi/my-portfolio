export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ChickMate: AI Brooder System",
      description: "An AI-integrated brooder system featuring climate control, computer vision and bioacoustics behavioral analysis, and live WebRTC streaming.",
      tech: ["Flutter", "Node.js", "Vue.js", "TensorFlow", "WebRTC", "Websockets"],
      link: "https://chickmate-web.vercel.app/",
      mobileLink: "https://github.com/kimbewi/ChickMate/releases/download/v1.0.0/chickmatev9.apk", 
      image: "/chickmate_web.png",
    },
    {
      id: 2,
      title: "ClimaCast: Greenhouse Climate Control and Monitoring System",
      description: "An IoT-based application designed to manage greenhouse climate control and monitoring.",
      tech: ["HTML", "CSS", "JavaScript", "ESP32"],
      link: "#",
    },
    {
      id: 3,
      title: "DashED: DepEd Enrollment Data Dashboard",
      description: "An interactive data visualization dashboard for enrollment data, presenting key metrics through graphs and charts to support easier analysis and interpretation.",
      tech: ["Flask", "Dash", "Seaborn & Matplotlib", "Plotly"],
      link: "#",
    }
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 sm:px-12 pb-24 text-white scroll-mt-24">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <p className="text-zinc-400 font-medium tracking-widest text-sm uppercase mb-2">My Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        </div>
        <button className="px-6 py-2 border border-zinc-700 hover:bg-zinc-800 text-sm font-medium rounded-lg text-zinc-300 hover:text-white transition-colors cursor-pointer">
          View All Projects
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-[#121214] border border-zinc-800 rounded-2xl overflow-hidden flex flex-col group hover:border-zinc-600 transition-colors duration-300"
          >
            <div className="w-full aspect-[16/10] bg-zinc-900 relative border-b border-zinc-800 flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <span className="text-zinc-600 font-medium tracking-widest text-xs uppercase z-10">Image Placeholder</span>
              )}
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-zinc-950/80 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-zinc-800"
              >
                <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-zinc-100 mb-2">{project.title}</h3>
              
              <div className="flex flex-col flex-grow mb-6">
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {project.mobileLink && (
                  <a
                    href={project.mobileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 w-max bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700/50 text-xs font-medium rounded-lg text-zinc-300 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                    Download App
                  </a>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-xs font-semibold rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        ))}
      </div>

    </section>
  );
}