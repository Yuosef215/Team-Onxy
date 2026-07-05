import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function Projects() {

    const navigateTeam = useNavigate();
    const navigateHome = useNavigate();
    const navigateProjects = useNavigate();

    const team = () => {
        navigateTeam('team');
    }

    const home = () => {
        navigateHome('/');
    }

    const projects = () => {
        navigateProjects('projects');
    }


    const specs = [
        { label: "Max Velocity", value: "85 km/h" },
        { label: "Flight Time", value: "42 mins" },
        { label: "Sensor Array", value: "LiDAR + Stereo Cam" },
        { label: "Processing", value: "NVIDIA Jetson Orin" },
    ];

    const tech = ["Python", "Machine Learning", "SolidWorks", "Proutes", "C++", "Arduino IDE "];

    const engineers = [
        { name: "Youssef Alaa", role: "Programing & Design", roleColor: "text-cyan-400", icons: ["li", "gh"], img: "/alaa.jpeg" },
        { name: "Hisham Rashad", role: "Mechanical", roleColor: "text-cyan-400", icons: ["li", "globe"], img: "/hisham.jpg" },
        { name: "Gamal Nasr", role: "Mechanical", roleColor: "text-violet-400", icons: ["eye", "grid"], img: "/gamal.jpeg" },
        { name: "Youssef Ashraf", role: "Mechanical", roleColor: "text-cyan-400", icons: ["eye", "globe"], img: "/ashraf.jpeg" },
    ];

    const girls = [
        { name: "Yousra Mahmoud", role: "Progrming", roleColor: "text-cyan-400", icons: ["li", "gh"], img: "/yousra.jpeg" },
        { name: "Asmaa Gamal", role: "Electronics", roleColor: "text-cyan-400", icons: ["li", "gh"], img: "/asmaa.jpeg" },
        { name: "Shimaa Reda", role: "Electronics", roleColor: "text-cyan-400", icons: ["li", "gh"], img: "/shaima.jpeg" },
        { name: "Heba Nasr", role: "Electronics", roleColor: "text-cyan-400", icons: ["li", "gh"], img: "/heba.jpeg" },
    ]

    /*   icon set  */
    const Ic = ({ n }) => ({
        li: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
        gh: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>,
        globe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
        eye: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
        grid: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>,
        bar: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
    }[n] || null);

    return (
        <div className="min-h-screen bg-[#0c0c0f] text-white overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
        * { font-family:'Syne',sans-serif; }
        .mono { font-family:'Space Mono',monospace; }
        .img-bw { filter:grayscale(100%) contrast(1.05); transition:filter .4s; }
        .img-bw:hover { filter:grayscale(50%) contrast(1.05); }
        .card-lift { transition:border-color .3s,transform .3s; }
        .card-lift:hover { border-color:rgba(124,106,255,.45); transform:translateY(-4px); }
      `}</style>

            {/* ── Navbar ── */}
            <nav className="flex items-center justify-between px-8 py-4 border-b border-white/[0.06] sticky top-0 z-50 bg-[#0c0c0f]/90 backdrop-blur-xl">
                <span className="font-extrabold text-lg tracking-wider">Onyx</span>
                <div className="hidden md:flex gap-8">
                    <Link to="/">Home</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/projects">Projects</Link>
                    <Link>Contact</Link>
                </div>
                <button className="mono text-[0.68rem] bg-violet-600 hover:bg-violet-500 transition-colors px-5 py-2 rounded tracking-wider">

                </button>
            </nav>

            <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
                {/* background image */}
                <div className="absolute inset-0">
                    <img
                        src="/machin.jpeg"
                        alt="machin"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0c0c0f]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0f]/70 via-transparent to-transparent" />

                {/* content */}
                <div className="relative z-10 h-full flex flex-col justify-end px-8 pb-12 max-w-2xl">

                    <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-none tracking-tight mb-1">
                        SVRM
                    </h1>
                    <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-none tracking-tight text-violet-400 mb-6">

                    </h1>

                </div>
            </section>

            <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-[1fr_340px] gap-14">
                <div>
                    <h2 className="text-2xl font-bold mb-6">The Vision</h2>
                    <p className="text-white/45 leading-relaxed text-[0.88rem] mb-5">
                        Developed as the flagship project for Onyx, the Autonomous Drone utilizes
                        a bespoke SLAM (Simultaneous Localization and Mapping) algorithm that
                        allows it to navigate dense forest canopies and industrial interiors with
                        millimeter precision.
                    </p>
                    <p className="text-white/45 leading-relaxed text-[0.88rem] mb-10">
                        The airframe is a complete departure from standard quadcopter designs,
                        utilizing an asymmetrical aerodynamic profile that maximizes stability in
                        high-vibration environments. Every component, from the ESC controllers to
                        the visual inertial odometry sensors, has been optimized for low-latency
                        feedback loops.
                    </p>

                    <p className="mono text-[0.6rem] tracking-[0.2em] text-violet-400 uppercase mb-4">
                        Technological Core
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {tech.map(t => (
                            <span key={t}
                                className="mono text-[0.68rem] border border-white/12 hover:border-violet-500/50 transition-colors px-3 py-1.5 rounded text-white/60 hover:text-white/90 cursor-default">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border border-white/[0.07] bg-[#111116] p-6 h-fit">
                    <div className="flex items-center justify-between mb-6">
                        <span className="font-bold text-[0.95rem]">Technical Specs</span>
                        <span className="text-white/25"><Ic n="bar" /></span>
                    </div>
                    <div className="space-y-0 divide-y divide-white/[0.06]">
                        {specs.map(s => (
                            <div key={s.label} className="flex items-center justify-between py-4">
                                <span className="mono text-[0.62rem] tracking-[0.1em] text-white/35 uppercase">{s.label}</span>
                                <span className="mono text-[0.72rem] font-bold text-white/90">{s.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-8 pb-20">
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-tight mb-1">Engineering Minds</h2>
                        <p className="text-white/35 text-[0.82rem]">The multi-disciplinary squad behind OX-092.</p>
                    </div>
                    <div className="text-right hidden md:block">
                        <span className="text-[3.5rem] font-extrabold text-white/10 leading-none">04</span>
                        <p className="mono text-[0.58rem] tracking-[0.15em] text-white/25 uppercase">Core Specialists</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {engineers.map(e => (
                        <div key={e.name} className="card-lift rounded-xl border border-white/[0.07] bg-[#111116] overflow-hidden cursor-pointer">
                            <img src={e.img} alt={e.name} className="img-bw w-full h-48 object-cover object-top" />
                            <div className="p-4">
                                <h3 className="font-bold text-[0.9rem] mb-0.5">{e.name}</h3>
                                <p className={`mono text-[0.56rem] tracking-[0.12em] uppercase mb-3 ${e.roleColor}`}>{e.role}</p>
                                <div className="flex gap-2.5 text-white/35">
                                    {e.icons.map(ic => (
                                        <button key={ic} className="hover:text-white/75 transition-colors"><Ic n={ic} /></button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {girls.map(e => (
                        <div key={e.name} className="card-lift rounded-xl border border-white/[0.07] bg-[#111116] overflow-hidden cursor-pointer">
                            <img src={e.img} alt={e.name} className="img-bw w-full h-48 object-cover object-top" />
                            <div className="p-4">
                                <h3 className="font-bold text-[0.9rem] mb-0.5">{e.name}</h3>
                                <p className={`mono text-[0.56rem] tracking-[0.12em] uppercase mb-3 ${e.roleColor}`}>{e.role}</p>
                                <div className="flex gap-2.5 text-white/35">
                                    {e.icons.map(ic => (
                                        <button key={ic} className="hover:text-white/75 transition-colors"><Ic n={ic} /></button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-8 pb-20">
                <div className="rounded-xl border border-white/[0.08] bg-[#111116] overflow-hidden grid md:grid-cols-[1fr_200px_200px]">
                    {/* text */}
                    <div className="p-10 flex flex-col justify-center">
                        <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold tracking-tight leading-tight mb-3">
                            Ready to build the<br />next monolith?
                        </h2>
                        <p className="text-white/38 text-[0.82rem] leading-relaxed mb-7">
                            We are currently accepting selective project partnerships for Q4 2024.
                        </p>
                        <div>
                            <button className="mono text-[0.68rem] border border-white/22 hover:border-violet-500 hover:text-violet-300 transition-all px-6 py-3 rounded tracking-[0.12em] uppercase inline-flex items-center gap-2 group">
                                Initiate Contact
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block bg-violet-600/90 min-h-[220px]" />
                    <div className="hidden md:flex flex-col">
                        <div className="flex-1 bg-[#0c0c0f]" />
                        <div className="flex-1 bg-teal-500/80" />
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="border-t border-white/[0.06] px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
                <span className="font-extrabold text-base tracking-widest uppercase">Onyx</span>

                <div className="flex gap-7">
                    {/* social links */}
                    {["Twitter", "GitHub", "LinkedIn", "Discord"].map(l => (
                        <a key={l} href="#" className="mono text-[0.6rem] text-white/25 hover:text-white/60 tracking-widest transition-colors uppercase">{l}</a>
                    ))}
                </div>
            </footer>
        </div>
    );
}

