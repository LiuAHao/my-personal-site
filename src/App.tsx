import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-slate-50 relative selection:bg-primary/30 selection:text-primary-foreground">
      <Background />
      
      <main className="relative z-10 flex flex-col items-center w-full">
        <div className="w-full">
          <Hero />
          <About />
          <Projects />
          <TechStack />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
