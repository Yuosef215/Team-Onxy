import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


export default function OnyxTeam() {
  const team = [
    {
      id: 1,
      name: "Ahmed Swidan",
      role: " Dr Mechatronics",
      roleColor: "text-cyan-400",
      bio: "Dr. Ahmed Hamdy Sweidan, Head of the Mechatronics Department at Helwan International Technological University.A researcher specializing in renewable energy and its applications in water desalination.",
      size: "featured",
      icons: ["globe", "shield"],
      img: "/swidan.jpeg",
    },
    {
      id: 9,
      name: "Esraa Salem",
      role: "Responsible Engineer",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "",
     
    },
    {
      id: 3,
      name: "Youssef Alaa",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/alaa.jpeg",
    },
    {
      id: 4,
      name: "Gamal Nasr",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "tall",
      icons: ["globe", "shield"],
      img: "/gamal.jpeg",
    },
    {
      id: 5,
      name: "Hisham Rashed",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/hisham.jpg",
    },
    {
      id: 6,
      name: "Youssef Ashraf",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/ashraf.jpeg",
    },
    {
      id: 7,
      name: "Youssef Maher",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/maher.jpeg",
    },
    {
      id: 8,
      name: "Mohand Emad",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/mohand.jpeg",
    },
    {
       id: 2,
      name: "Ahmed Razk",
      role: "Student Mechatronics",
      roleColor: "text-cyan-400",
      size: "portrait",
      icons: ["globe", "shield"],
      img: "/razk.jpeg",
    },
    {
      id: 10,
      name: "Yahia Khaled",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/yahia.jpeg",
    },
    {
      id: 11,
      name: "Ammar Abd El Rehman",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/ammar.jpeg",
    },
    {
      id: 12,
      name: "Hidy Moemen",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/hidy.jpeg",
    },
    {
      id: 13,
      name: " Salma Mohammed",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/salma.jpeg",
    },
    {
      id: 14,
      name: "Habiba Nabil",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/habiba.jpeg",
    },
    {
      id: 15,
      name: "Heba Nasr",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/heba.jpeg",
    },
    {
      id: 15,
      name: "Shaimaa Reda",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/shaima.jpeg",
    },
    {
      id: 16,
      name: "Omar Ashraf",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/omar.jpeg",
    },
    {
      id: 17,
      name: "Yuosra Mahmoude",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/yusra.jpeg",
    },
    {
      id: 18,
      name: "Fayza Gharib",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/fayza.jpeg",
    },
    {
      id: 19,
      name: "Mohamed Mansor",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/mansor.jpeg",
    },
    {
      id: 20,
      name: "Abdelrahman Nader",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/abd.jpeg",
    },
    
  ];

  const Icon = ({ name }) => {
    const icons = {
      share: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
      code: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
      globe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
      image: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
      star: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
      settings: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 
      1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1
       2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2
       0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
      shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>,
    };
    return icons[name] || null;
  };

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const navigateAhmedSwidan = () => {
    navigate('/ahmed_swidan');
  };

  const projects = () => {
    navigate('/projects');
  };

  return (
    <div className="min-h-screen bg-[#0c0c0f] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
        * { font-family: 'Syne', sans-serif; }
        .mono { font-family: 'Space Mono', monospace; }
        .card-lift { transition: border-color 0.3s ease, transform 0.3s ease; }
        .card-lift:hover { border-color: rgba(124,106,255,0.4); transform: translateY(-4px); }
        .img-bw { filter: grayscale(100%) contrast(1.05); transition: filter 0.4s; }
        .img-bw:hover { filter: grayscale(60%) contrast(1.05); }
      `}</style>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/[0.06]">
        <span className="font-extrabold text-lg tracking-wider">Onyx</span>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={navigateHome}>Home</button>
          <button onClick={team}>Team</button>
          <button onClick={projects}>Projects</button>
          <button>Contact</button>
        </div>
        <button className="mono text-[0.7rem] bg-violet-600 hover:bg-violet-500 transition-colors px-5 py-2 rounded tracking-wider">
          
        </button>
      </nav>

      {/*HEADER */}
      <header className="px-8 pt-14 pb-6 max-w-7xl mx-auto">
        <div className="inline-flex items-center border border-white/15 px-3 py-1 rounded mono text-[0.6rem] tracking-[0.18em] text-white/50 mb-6 uppercase">
          The Collective
        </div>
        <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-none tracking-tight mb-5">
          Meet the Team
        </h1>
        <p className="text-white/40 max-w-md leading-relaxed text-[0.88rem]">
          A high-performance convergence of engineers, designers, and visionaries
          building the next generation of mechatronic systems and digital interfaces.
        </p>
      </header>

      {/*  TEAM GRID  */}
      <main className="px-8 py-10 max-w-7xl mx-auto space-y-4">

        <div className="grid grid-cols-1 md:grid-cols-[1.45fr_1fr] gap-4">

          <div className="card-lift rounded-xl border border-white/[0.07] bg-[#111116] p-7 flex items-center gap-7">
            <img
              src={team[0].img}
              alt={team[0].name}
              className="img-bw w-36 h-44 object-cover rounded-lg flex-shrink-0"
            />
            <div>
              <a onClick={navigateAhmedSwidan} className="text-2xl font-bold mb-1">{team[0].name}</a>
              <p className={`mono text-[0.62rem] tracking-[0.15em] uppercase mb-4 ${team[0].roleColor}`}>
                {team[0].role}
              </p>
              <p className="text-white/40 text-[0.82rem] leading-relaxed mb-5">{team[0].bio}</p>
               
               <a onClick={navigateAhmedSwidan} className="text-blue-500 hover:text-blue-700 transition-colors">
                lern more here.
              </a>
             
              <div className="flex gap-3">
                {team[0].icons.map(ic => (
                  <button key={ic} className="text-white/35 hover:text-white/80 transition-colors">
                    <Icon name={ic} />
                  </button>
                ))}
              </div>
            </div>
          </div>


          <div className="card-lift rounded-xl border border-white/[0.07] bg-[#111116] overflow-hidden relative flex flex-col justify-end min-h-[260px] cursor-pointer group">
            <img
              src={team[1].img}
              alt={team[1].name}
              className="img-bw absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f] via-[#0c0c0f]/40 to-transparent" />
            <div className="relative z-10 p-6 flex items-end justify-between">
              <div>
                <h2 className="text-lg font-bold mb-0.5">{team[1].name}</h2>
                <p className={`mono text-[0.58rem] tracking-[0.15em] uppercase ${team[1].roleColor}`}>
                  {team[1].role}
                </p>
                <div className="flex gap-2 mt-3">
                  
                    <button className="text-white/40 hover:text-white/80 transition-colors">
                      <FaFacebookF size={20} />
                    </button>
                 
                </div>
              </div>
              <button className="text-white/30 hover:text-white/70 transition-colors">
                <Icon name="arrow" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[team[2], team[3], team[4], team[5] , team[6] , team[7] , team[8] , team[9] , team[10] , team[11] , team[12] , team[13] , team[14], team[15], team[16] , team[17] , team[18] , team[19] , team[20] ].map(member => (
            <div
              key={member.id}
              className="card-lift rounded-xl border border-white/[0.07] bg-[#111116] overflow-hidden flex flex-col cursor-pointer"
            >
              <img
                src={member.img}
                alt={member.name}
                className="img-bw max-w-[400px] h-100 object-cover object-top"
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-base font-bold mb-0.5">{member.name}</h2>
                  <p className={`mono text-[0.58rem] tracking-[0.15em] uppercase ${member.roleColor}`}>
                    {member.role}
                  </p>
                </div>
                
               <div className="icon">
                <div className="flex gap-2 mt-3">
                  
                    <div className="icons flex gap-2 mt-3 ">
                      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF size={20}  color="blue"/>
                      </a>
                      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={20}  color="blue"/>
                      </a>
                      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={20}  color="green"/>
                      </a>
                      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20}  color="#9c2727"/>
                      </a>
                    </div>
                
                </div>
               </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      
      <footer className="border-t border-white/[0.06] px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <span className="font-extrabold text-base tracking-wider">Onyx</span>
        <div className="flex gap-8">
          {["Twitter","GitHub","LinkedIn","Discord"].map(l => (
            <a key={l} href="#" className="mono text-[0.62rem] text-white/28 hover:text-white/60 tracking-widest transition-colors uppercase">
              {l}
            </a>
          ))}
        </div>
        <span className="mono text-[0.58rem] text-white/20 tracking-wider uppercase">
        </span>
      </footer>
    </div>
  );
}