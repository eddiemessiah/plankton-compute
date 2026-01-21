
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Twitter, 
  MessageSquare,
  Lock,
  BarChart3,
  Waves,
  ArrowRight,
  Target,
  Trophy,
  Rocket,
  Globe,
  Server,
  Fingerprint,
  Menu,
  X
} from 'lucide-react';

const LINKS = {
  TELEGRAM: "https://t.me/plankTON_News",
  TWITTER: "https://x.com/plankton_ogs?s=21"
};

const ASSETS = {
  LOGO: "input_file_8.png",
  MEME_HAMMOCK_1: "input_file_0.png",
  MEME_STAKING: "input_file_1.png",
  MEME_GROWTH: "input_file_2.png",
  MEME_WEB2_VS_WEB3: "input_file_3.png",
  MEME_SPACE: "input_file_4.png",
  MEME_HAMMOCK_2: "input_file_5.png",
  MEME_DISCOVERY: "input_file_6.png",
  MASCOT: "input_file_8.png"
};

const useSmoothScroll = () => {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLDivElement>, id: string) => {
    if (e) e.preventDefault();
    const targetId = id.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Compute', href: '#compute' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-4 group cursor-pointer" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsOpen(false);
          }}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 p-0.5 shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:scale-110 transition-transform bg-slate-900">
            <img 
              src={ASSETS.LOGO} 
              alt="Plankton Logo" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white glow-text uppercase italic">PLANKTON</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => scrollTo(e, item.href)}
              className="text-sm font-bold text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em]"
            >
              {item.name}
            </a>
          ))}
          <a 
            href={LINKS.TELEGRAM} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-900/40 hover:-translate-y-0.5 active:scale-95 uppercase tracking-widest text-xs"
          >
            BUY $PLANK
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => { setIsOpen(false); scrollTo(e, item.href); }} 
              className="text-xl font-bold text-slate-300 uppercase italic"
            >
              {item.name}
            </a>
          ))}
          <a href={LINKS.TELEGRAM} target="_blank" className="w-full py-4 bg-cyan-600 text-center text-white font-black rounded-xl uppercase italic">BUY $PLANK</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-48 overflow-hidden bg-grid min-h-screen flex flex-col justify-center">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-10">
        <Zap className="w-4 h-4 animate-pulse" /> The Infinite Compute Protocol
      </div>
      <h1 className="text-6xl lg:text-[9rem] font-black text-white mb-8 leading-[0.85] tracking-tighter uppercase italic drop-shadow-2xl">
        Billion Dollar <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-emerald-400">Utility Alpha.</span>
      </h1>
      <p className="max-w-4xl mx-auto text-xl lg:text-3xl text-slate-300 mb-14 font-medium leading-relaxed tracking-tight">
        Plankton is a high-performance, privacy-preserving infrastructure layer for decentralized computing. Scaling the billion-dollar project with infinite power.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
        <a href={LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl transition-all shadow-2xl shadow-cyan-500/40 flex items-center justify-center gap-4 group text-2xl uppercase italic hover:scale-105 active:scale-95">
          Join Telegram <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
        </a>
        <a href={LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-slate-800/40 hover:bg-slate-800 border-2 border-slate-700 text-white font-black rounded-2xl transition-all backdrop-blur-sm text-2xl uppercase italic hover:scale-105">
          Follow Updates
        </a>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-[2.5rem] blur opacity-30 animate-pulse"></div>
        <div className="relative rounded-[2.2rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl animate-float img-placeholder">
          <img 
            src={ASSETS.MEME_SPACE} 
            alt="Infinite Possibilities" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute -bottom-16 -right-16 hidden lg:block w-56 h-56 rotate-12 hover:rotate-0 transition-all cursor-pointer">
            <img src={ASSETS.MASCOT} alt="Mascot" className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-40 bg-slate-950 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -inset-6 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          <div className="relative p-2 rounded-[3rem] bg-slate-900 border border-slate-800 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 img-placeholder">
            <img src={ASSETS.MEME_WEB2_VS_WEB3} alt="Web2 vs Plankton" className="w-full h-auto rounded-[2.8rem]" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 uppercase italic leading-[0.9] tracking-tighter">
            Web2 is <span className="text-red-500">Snail.</span> <br />Plankton is <span className="text-emerald-400">Rocket.</span>
          </h2>
          <p className="text-slate-300 text-xl leading-relaxed mb-10 font-medium">
            Stop waiting for legacy infrastructure to catch up. Plankton leverages infinite compute nodes to deliver massive throughput without sacrificing a single bit of privacy.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Cpu className="w-8 h-8 text-cyan-400 mb-4" />
              <h4 className="text-lg font-bold text-white uppercase italic mb-2">Power</h4>
              <p className="text-slate-500 text-sm font-bold uppercase">Limitless TPS.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <Fingerprint className="w-8 h-8 text-emerald-400 mb-4" />
              <h4 className="text-lg font-bold text-white uppercase italic mb-2">Privacy</h4>
              <p className="text-slate-500 text-sm font-bold uppercase">Encryption native.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 uppercase italic leading-[0.9] tracking-tighter">
            Infinite <br /><span className="text-cyan-400">Compute Layer.</span>
          </h2>
          <p className="text-slate-300 text-xl leading-relaxed mb-10 font-medium">
            Building the next generation of privacy-preserving blockchains requires more than just code. It requires massive, distributed power. Plankton is the engine of this growth.
          </p>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 font-black uppercase italic tracking-widest">
            <Trophy className="w-6 h-6" /> Best-in-Class Scalability
          </div>
        </div>
        <div className="relative">
            <div className="absolute -inset-10 bg-cyan-500/20 blur-[120px] rounded-full"></div>
            <div className="relative p-2 rounded-[3rem] bg-slate-900 border border-slate-800 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 img-placeholder">
                <img src={ASSETS.MEME_GROWTH} alt="Infinite Growth" className="w-full h-auto rounded-[2.8rem]" />
            </div>
        </div>
      </div>
    </div>
  </section>
);

const TokenomicsSection = () => (
  <section id="tokenomics" className="py-40 bg-slate-900/30 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
            <h2 className="text-6xl lg:text-[8rem] font-black text-white mb-8 uppercase italic tracking-tighter leading-none">Tokenomics</h2>
            <p className="text-slate-400 text-2xl max-w-3xl mx-auto font-medium italic underline decoration-cyan-500/50 underline-offset-8">Engineered for a billion-dollar outcome.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-[3rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative p-3 rounded-[3rem] bg-slate-950 border border-slate-800 shadow-2xl img-placeholder">
                    <img src={ASSETS.MEME_STAKING} alt="Wallet Staking" className="w-full h-auto rounded-[2.8rem]" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                    { label: "Total Supply", value: "1,000,000,000", sub: "$PLANK", color: "text-cyan-400", icon: Globe },
                    { label: "Fees", value: "0%", sub: "Trade with speed", color: "text-emerald-400", icon: Zap },
                    { label: "Security", value: "LP Burned", sub: "100% Rug-proof", color: "text-cyan-400", icon: ShieldCheck },
                    { label: "Mining", value: "Utility-led", sub: "Compute Powered", color: "text-emerald-400", icon: Cpu },
                ].map((item, idx) => (
                    <div key={idx} className="p-10 rounded-[2rem] bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col items-center text-center group">
                        <item.icon className={`w-12 h-12 ${item.color} mb-6 group-hover:scale-110 transition-transform`} />
                        <p className="text-slate-500 text-sm font-black uppercase tracking-[0.3em] mb-3">{item.label}</p>
                        <p className="text-4xl font-black text-white mb-2">{item.value}</p>
                        <p className={`${item.color} text-sm font-bold uppercase tracking-widest italic`}>{item.sub}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-600/20 via-slate-900/50 to-emerald-600/20 p-1 rounded-[3rem] glass-panel">
            <div className="p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="max-w-2xl text-center lg:text-left">
                    <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 uppercase italic leading-none">Infinite Alpha, <br /><span className="text-cyan-400">Zero Headaches.</span></h3>
                    <p className="text-slate-400 text-xl leading-relaxed mb-10 font-medium">
                        $PLANK isn't just a token. It's the access key to the most powerful decentralized compute network on the planet. Stake, mine, and participate in the revolution.
                    </p>
                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                      <a href={LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-cyan-100 transition-all text-xl uppercase italic shadow-xl shadow-white/10">
                          Buy $PLANK
                      </a>
                    </div>
                </div>
                <div className="w-80 h-80 flex-shrink-0 animate-float img-placeholder">
                    <img src={ASSETS.MEME_DISCOVERY} alt="Infinite Compute" className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(6,182,212,0.6)]" />
                </div>
            </div>
        </div>
    </div>
  </section>
);

const MemeEvolution = () => {
    const steps = [
        { img: ASSETS.MEME_WEB2_VS_WEB3, title: "Web2 Snail", desc: "The era of slow tech." },
        { img: ASSETS.MEME_SPACE, title: "Space Launch", desc: "Infinite orbit." },
        { img: ASSETS.MEME_GROWTH, title: "Hypergrowth", desc: "Global assimilation." },
        { img: ASSETS.MEME_HAMMOCK_1, title: "Relaxation", desc: "Infinite resources." },
        { img: ASSETS.MEME_HAMMOCK_2, title: "Final Form", desc: "Zero headaches." }
    ];

    return (
        <section className="py-40 bg-slate-950 border-t border-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-24">
                <h2 className="text-5xl lg:text-[7rem] font-black text-white mb-6 uppercase italic tracking-tighter">Evolution</h2>
                <p className="text-slate-500 text-xl font-medium uppercase tracking-widest">Tracking the $PLANK takeover of the digital world.</p>
            </div>
            
            <div className="flex gap-10 px-10 overflow-x-auto pb-20 no-scrollbar snap-x snap-mandatory">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex-shrink-0 w-[400px] p-2 rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all snap-center group">
                        <div className="aspect-[4/3] rounded-[2.2rem] overflow-hidden mb-8 relative bg-slate-800 shadow-xl img-placeholder">
                            <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-4 left-4 px-4 py-2 bg-cyan-600 rounded-xl text-white font-black italic shadow-lg shadow-cyan-950/40">STEP 0{idx + 1}</div>
                        </div>
                        <div className="px-6 pb-6 text-center">
                          <h4 className="text-3xl font-black text-white mb-3 uppercase italic tracking-tighter">{step.title}</h4>
                          <p className="text-slate-500 text-lg uppercase font-bold tracking-widest">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Roadmap = () => (
  <section id="roadmap" className="py-40 bg-slate-950 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-32">
        <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 uppercase italic tracking-tighter">Strategic Roadmap</h2>
        <p className="text-slate-400 text-xl font-medium tracking-tight">Systematic dominance of the decentralized compute market.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            phase: "Phase 1: Germination",
            items: ["Stealth Launch", "Community Takeover", "Initial LP Burn", "Privacy Layer Beta"]
          },
          {
            phase: "Phase 2: Proliferation",
            items: ["CEX Tier-1 Push", "Compute Node Mining", "Governance v1", "Infinite Sharding"]
          },
          {
            phase: "Phase 3: Dominance",
            items: ["Billion Dollar Target", "Marketplace Launch", "Global Alpha Blitz", "Mobile Mining"]
          },
          {
            phase: "Phase 4: Singularity",
            items: ["Neural Network Launch", "AI Model Hosting", "Eco-Burn Protocol", "Total Sovereignty"]
          }
        ].map((step, i) => (
          <div key={i} className="relative p-10 rounded-[2.5rem] border border-slate-800 bg-slate-900/40 hover:bg-slate-900 transition-all group overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div className="text-cyan-400 font-black mb-8 uppercase italic text-sm tracking-widest">{step.phase}</div>
            <ul className="space-y-6">
              {step.items.map((item, j) => (
                <li key={j} className="flex gap-4 items-start group/item">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 group-hover/item:scale-150 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                  <span className="text-slate-300 font-bold text-base uppercase tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => {
  const scrollTo = useSmoothScroll();
  return (
    <footer className="py-32 border-t border-slate-800 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-500"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
              <div 
                className="flex items-center gap-4 mb-10 group cursor-pointer" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400 p-0.5 shadow-[0_0_20px_rgba(34,211,238,0.4)] bg-slate-900">
                      <img src={ASSETS.LOGO} alt="Plankton" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <span className="text-4xl font-black text-white glow-text uppercase italic tracking-tighter">PLANKTON</span>
              </div>
              <p className="text-slate-400 text-xl max-w-sm mb-12 font-medium leading-relaxed">
                  The infrastructure layer for a privacy-first world. Built on infinite compute and billion-dollar dreams.
              </p>
              <div className="flex items-center gap-6">
                  <a href={LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-900 hover:bg-cyan-600 text-slate-300 hover:text-white transition-all border border-slate-800 shadow-xl">
                      <Twitter size={28} />
                  </a>
                  <a href={LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-900 hover:bg-cyan-600 text-slate-300 hover:text-white transition-all border border-slate-800 shadow-xl">
                      <MessageSquare size={28} />
                  </a>
              </div>
          </div>
          
          <div>
              <h5 className="text-white text-lg font-black uppercase italic mb-10 tracking-widest underline decoration-cyan-500 decoration-4 underline-offset-8">Navigation</h5>
              <ul className="space-y-6 text-slate-400 text-base font-bold uppercase tracking-widest">
                  <li><a href="#about" onClick={(e) => scrollTo(e, '#about')} className="hover:text-cyan-400 transition-colors">The Protocol</a></li>
                  <li><a href="#compute" onClick={(e) => scrollTo(e, '#compute')} className="hover:text-cyan-400 transition-colors">Compute Hub</a></li>
                  <li><a href="#tokenomics" onClick={(e) => scrollTo(e, '#tokenomics')} className="hover:text-cyan-400 transition-colors">Utility</a></li>
                  <li><a href="#roadmap" onClick={(e) => scrollTo(e, '#roadmap')} className="hover:text-cyan-400 transition-colors">Roadmap</a></li>
              </ul>
          </div>

          <div>
              <h5 className="text-white text-lg font-black uppercase italic mb-10 tracking-widest underline decoration-emerald-500 decoration-4 underline-offset-8">Links</h5>
              <ul className="space-y-6 text-slate-400 text-base font-bold uppercase tracking-widest">
                  <li><a href={LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">News Channel</a></li>
                  <li><a href={LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Twitter Alpha</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Buy $PLANK</a></li>
              </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-800/50 gap-10">
          <p className="text-slate-500 text-sm font-black uppercase tracking-[0.4em]">
            &copy; 2024 PLANKTON PROTOCOL. SYSTEM STATUS: INFINITE.
          </p>
          <div className="flex gap-10 text-slate-500 text-sm font-black uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Infinite Marquee */}
        <section className="py-14 bg-cyan-600 text-white overflow-hidden relative border-y-8 border-slate-950 shadow-2xl z-20">
          <div className="flex whitespace-nowrap animate-infinite-scroll text-6xl font-black italic tracking-tighter uppercase opacity-40 select-none">
            INFINITE COMPUTE • PRIVACY PRESERVING • BILLION DOLLAR ALPHA • PLANKTON PROTOCOL • INFINITE COMPUTE • PRIVACY PRESERVING • BILLION DOLLAR ALPHA • PLANKTON PROTOCOL • 
            INFINITE COMPUTE • PRIVACY PRESERVING • BILLION DOLLAR ALPHA • PLANKTON PROTOCOL • INFINITE COMPUTE • PRIVACY PRESERVING • BILLION DOLLAR ALPHA • PLANKTON PROTOCOL • 
          </div>
        </section>

        <AboutSection />
        
        {/* Hammock Meme Large Break */}
        <section className="py-32 bg-slate-950">
            <div className="max-w-6xl mx-auto px-6">
                <div className="relative group p-3 rounded-[4rem] bg-gradient-to-br from-cyan-500/40 via-slate-900 to-emerald-500/40 overflow-hidden shadow-[0_0_100px_rgba(34,211,238,0.2)] img-placeholder">
                    <img src={ASSETS.MEME_HAMMOCK_1} alt="Relaxing" className="w-full h-auto rounded-[3.8rem] transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-20 items-center text-center">
                      <h3 className="text-4xl lg:text-7xl font-black text-white uppercase italic leading-none mb-4 drop-shadow-2xl">
                        Infinite Resources, <br /><span className="text-cyan-400">Zero Headaches.</span>
                      </h3>
                    </div>
                </div>
            </div>
        </section>

        <TokenomicsSection />

        {/* Distributed Compute Focus */}
        <section id="compute" className="py-48 bg-slate-950 border-y border-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-32 items-center">
                  <div>
                      <h2 className="text-6xl lg:text-[7rem] font-black text-white mb-10 uppercase italic leading-[0.85] tracking-tighter">
                          Privacy-First <br /><span className="text-emerald-400">Compute Mining.</span>
                      </h2>
                      <p className="text-slate-300 text-2xl leading-relaxed mb-14 font-medium">
                          Your idle power is a resource. Plankton aggregates this power into a massive, privacy-preserving grid. Stake $PLANK to earn rewards from every computation processed on our chain.
                      </p>
                      <div className="grid grid-cols-2 gap-10">
                          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl group">
                              <Server className="text-cyan-400 w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                              <h5 className="text-xl font-bold text-white uppercase italic mb-2 tracking-tight">Active Grid</h5>
                              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Decentralized Power</p>
                          </div>
                          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl group">
                              <Rocket className="text-emerald-400 w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                              <h5 className="text-xl font-bold text-white uppercase italic mb-2 tracking-tight">Throughput</h5>
                              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Scaling to $1B+</p>
                          </div>
                      </div>
                  </div>
                  <div className="relative group">
                      <div className="absolute -inset-10 bg-cyan-500/20 blur-[150px] group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
                      <div className="relative rounded-[3.5rem] overflow-hidden border border-slate-800 shadow-[0_0_80px_rgba(6,182,212,0.3)] animate-float img-placeholder">
                          <img src={ASSETS.MEME_HAMMOCK_2} alt="Compute Alpha" className="w-full h-auto" />
                      </div>
                  </div>
              </div>
          </div>
        </section>

        <MemeEvolution />

        <Roadmap />
        
        {/* Final CTA with Mascot */}
        <section className="py-48 bg-gradient-to-b from-slate-950 to-cyan-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20"></div>
          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <div className="w-48 h-48 mx-auto mb-16 rounded-full border-4 border-cyan-400 p-2 shadow-[0_0_80px_rgba(34,211,238,0.5)] bg-slate-950 group hover:scale-110 transition-transform cursor-pointer overflow-hidden border-double bg-slate-900">
              <img src={ASSETS.MASCOT} alt="Plankton Alpha" className="w-full h-full object-cover rounded-full" />
            </div>
            <h2 className="text-7xl lg:text-[10rem] font-black text-white mb-14 uppercase italic tracking-tighter leading-[0.8]">
              Join the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-emerald-400">Singularity.</span>
            </h2>
            <p className="text-slate-300 text-2xl lg:text-3xl mb-20 max-w-4xl mx-auto leading-relaxed font-medium">
              The billion-dollar project isn't built in a day, but it starts with one coin. Be the alpha. Be Plankton.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 px-4">
              <a href={LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer" className="px-16 py-8 bg-white text-slate-950 font-black rounded-3xl hover:bg-cyan-100 transition-all text-3xl shadow-2xl shadow-white/30 uppercase italic flex items-center justify-center gap-4 group">
                TELEGRAM <MessageSquare className="w-8 h-8 group-hover:scale-125 transition-transform" />
              </a>
              <a href={LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="px-16 py-8 border-4 border-white/20 text-white font-black rounded-3xl hover:bg-white/10 transition-all text-3xl uppercase italic flex items-center justify-center gap-4">
                TWITTER <Twitter className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
