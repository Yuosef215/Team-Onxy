import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";


const CountUp = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(parseFloat((progress * target).toFixed(1)));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {Number.isInteger(target) ? Math.floor(count) : count}
      {suffix}
    </span>
  );
};

export default function OnyxLanding() {
  const [scrolled, setScrolled] = useState(false);
  const navigateTeam = useNavigate();
  const navigateHome = useNavigate();
  const navigateProjects = useNavigate();


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    

  }, []);
  const team = () => {
    navigateTeam('team');
  }

  const home = () => {
    navigateHome('/');
  }
  
  const projects = () => {
    navigateProjects('projects');
  }
  

  return (
    <div className="min-h-screen bg-[#09090e] text-white overflow-x-hidden w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
        * { font-family: 'Syne', sans-serif; }
        .mono { font-family: 'Space Mono', monospace; }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
        @keyframes fade-up { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        .animate-pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
        .animate-bob { animation: bob 3s ease-in-out infinite; }
        .anim { animation: fade-up 0.8s ease forwards; opacity: 0; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.15s; }
        .d3 { animation-delay: 0.28s; }
        .d4 { animation-delay: 0.42s; }
        .text-grad {
          background: linear-gradient(135deg, #fff 30%, #a78bfa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .stat-grad {
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .hero-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 80%);
          mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 80%);
        }
        .card-lift { transition: border-color 0.3s, transform 0.3s; }
        .card-lift:hover { border-color: rgba(124,106,255,0.45); transform: translateY(-5px); }
      `}</style>

      {/*  Navbar  */}
      <nav className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-4 transition-all duration-300
         ${scrolled ? "bg-[#09090e]/85 backdrop-blur-xl border-b border-white/[0.06]" : ""}`}>
        <span className="font-extrabold text-lg tracking-wider">Onyx</span>

        <div className="hidden md:flex gap-8">
          
            <button onClick={home}>Home</button>
            <button onClick={team}>Team</button>
            <button onClick={projects}>Projects</button>
            <button>Contact</button>

         
        </div>

        <button className="mono text-[0.72rem] bg-violet-600 hover:bg-violet-500 transition-colors px-5 py-2 rounded tracking-wider">
          
        </button>
      </nav>

      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(124,106,255,0.18)_0%,transparent_70%)]" />
        <div className="absolute inset-0 hero-grid" />

        <div className="anim d1 relative z-10 mb-8 inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 px-4 py-1.5 rounded-full mono text-[0.62rem] text-violet-300 tracking-[0.18em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse-dot" />
          Engineering Technolgy The Future
        </div>

        <h1 className="anim d2 relative z-10 text-[clamp(5rem,14vw,10rem)] font-extrabold leading-none tracking-tight text-grad mb-5">
          Onyx
        </h1>

        <p className="anim d3 relative z-10 text-white/45 max-w-[420px] leading-relaxed mb-10 text-[0.93rem]">
          Innovating the Future with Shared Projects. We bridge the gap between
          academic theory and industry-grade engineering.
        </p>

        <div className="anim d4 relative z-10 flex flex-wrap gap-3 justify-center">
          <button onClick={projects} className="mono text-[0.72rem] bg-violet-600 hover:bg-violet-500 hover:shadow-[0_0_28px_rgba(124,106,255,0.4)] hover:-translate-y-0.5 transition-all px-7 py-3 rounded-md tracking-wider">
            View Projects →
          </button>
          <button onClick={team} className="mono text-[0.72rem] border border-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all px-7 py-3 rounded-md tracking-wider text-white/60 hover:text-white">
            Meet The Team
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bob flex flex-col items-center gap-2">
          <span className="mono text-[0.58rem] text-white/20 tracking-[0.25em]">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-violet-500 to-transparent" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-10 py-28">
        <p className="mono text-[0.65rem] text-violet-300 tracking-[0.2em] uppercase mb-3">
          // What We Build
        </p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight mb-4">
          Engineering<br />Excellence
        </h2>
        <p className="text-white/38 max-w-md leading-relaxed text-[0.88rem] mb-14">
          A passionate team of hardware engineers, designers, and developers at
          Penn State and Rutgers. We build and release.
        </p>

        <div className="grid md:grid-cols-5 gap-4">
          <div
            className="card-lift md:col-span-3 md:row-span-2 relative rounded-xl border border-white/[0.07] overflow-hidden min-h-[340px] flex flex-col justify-end p-7 cursor-pointer"
            style={{ background: "linear-gradient(135deg,#0d0d18 0%,#1a1230 100%)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_40%,rgba(100,80,200,0.4)_0%,transparent_70%)]" />
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.18] w-72 h-72" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(124,106,255,0.8)" strokeWidth="0.8"/>
              <circle cx="100" cy="100" r="65" fill="none" stroke="rgba(124,106,255,0.6)" strokeWidth="0.8"/>
              <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(124,106,255,0.4)" strokeWidth="0.8"/>
            </svg>
            <div className="relative z-10">
              <p className="mono text-[0.6rem] text-violet-300 tracking-widest uppercase mb-2">Featured Project</p>
              <h3 className="text-xl font-bold mb-2">Angis Protocol</h3>
              <p className="text-white/38 text-[0.78rem] leading-relaxed mb-4 max-w-xs">
                A quantitative signal processing framework for real-time industrial sensor fusion and adaptive noise reduction.
              </p>
              <button className="mono text-[0.68rem] text-violet-300 hover:text-violet-200 transition-colors cursor-pointer inline-flex items-center gap-1.5 group">
                Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="card-lift md:col-span-2 rounded-xl border border-white/[0.07] bg-[#111118] p-6 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center text-lg mb-4">⚡</div>
            <h3 className="font-bold mb-2 text-[0.95rem]">Student Powered</h3>
            <p className="text-white/38 text-xs leading-relaxed">
              Every project is conceived and executed by students pushing the limits of applied engineering.
            </p>
          </div>

          <div
            className="card-lift md:col-span-2 relative rounded-xl border border-white/[0.07] overflow-hidden p-6 cursor-pointer flex flex-col justify-end min-h-[130px]"
            style={{ background: "linear-gradient(135deg,#0d1a1d 0%,#0a1520 100%)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_80%_20%,rgba(0,200,180,0.17)_0%,transparent_60%)]" />
            <div className="relative z-10">
              <p className="mono text-[0.6rem] text-teal-400 tracking-widest uppercase mb-1">Infrastructure</p>
              <h3 className="font-bold mb-1.5 text-[0.9rem]">Onyx Lab</h3>
              <p className="text-white/38 text-xs leading-relaxed">
                Our hardware workspace built for rapid prototyping and iteration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-b border-white/[0.06] bg-[#0f0f16] py-16 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {/* Stats */}
          {[
            { target: 2,  suffix: "",  label: "Active Projects" },
            { target: 1, suffix: "k", label: "GitHub Stars"    },
            { target: 8,   suffix: "",  label: "Awards Won"      },
            { target: 100, suffix: "%", label: "Open Source"     },
          ].map(s => (
            <div key={s.label}>
              <div className="stat-grad text-5xl font-extrabold tracking-tight mb-2">
                <CountUp target={s.target} suffix={s.suffix} />
              </div>
              <div className="mono text-[0.65rem] text-white/28 tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="relative py-36 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(124,106,255,0.11)_0%,transparent_70%)] pointer-events-none" />
        <h2 className="relative z-10 text-[clamp(2.2rem,5vw,4rem)] font-extrabold tracking-tight leading-tight mb-4">
          Ready to build<br />the future?
        </h2>
       
        <div className="relative z-10 inline-flex items-center gap-2 mono text-[0.82rem] text-violet-300 hover:text-violet-200 transition-colors cursor-pointer">
          <span>✉</span>
          <span>hello@onyx.com</span>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] px-10 py-6 flex items-center justify-between">
        <span className="font-extrabold tracking-wider text-sm">Onyx</span>
      </footer>
    </div>
  );
}