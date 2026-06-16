import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] selection:bg-zinc-800 font-sans pb-24">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;