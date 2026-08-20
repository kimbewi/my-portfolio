export default function About() {
  const achievements = [
    { id: '01', title: "Candidate for Latin Honor" },
    { id: '02', title: "CSC - Honor Graduate Eligible" },
    { id: '03', title: "Data Engineering Pilipinas Scholar" },
    { id: '04', title: "Consistent Departmental Topnotcher" },
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 sm:px-12 py-24 text-white">
      
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-zinc-400 max-w-3xl text-base leading-relaxed">
          I am <span className="text-white uppercase tracking-widest text-sm mx-1">Kimberly Isip</span>, a Computer Engineering graduate focused on AI, automation, and software development. I build practical applications that integrate LLMs, workflow automation, cloud technologies, and modern web development to solve real-world problems. My projects span AI-powered applications, automated business workflows, full-stack systems, and IoT solutions.
        </p>
      </div>

      <div className="w-full">
        <h3 className="text-xl font-semibold text-center mb-8">Academic Excellence</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {achievements.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl"
            >
              <div className="bg-zinc-800 text-zinc-300 font-bold px-3 py-1 rounded-lg text-sm">
                {item.id}
              </div>
              <span className="text-zinc-200 font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}