import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const stats = [
  ['06+', 'YEARS EXP'],
  ['WIPRO', 'CURRENT'],
  ['ETL', 'CORE'],
  ['DEVOPS', 'FOCUS'],
];

const skills = ['SQL', 'PYTHON', 'AWS', 'LINUX', 'ANSIBLE', 'GIT', 'DOCKER', 'CI/CD'];

function WiproMark() {
  return (
    <div className="wipro" aria-label="Wipro">
      <svg viewBox="0 0 78 34" role="img">
        <g className="wipro-dots">
          <circle cx="13" cy="8" r="4" /><circle cx="24" cy="6" r="4" /><circle cx="35" cy="8" r="4" />
          <circle cx="7" cy="18" r="4" /><circle cx="18" cy="18" r="4" /><circle cx="29" cy="18" r="4" /><circle cx="40" cy="18" r="4" />
          <circle cx="13" cy="28" r="4" /><circle cx="24" cy="30" r="4" /><circle cx="35" cy="28" r="4" />
        </g>
        <text x="47" y="22">WIPRO</text>
      </svg>
    </div>
  );
}

function Badge() {
  const ref = useRef(null);
  const [style, setStyle] = useState({ transform: 'rotateX(0deg) rotateY(0deg)' });
  const [active, setActive] = useState(false);

  const move = e => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setStyle({ transform: `rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg)` });
  };

  const reset = () => {
    setActive(false);
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' });
  };

  return (
    <div className="stage" onPointerMove={move} onPointerEnter={() => setActive(true)} onPointerLeave={reset}>
      <div ref={ref} className={`badge ${active ? 'active' : ''}`} style={style}>
        <div className="shine" />
        <div className="lanyard-hole"><span /></div>

        <div className="badge-head">
          <div>
            <div className="micro">DEVELOPER IDENTIFICATION</div>
            <h1>AYAZ MIRZA</h1>
            <div className="role">DATA / DEVOPS ENGINEER</div>
          </div>
          <WiproMark />
        </div>

        <div className="portrait-wrap">
          <img src="/ayaz.jpg" alt="Ayaz Mirza" className="portrait" />
          <div className="portrait-overlay" />
          <div className="verified">● VERIFIED PROFILE</div>
        </div>

        <div className="stats">
          {stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>

        <div className="divider" />

        <div className="skills">
          {skills.map(skill => <span key={skill}>{skill}</span>)}
        </div>

        <div className="badge-foot">
          <span>AYAZMIRZA54</span>
          <span>ENGINEERING · AUTOMATION · CLOUD</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <main>
      <div className="topline"><span>PERSONAL DEVELOPER BADGE</span><span>v1.0 / 2026</span></div>
      <section className="intro">
        <p className="eyebrow">IDENTITY / ENGINEERING / CRAFT</p>
        <h2>A badge that actually looks like <em>you.</em></h2>
        <p className="sub">A clean professional ID card built around the supplied portrait, your engineering profile, and your Wipro affiliation.</p>
      </section>
      <Badge />
      <section className="notes">
        <div><span>01</span><b>PROFILE</b><p>Ayaz Mirza · Data / DevOps Engineer</p></div>
        <div><span>02</span><b>EXPERIENCE</b><p>6+ years · Senior Consultant · Wipro</p></div>
        <div><span>03</span><b>STACK</b><p>ETL · SQL · AWS · Linux · Automation · CI/CD</p></div>
      </section>
      <footer><span>BUILT FOR AYAZ MIRZA</span><span>MOVE POINTER OVER BADGE TO TILT</span></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
