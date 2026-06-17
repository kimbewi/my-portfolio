import { useState, useEffect } from 'react';

export default function Navbar() {
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const capitalizedId = id.charAt(0).toUpperCase() + id.slice(1);
            setActiveLink(capitalizedId);
          }
        });
      },
      { threshold: 0.5 } 
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090b]/90 backdrop-blur-md">
    <div className="flex items-center py-4 max-w-7xl mx-auto px-6 sm:px-12 text-white">
      
      <div className="flex-1"></div>

      <nav className="hidden md:flex items-center gap-2 bg-zinc-900/50 px-6 py-2 rounded-2xl border border-zinc-800 backdrop-blur-sm">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setActiveLink(link)} 
            className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              activeLink === link 
                ? 'text-white bg-zinc-800' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="flex-1 flex justify-end">
        <a 
          href="#contact" 
          className="px-5 py-2 bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-600/50 text-sm font-medium rounded-lg text-zinc-300 hover:text-white transition-colors shadow-sm"
        >
          Let's Talk
        </a>
      </div>
      
    </div>
    </header>
  );
}