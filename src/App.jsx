import React from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Background layer */}
      <div className="background-art-layer" aria-hidden="true" />
      
      {/* Ambient lighting & radial gradient overlay to enhance contrast */}
      <div className="ambient-overlay" aria-hidden="true" />

      {/* Main Content Layout */}
      <main className="content-layout">
        {/* Left-side Counter Container */}
        <section className="left-hero-section">
          <Counter />
        </section>

        {/* Right-side Showcase Area: Keeps the origami figure clear & complemented */}
        <section className="right-visual-anchor" aria-hidden="true">
          <div className="origami-glow-ring" />
          <div className="artwork-attribution">
            <span className="art-dot" />
            <span className="art-title">Geometric Origami Study</span>
            <span className="art-sub">Golden Radiance &bull; Ambient Canvas</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
