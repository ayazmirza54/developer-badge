import React from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard from './Lanyard';
import './styles.css';

const stats = [
  ['06+', 'YEARS EXP'],
  ['WIPRO', 'CURRENT'],
  ['ETL', 'CORE'],
  ['DEVOPS', 'FOCUS'],
];

const skills = ['SQL', 'PYTHON', 'AWS', 'LINUX', 'ANSIBLE', 'GIT', 'DOCKER', 'CI/CD'];

function BadgeFace() {
  return (
    <div className="badge-art">
      <div className="badge-grid" />
      <div className="badge-topline">
        <span>DEVELOPER IDENTIFICATION</span>
        <span>ISSUED 2026</span>
      </div>

      <div className="badge-identity">
        <div>
          <div className="badge-kicker">ENGINEERING / AUTOMATION / CLOUD</div>
          <div className="badge-name">AYAZ MIRZA</div>
          <div className="badge-role">DATA / DEVOPS ENGINEER</div>
        </div>
        <div className="badge-emblem">AM54</div>
      </div>

      <div className="badge-divider" />

      <div className="badge-body">
        <div className="badge-profile-copy">
          <div className="badge-section-label">SYSTEM PROFILE</div>
          <div className="badge-stats">
            {stats.map(([value, label]) => (
              <div className="badge-stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="badge-section-label stack-label">PRIMARY STACK</div>
          <div className="badge-skills">
            {skills.map(skill => <span key={skill}>{skill}</span>)}
          </div>
        </div>

        <div className="badge-portrait-wrap">
          <img src="/ayaz.jpg" alt="Ayaz Mirza" className="badge-portrait" />
          <div className="badge-photo-overlay" />
          <span className="badge-verified">● VERIFIED</span>
        </div>
      </div>

      <div className="badge-bottom">
        <span>AYAZMIRZA54</span>
        <span>WIPRO · SENIOR CONSULTANT</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <main>
      <div className="topline">
        <span>PERSONAL DEVELOPER BADGE</span>
        <span>v2.0 / REACT BITS</span>
      </div>

      <section className="intro">
        <p className="eyebrow">IDENTITY / ENGINEERING / CRAFT</p>
        <h1>A physical badge, now with <em>physics.</em></h1>
        <p className="sub">
          Drag the card and let it swing. The front uses a live custom texture while the
          lanyard and badge are simulated with Three.js + Rapier.
        </p>
      </section>

      <section className="lanyard-stage" aria-label="Interactive developer lanyard badge">
        <Lanyard
          position={[0, 0, 24]}
          gravity={[0, -40, 0]}
          fov={20}
          frontImage="/badge-front.svg"
          backImage="/badge-back.svg"
          imageFit="cover"
          lanyardWidth={1}
        />
        <div className="interaction-hint">
          <span className="hint-dot" />
          <span>DRAG THE CARD</span>
        </div>
      </section>

      <section className="notes">
        <div>
          <span>01</span>
          <b>PROFILE</b>
          <p>Ayaz Mirza · Data / DevOps Engineer</p>
        </div>
        <div>
          <span>02</span>
          <b>EXPERIENCE</b>
          <p>6+ years · Senior Consultant · Wipro</p>
        </div>
        <div>
          <span>03</span>
          <b>STACK</b>
          <p>ETL · SQL · AWS · Linux · Automation · CI/CD</p>
        </div>
      </section>

      <footer>
        <span>BUILT FOR AYAZ MIRZA</span>
        <span>THREE.JS · RAPIER · REACT BITS</span>
      </footer>

      <div className="texture-source" aria-hidden="true">
        <BadgeFace />
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
