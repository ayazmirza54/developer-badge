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

function App() {
  return (
    <main>
      <div className="topline"><span>PERSONAL DEVELOPER BADGE</span><span>v2.1 / REACT BITS</span></div>
      <section className="intro">
        <p className="eyebrow">IDENTITY / ENGINEERING / CRAFT</p>
        <h1>A physical badge, now with <em>physics.</em></h1>
        <p className="sub">Drag the card and let it swing. The lanyard is simulated with React Three Fiber, Rapier and MeshLine.</p>
      </section>
      <section className="lanyard-stage" aria-label="Interactive developer lanyard badge">
        <Lanyard position={[0, 0, 24]} gravity={[0, -40, 0]} fov={20} lanyardWidth={1} />
      </section>
      <section className="profile-strip" aria-label="Profile highlights">
        {stats.map(([value, label]) => (
          <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>
      <section className="skills" aria-label="Skills">
        {skills.map(skill => <span key={skill}>{skill}</span>)}
      </section>
      <section className="notes">
        <div><span>01</span><b>PROFILE</b><p>Ayaz Mirza · Data / DevOps Engineer</p></div>
        <div><span>02</span><b>EXPERIENCE</b><p>6+ years · Senior Consultant · Wipro</p></div>
        <div><span>03</span><b>STACK</b><p>ETL · SQL · AWS · Linux · Automation · CI/CD</p></div>
      </section>
      <footer><span>BUILT FOR AYAZ MIRZA</span><span>DRAG THE CARD · LET IT SWING</span></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
