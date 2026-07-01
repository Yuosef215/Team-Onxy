import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import toast from "react-hot-toast";
import { FaEnvelope, FaCopy,FaFacebook  } from "react-icons/fa6";






export default function OnyxTeam() {
  const copyEmail = async (email) => {
  await navigator.clipboard.writeText(email);
  toast.success("Email copied successfully");
};
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
      social: {
        facebook: "https://www.facebook.com/share/1F38gJ8GCD/",
        linkedin: "www.linkedin.com/in/youssef-alaa-321267288",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://instagram.com/youssef",
        github: "https://github.com/Yuosef215",
        telegram: "https://t.me/username",
        email: "youssef.alaa.dev@gmail.com",
      },
    },
    {
      id: 4,
      name: "Gamal Nasr",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "tall",
      icons: ["globe", "shield"],
      img: "/gamal.jpeg",
      social: {
        facebook: "https://www.facebook.com/share/195buEU6M1/",
        linkedin: "https://www.linkedin.com/in/gamal-elaraby-9088a3352?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        whatsapp: "https://wa.me/201119040160",
        instagram: "",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "gamalnasr989@gmail.com",
      },
    },
    {
      id: 5,
      name: "Hisham Rashed",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/sorry.jpg",
      social: {
        facebook: "https://facebook.com/youssef",
        linkedin: "https://linkedin.com/in/youssef",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://instagram.com/youssef",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 8,
      name: "Yousra Mahmoude",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/yousra.jpeg",
      social: {
        facebook: "https://www.facebook.com/share/1CyXsq7zhf/",
        linkedin: "https://www.linkedin.com/in/yousra-mahmoud-4b1137306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://www.instagram.com/yousra._mahmoud?igsh=MXdxdHVlMWRlYWl3OA==",
        github: "https://github.com/yousra-mahmoud0",
        telegram: "https://t.me/username",
        email: "yousramahmoud293@gmail.com",
      },
    },
    {
      id: 7,
      name: "Shaimaa Reda",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/shaima.jpeg",
      social: {
        facebook: "https://www.facebook.com/share/1bN2n4nZLa/?mibextid=LQQJ4d",
        linkedin: "https://www.linkedin.com/in/shaimaa-reda-456050369?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        whatsapp: "https://wa.me/201068044103",
        instagram: "https://www.instagram.com/shimareda26?utm_source=qr",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 6,
      name: "Asmma Gamal",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/asmaa.jpeg", 
      social: {
        facebook: "https://facebook.com/youssef",
        linkedin: "https://linkedin.com/in/youssef",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://instagram.com/youssef",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
  
    
    {
      id: 2,
      name: "Youssef Ashraf",
      role: "Student Mechatronics",
      roleColor: "text-cyan-400",
      size: "portrait",
      icons: ["globe", "shield"],
      img: "/ashraf.jpeg",
      social: {
        facebook: "https://facebook.com/youssef",
        linkedin: "https://linkedin.com/in/youssef",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://instagram.com/youssef",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 10,
      name: "Youssef Maher",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/maher.jpeg",
      social: {
        facebook: "https://facebook.com/youssef",
        linkedin: "https://linkedin.com/in/youssef",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://instagram.com/youssef",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 11,
      name: "Mohand Emad",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/mohand.jpeg",
      social: {
        facebook: "https://facebook.com/youssef",
        linkedin: "https://linkedin.com/in/youssef",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://instagram.com/youssef",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 12,
      name: "Hidy Moemen",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/hidy.jpeg",
      social: {
        facebook: "https://www.facebook.com/share/17pvJystNg/",
        linkedin: "https://www.linkedin.com/in/haidi-moamen-541399351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        whatsapp: "https://wa.me/201154545718",
        instagram: "https://www.instagram.com/haidi_moamen?igsh=Nmx1bG10OTZvcmhx",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 13,
      name: "Heba Nasr",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/heba.jpeg",
      social: {
        facebook: "https://facebook.com/youssef",
        linkedin: "https://linkedin.com/in/youssef",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://instagram.com/youssef",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 14,
      name: "Fayza Gharib",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/fayza.jpeg",
      social: {
        facebook: "https://www.facebook.com/share/1BzBUFs4jv/",
        linkedin: "https://www.linkedin.com/in/fayza-elgharib-b3560b399?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        whatsapp: "https://wa.me/201004116420",
        instagram: "https://www.instagram.com/fayza__1010?igsh=N2I1cDE5b2tqd2Nu",
        github: "https://github.com/username",
        telegram: "t.me/IXAmtSM",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 15,
      name: "Mohamed Mansor",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/mansor.jpeg",
      social: {
        facebook: "https://facebook.com/youssef",
        linkedin: "https://linkedin.com/in/youssef",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://instagram.com/youssef",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 16,
      name: "Zayed Shabban",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/zayed.jpeg",
      social: {
        facebook: "https://facebook.com/youssef",
        linkedin: "https://linkedin.com/in/youssef",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://instagram.com/youssef",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 17,
      name: "Omar Ashraf",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/antoy.jpeg",
      social: {
        facebook: "https://www.facebook.com/omar.antoy.2025?mibextid=ZbWKwL",
        linkedin: "https://www.linkedin.com/in/ømàŕ-áŝĥŕàf-6799b441a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        whatsapp: "https://wa.me/201127378844",
        instagram: "https://www.instagram.com/omar_antoy?igsh=eW9hczZ1OXU1azk5",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "omarantoy76@gmail.com",
      },
    },
    {
      id: 18,
      name: "Habiba",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/habiba.jpeg",
      social: {
        facebook: "https://facebook.com/youssef",
        linkedin: "https://linkedin.com/in/youssef",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://instagram.com/youssef",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 19,
      name: "Salma",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/salma.jpeg",
      social: {
        facebook: "https://facebook.com/youssef",
        linkedin: "https://linkedin.com/in/youssef",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://instagram.com/youssef",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 21,
      name: "Abdelrahman Nader",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/abd.jpeg",
      social: {
        facebook: "https://facebook.com/youssef",
        linkedin: "https://linkedin.com/in/youssef",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://instagram.com/youssef",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 21,
      name: "Yahia khaled noman",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/yahia.jpeg",
      social: {
        facebook: "https://www.facebook.com/yahiaprime2004",
        linkedin: "https://www.linkedin.com/in/yahia-tube-1632613a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        whatsapp: "https://wa.me/201006109902",
        instagram: "https://instagram.com/youssef",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mailto:username@gmail.com",
      },
    },
    {
      id: 21,
      name: "Malak Ashraf Abdelbaqi ",
      role: "Student Mechatronics",
      roleColor: "text-violet-400",
      size: "square",
      icons: ["globe", "shield"],
      img: "/malak.jpeg",
      social: {
        facebook: "https://www.facebook.com/share/1LMBwyqSMo/",
        linkedin: "https://www.linkedin.com/in/malak-ashraf-2b4532343?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        whatsapp: "https://wa.me/201558864597",
        instagram: "https://www.instagram.com/loka_koki_?igsh=ZWZkaGZ0bGhzZmpr",
        github: "https://github.com/username",
        telegram: "https://t.me/username",
        email: "mashrafalbaq@gmail.com",
      },
    },
  ];
  const size = 25;
  const Icon = ({ name }) => {
    const icons = {
      share: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>,
      code: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
      globe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
      image: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>,
      star: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
      settings: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
      shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
      arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>,
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

  const navigateTeam = () => {
    navigate('/team');
  };

  const projects = () => {
    navigate('/projects');
  };

  // FIX: الـ members من index 2 لآخر الـ array، مع فلتر الـ undefined للأمان
  const gridMembers = team.slice(2).filter(Boolean);

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
          {/* FIX: كانت onClick={team} وده array مش function */}
          <button onClick={navigateHome}>Home</button>
          <button onClick={navigateTeam}>Team</button>
          <button onClick={projects}>Projects</button>
          <button>Contact</button>
        </div>
        <button className="mono text-[0.7rem] bg-violet-600 hover:bg-violet-500 transition-colors px-5 py-2 rounded tracking-wider">
        </button>
      </nav>

      {/* HEADER */}
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

      {/* TEAM GRID */}
      <main className="px-8 py-10 max-w-7xl mx-auto space-y-4">

        <div className="grid grid-cols-1 md:grid-cols-[1.45fr_1fr] gap-4">

          {/* Featured card - Ahmed Swidan */}
          <div className="card-lift rounded-xl border border-white/[0.07] bg-[#111116] p-7 flex items-center gap-7">
            <img
              src={team[0].img}
              alt={team[0].name}
              className="img-bw w-36 h-44 object-cover rounded-lg flex-shrink-0"
            />
            <div>
              <a onClick={navigateAhmedSwidan} className="text-2xl font-bold mb-1 cursor-pointer">{team[0].name}</a>
              <p className={`mono text-[0.62rem] tracking-[0.15em] uppercase mb-4 ${team[0].roleColor}`}>
                {team[0].role}
              </p>
              <p className="text-white/40 text-[0.82rem] leading-relaxed mb-5">{team[0].bio}</p>
              <a onClick={navigateAhmedSwidan} className="text-blue-500 hover:text-blue-700 transition-colors cursor-pointer">
                learn more here.
              </a>
              <div className="flex gap-3 mt-3">
                {team[0].icons.map(ic => (
                  <button key={ic} className="text-white/35 hover:text-white/80 transition-colors">
                    <Icon name={ic} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait card - Esraa Salem */}
          <div className="card-lift rounded-xl border border-white/[0.07] bg-[#111116] overflow-hidden relative flex flex-col justify-end min-h-[260px] cursor-pointer group">
            {team[1].img && (
              <img
                src={team[1].img}
                alt={team[1].name}
                className="img-bw absolute inset-0 w-full h-full object-cover object-top"
              />
            )}
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
          {gridMembers.map(member => (
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
                <div className="flex gap-3 mt-3">
                  <div className="flex flex-col gap-4">
  {/* Social Icons */}
  <div className="flex items-center gap-4">
    {member.social?.facebook && (
      <a
        href={member.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-500 hover:scale-110 transition-all duration-300"
        title="Facebook"
      >
        <FaFacebook size={size} />
      </a>
    )}

    {member.social?.linkedin && (
      <a
        href={member.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:text-sky-400 hover:scale-110 transition-all duration-300"
        title="LinkedIn"
      >
        <FaLinkedin size={size} />
      </a>
    )}

    {member.social?.whatsapp && (
      <a
        href={member.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-400 hover:scale-110 transition-all duration-300"
        title="WhatsApp"
      >
        <FaWhatsapp size={size} />
      </a>
    )}

    {member.social?.instagram && (
      <a
        href={member.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-400 hover:scale-110 transition-all duration-300"
        title="Instagram"
      >
        <FaInstagram size={size} />
      </a>
    )}

    {member.social?.github && (
      <a
        href={member.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-zinc-300 hover:scale-110 transition-all duration-300"
        title="GitHub"
      >
        <FaGithub size={size} />
      </a>
    )}

    {member.social?.telegram && (
      <a
        href={member.social.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:text-sky-400 hover:scale-110 transition-all duration-300"
        title="Telegram"
      >
        <FaTelegram size={size} />
      </a>
    )}
  </div>

  {/* Email */}
  {member.social?.email && (
    <div className="flex justify-end">
      <div className="flex items-center gap-2 bg-zinc-700 rounded-lg px-3 py-2">
        <SiGmail className="text-red-400" />

        <span className="text-sm text-white break-all">
          {member.social.email}
        </span>

        <button
          onClick={() => copyEmail(member.social.email)}
          className="text-zinc-400 hover:text-white transition-colors"
          title="Copy Email"
        >
          <FaCopy />
        </button>
      </div>
    </div>
  )}
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
          {["Twitter", "GitHub", "LinkedIn", "Discord"].map(l => (
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