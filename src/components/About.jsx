export default function About() {
  const achievements = [
    { id: '01', title: "Candidate for Latin Honor" },
    { id: '02', title: "Civil Service Commission - Honor Graduate Eligible" },
    { id: '03', title: "Consistent Departmental Topnotcher" },
    { id: '04', title: "PUP Alumni Association - USA Scholar" },
  ];

  const skillCategories = [
    {
      title: "Full-Stack Dev",
      skills: ["ReactJS", "ExpressJS", "Node.js", "Flutter", "Tailwind CSS"]
    },
    {
      title: "Hardware & IoT",
      skills: ["Raspberry Pi", "ESP32", "Sensor Integration", "Microcontrollers"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Computer Vision", "YOLO", "EfficientNet", "Python", "TFLite"]
    },
    {
      title: "Design & Infrastructure",
      skills: ["Figma", "UI/UX Layout", "WebRTC", "Tailscale", "Git"]
    }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 sm:px-12 py-24 text-white">
      
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
          I am Kimberly Isip, a Computer Engineering graduate interested in software development, cloud computing, IoT and data analytics. Through academic projects, I’ve built applications, worked with databases, and developed cloud and IoT-based solutions to real-world problems.
        </p>
      </div>

      <div className="mb-32">
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