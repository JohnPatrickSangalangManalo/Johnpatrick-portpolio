import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './components/css/App.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.10; 
    const playPromise = audioRef.current.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.catch(() => {
      });
    }
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h2 className="text-gradient">INITIALIZING PORTFOLIO</h2>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {/* Background audio at fixed 10% volume */}
      <audio
        ref={audioRef}
        src="/audio/ILLIT - Magnetic.mp3"
        autoPlay
        loop
        playsInline
        style={{ display: 'none' }}
      />
      <Analytics />
    </div>
  );
}

export default App;

