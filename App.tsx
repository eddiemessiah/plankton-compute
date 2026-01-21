
import React from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  Twitter, 
  MessageSquare,
  Lock,
  BarChart3,
  Waves,
  ArrowRight,
  Target,
  Trophy,
  Rocket
} from 'lucide-react';

// --- Constants ---
const LINKS = {
  TELEGRAM: "https://t.me/plankTON_News",
  TWITTER: "https://x.com/plankton_ogs?s=21"
};

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-900/30 bg-slate-950/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] bg-slate-900">
          <img src="input_file_7.png" alt="Plankton Logo" className="w-full h-full object-cover" />
        </div>
        <span className="text-2xl font-black tracking-tighter text-white glow-text uppercase">PLANKTON</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300 uppercase tracking-widest">
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#compute" className="hover:text-cyan-400 transition-colors">Compute</a>
        <a href="#tokenomics" className="hover:text-cyan-400 transition-colors">Tokenomics</a>
        <a href="#roadmap" className="hover:text-cyan-400 transition-colors">Roadmap</a>
        <button className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white rounded-lg transition-all shadow-lg shadow-cyan-900/20 active:scale-95">
          BUY $PLANK
        </button>
      </div>
      <div className="md:hidden flex gap-4">
        <a href={LINKS.TELEGRAM} target="_blank" className="text-cyan-400">
            <MessageSquare className="w-6 h-6" />
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-grid">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-black uppercase tracking-[0.3em] mb-8 animate-pulse">
        <Zap className="w-4 h-4" /> Infinite Compute Protocol
      </div>
      <h1 className="text-6xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase italic">
        The Next <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-emerald-400">Billion Dollar</span><br />
        Project.
      </h1>
      <p className="max-w-3xl mx-auto text-xl lg:text-2xl text-slate-300 mb-12 font-medium leading-relaxed">
        Plankton isn't just a coin. It's the decentralized compute engine for the future of privacy-preserving blockchains. Limitless power, uncompromised security.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href={LINKS.TELEGRAM} target="_blank" className="w-full sm:w-auto px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl transition-all shadow-2xl shadow-cyan-500/20 flex items-center justify-center gap-3 group text-xl uppercase italic">
          Join the Movement <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
        <button className="w-full sm:w-auto px-10 py-5 bg-slate-800/40 hover:bg-slate-800 border-2 border-slate-700 text-white font-black rounded-2xl transition-all backdrop-blur-sm text-xl uppercase italic">
          View Chart
        </button>
      </div>
      
      <div className="mt-24 relative animate-float max-w-5xl mx-auto">
        <div className="rounded-3xl overflow-hidden glow-border p-2 bg-gradient-to-br from-cyan-500/40 via-slate-900 to-emerald-500/40 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
          <img 
            src="input_file_4.png" 
            alt="To Infinite and Beyond" 
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 hidden lg:block w-48 h-48 animate-bounce">
            <img src="input_file_7.png" alt="Mascot" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-32 bg-slate-950 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="p-2 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
            <img src="input_file_3.png" alt="Web2 vs Plankton" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 uppercase italic leading-none">
            Building the <span className="text-emerald-400">Future</span> of Plankton
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed mb-8">
            The old Web2 computing model is a snail. Traditional blockchains are hitting a bottleneck. Plankton is the rocket ship designed to bring <b>Infinite Computing</b> to the masses while preserving the fundamental right to privacy.
          </p>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 flex gap-6 items-start">
                <Target className="w-10 h-10 text-cyan-400 flex-shrink-0" />
                <div>
                    <h4 className="text-xl font-bold text-white mb-2">Our Mission</h4>
                    <p className="text-slate-400">To create a billion-dollar ecosystem backed by real utility: a decentralized compute marketplace where privacy is the default, not an option.</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-center mt-32">
        <div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 uppercase italic leading-none">
            The Blockchain <br /><span className="text-cyan-400">Never Stops Growing</span>
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed mb-8">
            Imagine a world where compute resources are as available as the air we breathe. Plankton harvests the power of distributed nodes to create a global supercomputer.
          </p>
          <div className="flex gap-4">
            <div className="px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 font-bold">100% Community Driven</div>
            <div className="px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 font-bold">Privacy First</div>
          </div>
        </div>
        <div className="relative">
            <div className="absolute -inset-10 bg-cyan-500/20 blur-[100px] rounded-full animate-pulse"></div>
            <div className="relative p-2 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
                <img src="input_file_2.png" alt="Infinite Growth" className="w-full h-auto rounded-2xl" />
            </div>
        </div>
      </div>
    </div>
  </section>
);

const TokenomicsSection = () => (
  <section id="tokenomics" className="py-32 bg-slate-900/50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter">Planktonomics</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">Scarcity meets utility. Our tokenomics are engineered for a billion-dollar valuation.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="p-2 rounded-3xl bg-slate-950 border border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
                <img src="input_file_1.png" alt="Wallet after staking" className="w-full h-auto rounded-2xl" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                    { label: "Total Supply", value: "1,000,000,000", sub: "$PLANK", color: "cyan" },
                    { label: "Transaction Tax", value: "0%", sub: "Zero Friction", color: "emerald" },
                    { label: "Liquidity", value: "Burned", sub: "Permanent Lock", color: "cyan" },
                    { label: "Community", value: "100%", sub: "Decentralized", color: "emerald" },
                ].map((item, idx) => (
                    <div key={idx} className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all text-center">
                        <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">{item.label}</p>
                        <p className="text-3xl font-black text-white mb-1">{item.value}</p>
                        <p className={`text-${item.color}-400 text-sm font-bold uppercase`}>{item.sub}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-900/40 to-emerald-900/40 p-1 rounded-3xl">
            <div className="bg-slate-950 p-8 lg:p-12 rounded-[1.4rem] flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-xl">
                    <h3 className="text-3xl font-black text-white mb-6 uppercase italic">Infinite Resources, Zero Headaches.</h3>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        The utility of $PLANK grows with the network. Users stake $PLANK to access infinite computing power. Nodes earn $PLANK by providing privacy-preserving computation. It's a closed-loop economy built for mass adoption.
                    </p>
                    <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-xl transition-all shadow-xl shadow-cyan-500/20 uppercase italic">
                        Read the Paper
                    </button>
                </div>
                <div className="w-64 h-64 flex-shrink-0 animate-float">
                    <img src="input_file_6.png" alt="Mascot Brain" className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]" />
                </div>
            </div>
        </div>
    </div>
  </section>
);

const MemeEvolution = () => (
    <section className="py-24 bg-slate-950 border-t border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-4 uppercase italic">Evolution of a Giant</h2>
            <p className="text-slate-500">From a small organism to the master of the digital ocean.</p>
        </div>
        <div className="flex gap-8 px-4 overflow-x-auto pb-12 no-scrollbar scroll-smooth">
            {[
                { img: "input_file_3.png", title: "The Departure", desc: "Leaving Web2 behind." },
                { img: "input_file_4.png", title: "Ignition", desc: "Reaching escape velocity." },
                { img: "input_file_2.png", title: "Assimilation", desc: "Growing infinitely." },
                { img: "input_file_0.png", title: "Apex State", desc: "Infinite resources, zero headaches." },
                { img: "input_file_5.png", title: "Dominance", desc: "Relaxing at the top." }
            ].map((step, idx) => (
                <div key={idx} className="flex-shrink-0 w-80 p-4 rounded-3xl bg-slate-900 border border-slate-800 hover:scale-105 transition-transform">
                    <div className="aspect-video rounded-xl overflow-hidden mb-4">
                        <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1 uppercase italic tracking-tighter">{step.title}</h4>
                    <p className="text-slate-500 text-sm uppercase font-bold">{step.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-slate-800 bg-slate-950 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-900 border border-cyan-400 p-0.5">
                    <img src="input_file_7.png" alt="Plankton" className="w-full h-full object-cover" />
                </div>
                <span className="text-2xl font-black text-white glow-text uppercase italic">PLANKTON</span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm mb-8 leading-relaxed">
                The next frontier in decentralized computing. Scaling privacy to a billion users. Join the revolution.
            </p>
            <div className="flex items-center gap-4">
                <a href={LINKS.TWITTER} target="_blank" className="p-3 rounded-xl bg-slate-900 hover:bg-cyan-600 text-slate-300 hover:text-white transition-all border border-slate-800">
                    <Twitter className="w-6 h-6" />
                </a>
                <a href={LINKS.TELEGRAM} target="_blank" className="p-3 rounded-xl bg-slate-900 hover:bg-cyan-600 text-slate-300 hover:text-white transition-all border border-slate-800">
                    <MessageSquare className="w-6 h-6" />
                </a>
            </div>
        </div>
        
        <div>
            <h5 className="text-white font-black uppercase italic mb-6">Ecosystem</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-widest">
                <li><a href="#about" className="hover:text-cyan-400">About Us</a></li>
                <li><a href="#compute" className="hover:text-cyan-400">Compute Hub</a></li>
                <li><a href="#tokenomics" className="hover:text-cyan-400">Tokenomics</a></li>
                <li><a href="#roadmap" className="hover:text-cyan-400">Our Roadmap</a></li>
            </ul>
        </div>

        <div>
            <h5 className="text-white font-black uppercase italic mb-6">Support</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-widest">
                <li><a href={LINKS.TELEGRAM} className="hover:text-cyan-400">Telegram News</a></li>
                <li><a href={LINKS.TWITTER} className="hover:text-cyan-400">Twitter Updates</a></li>
                <li><a href="#" className="hover:text-cyan-400">Whitepaper</a></li>
                <li><a href="#" className="hover:text-cyan-400">Audit Reports</a></li>
            </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-800/50 gap-6">
        <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">
          &copy; 2024 PLANKTON PROTOCOL. ALL SYSTEMS OPERATIONAL.
        </p>
        <div className="flex gap-8 text-slate-500 text-xs font-black uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <Hero />
      
      <section className="py-12 bg-cyan-600 text-white overflow-hidden relative border-y-4 border-slate-950">
        <div className="flex whitespace-nowrap animate-infinite-scroll text-5xl font-black italic tracking-tighter uppercase opacity-30 select-none">
          INFINITE COMPUTE • PRIVACY PRESERVING • BILLION DOLLAR ALPHA • PLANKTON PROTOCOL • NEXT GEN UTILITY • 
          INFINITE COMPUTE • PRIVACY PRESERVING • BILLION DOLLAR ALPHA • PLANKTON PROTOCOL • NEXT GEN UTILITY • 
        </div>
        <style>{`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 25s linear infinite;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      <AboutSection />
      
      {/* Divider with Hammock Meme */}
      <section className="py-20 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4">
              <div className="relative p-2 rounded-[3rem] bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 overflow-hidden shadow-2xl">
                  <img src="input_file_0.png" alt="Plankton Made Easy" className="w-full h-auto rounded-[2.8rem]" />
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity">
                      <h3 className="text-4xl font-black text-white uppercase italic text-center px-10 leading-none">
                          Infinite Resources,<br />Zero Headaches.
                      </h3>
                  </div>
              </div>
          </div>
      </section>

      <TokenomicsSection />

      <section className="py-24 bg-slate-950 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase italic leading-none">
                        Massive <br /><span className="text-cyan-400">Compute</span> Mining
                    </h2>
                    <p className="text-slate-400 text-xl leading-relaxed mb-10">
                        Plankton utilizes a proof-of-compute algorithm. By sharing your idle device resources, you mine $PLANK rewards while powering the next-gen internet.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                            <Trophy className="text-emerald-400 w-8 h-8 mb-2" />
                            <h5 className="text-white font-bold uppercase italic">Global Nodes</h5>
                            <p className="text-slate-500 text-sm">1.4M+ Connected</p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                            <Rocket className="text-cyan-400 w-8 h-8 mb-2" />
                            <h5 className="text-white font-bold uppercase italic">TPS Rating</h5>
                            <p className="text-slate-500 text-sm">Infinite Potential</p>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                        <img src="input_file_5.png" alt="Plankton Hammock 2" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      <MemeEvolution />
      
      <section className="py-32 bg-gradient-to-b from-slate-950 to-cyan-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="w-32 h-32 mx-auto mb-10 rounded-full border-4 border-cyan-400 p-1 shadow-[0_0_30px_rgba(6,182,212,0.4)] bg-slate-900">
            <img src="input_file_7.png" alt="Final Mascot" className="w-full h-full object-cover rounded-full" />
          </div>
          <h2 className="text-5xl lg:text-8xl font-black text-white mb-10 uppercase italic tracking-tighter leading-none">
            Ready for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Billion Dollar</span> Growth?
          </h2>
          <p className="text-slate-300 text-xl lg:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            The Plankton protocol is ready to scale. Join the community today and secure your spot in the future of infinite computing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={LINKS.TELEGRAM} target="_blank" className="px-12 py-6 bg-white text-slate-950 font-black rounded-2xl hover:bg-cyan-100 transition-all text-2xl shadow-2xl shadow-white/20 uppercase italic">
              JOIN THE TELEGRAM
            </a>
            <a href={LINKS.TWITTER} target="_blank" className="px-12 py-6 border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white/10 transition-all text-2xl uppercase italic">
              FOLLOW TWITTER
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
