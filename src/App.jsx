import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] selection:bg-zinc-800 font-sans pb-24">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;