export default function Skills() {
  const skillCategories = [
    {
      title: "Full-Stack Dev",
      skills: ["ReactJS", "ExpressJS", "Node.js", "Flutter", "Tailwind CSS", "VueJS", "MongoDB", "Firebase", "MySQL", "WebSockets", "Plotly", "Seaborn & Matplotlib"]
    },
    {
      title: "Hardware & IoT",
      skills: ["Raspberry Pi", "ESP32", "Sensor Integration", "Microcontrollers", "WebRTC"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["Computer Vision", "YOLO", "EfficientNet (CNN)", "Python", "TensorFlow"]
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["Linux", "Docker", "Vercel", "Tailscale", "Git"]
    }
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 sm:px-12 py-24 text-white">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 pb-10">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col h-full hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-6 text-zinc-100">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}