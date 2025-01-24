import React, { useState, useEffect } from 'react';
import { Code, Boxes, Ghost, Sparkles, Gamepad, Briefcase, Wrench} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import { Twitch, Command, Bot, Shield } from 'lucide-react';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
const VALORANT_CODE = ['v', 'a', 'l', 'o', 'r', 'a', 'n', 't'];



const SectionCard = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    className="glass-card rounded-lg p-8 hover:bg-black/30 transition-all duration-300"
  >
    {children}
  </motion.section>
);

const SecretMessage = ({ isVisible, message }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          bg-black/80 p-6 rounded-lg z-50 text-center text-emerald-400"
      >
        {message}
      </motion.div>
    )}
  </AnimatePresence>
);

const AboutPage = () => {
  const [codeClicks, setCodeClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    if (codeClicks >= 5) {
      setShowSecret(true);
      setTimeout(() => {
        setShowSecret(false);
        setCodeClicks(0);
      }, 3000);
    }
  }, [codeClicks]);

  return (
    <div className="space-y-8">
      <SectionCard>
        <div className="flex items-center space-x-2 mb-4">
          <Code className="shrink-0" />
          <h1 className="text-2xl font-bold">About Me</h1>
        </div>

        <SecretMessage 
          isVisible={showSecret} 
          message="There are 10 types of people in this world. Those who understand binary and those who don't." 
        />
        
        <motion.div className="text-zinc-300 space-y-6">
          <p>
            I'm a 19 y/o fullstack dev who loves building things that matter. Started coding out of pure curiosity, 
            and now here I am, still learning and creating everyday. If it's interesting, I'm probably messing with it.
          </p>

          <p>
            The best part? I love helping others with their ideas, whether it's collaborating on projects or offering free help to others.
          </p>

          <p>
          When I'm not buried in code, you'll find me on Valorant, lost in music, journaling... or out enjoying life.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact & Social</h2>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4 rounded-lg"
              >
                <p className="text-zinc-300">
                  • Discord: <span className="text-white">aozyr</span>
                </p>
              </motion.div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">aozyr currently doing:</h2>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4 rounded-lg space-y-3"
              >
                <p className="text-zinc-300">
                  Currently integrating Discord User API to show real-time status and what im doing! (integrating it soon)
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Currently Working On</h2>
            <ul className="space-y-3">
              {[
                { text: 'Dailify - Music discovery platform', sparkles: true },
                { text: 'Updated Soon' }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="mr-2">•</span>
                  {item.text}
                  {item.sparkles && (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="ml-2"
                    >
                      <Sparkles size={16} className="text-yellow-400" />
                    </motion.span>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </SectionCard>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="space-y-8">
      <SectionCard>
        <div className="flex items-center space-x-2 mb-6">
          <Briefcase className="shrink-0" />
          <h1 className="text-2xl font-bold">Portfolio Portfolio</h1>
        </div>
        
        <motion.div className="text-zinc-300 space-y-6">
          <p className="text-lg">
            Frontend developer focused on building engaging web applications with modern technologies
            and clean user interfaces. Passionate about creating seamless user experiences and
            integrating with APIs.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Wrench className="mr-2" /> Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4 rounded-lg"
                >
                  <h3 className="font-medium mb-2">Frontend Development</h3>
                  <p className="text-zinc-300">React.js, TailwindCSS, React Router, Client-side State Management</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4 rounded-lg"
                >
                  <h3 className="font-medium mb-2">Backend Development</h3>
                  <p className="text-zinc-300">Python, Go, Database Management, Server-Side Scripting</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4 rounded-lg"
                >
                  <h3 className="font-medium mb-2">API Integration</h3>
                  <p className="text-zinc-300">RESTful APIs, OAuth Authentication, Third-party Services</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4 rounded-lg"
                >
                  <h3 className="font-medium mb-2">Development Tools</h3>
                  <p className="text-zinc-300">Git Version Control, Modern JavaScript (ES6+)</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4 rounded-lg"
                >
                  <h3 className="font-medium mb-2">UI/UX Skills</h3>
                  <p className="text-zinc-300">Responsive Design, Animation, User Experience</p>
                </motion.div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Boxes className="mr-2" /> Featured Projects
              </h2>
              <div className="space-y-8">
                {/* MOON Discord Bot */}
                <div className="glass-card p-6 rounded-lg">
                  <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">MOON - Discord Community Bot</h3>
                  <p className="text-zinc-300">A custom Discord bot with unique features including activity tracking, role management, and user engagement systems. Built with modern web technologies and sleek animations.</p>
                  </div>
                  
                  <div className="relative rounded-lg overflow-hidden mb-6">
                    <video 
                      className="w-full h-auto rounded-lg"
                      controls
                      muted
                      loop
                    >
                      <source src="/Desktop 2024.11.15 - 11.39.04.02.mp4" type="video/mp4" />
                    </video>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-zinc-400 mb-2">Technologies used:</p>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'TailwindCSS', 'Discord.js', 'Node.js'].map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-zinc-800/50 rounded-full text-sm text-zinc-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dailify */}
                <div className="glass-card p-6 rounded-lg">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Dailify - Music Discovery</h3>
                    <p className="text-zinc-300">A personalized music discovery platform that integrates with Spotify to create daily playlists based on user preferences. Features OAuth authentication and responsive design.</p>
                  </div>
                  
                  <div className="relative rounded-lg overflow-hidden mb-6">
                    <video 
                      className="w-full h-auto rounded-lg"
                      controls
                      muted
                      loop
                    >
                      <source src="/showcase_dailify.mp4" type="video/mp4" />
                    </video>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-zinc-400 mb-2">Technologies used:</p>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'TailwindCSS', 'Spotify API', 'OAuth'].map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-zinc-800/50 rounded-full text-sm text-zinc-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.a 
                      href="https://dailify.org"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center text-white hover:text-green-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Project <span className="ml-2">→</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Development Environment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4 rounded-lg"
                >
                  <h3 className="font-medium mb-2">Hardware Setup</h3>
                  <ul className="text-zinc-300 space-y-1">
                    <li>• RTX 3060 Ti</li>
                    <li>• i7-10700k</li>
                    <li>• 32GB DDR4</li>
                    <li>• Triple Monitor Setup</li>
                  </ul>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4 rounded-lg"
                >
                  <h3 className="font-medium mb-2">Development Tools</h3>
                  <ul className="text-zinc-300 space-y-1">
                    <li>• VS Code with Custom Extensions</li>
                    <li>• Git Version Control</li>
                    <li>• Chrome DevTools</li>
                    <li>• NPM Package Manager</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionCard>
    </div>
  );
};

const GamingPage = () => {
  const [showValorantEasterEgg, setShowValorantEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount >= 3) {
      setShowValorantEasterEgg(true);
      setTimeout(() => {
        setShowValorantEasterEgg(false);
        setClickCount(0);
      }, 3000);
    }
  }, [clickCount]);

  return (
    <div className="space-y-8">
      <SectionCard>
        <div className="flex items-center space-x-2 mb-6">
          <Gamepad className="shrink-0" />
          <h1 className="text-2xl font-bold">Gaming & Setup</h1>
        </div>

        <SecretMessage
          isVisible={showValorantEasterEgg}
          message={
            <>
              <p className="text-red-500 font-bold text-xl">ACE!</p>
              <p className="text-gray-300">Maybe not so washed after all...</p>
            </>
          }
        />

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Gaming Profiles</h2>
            <div className="space-y-2">
              <motion.p 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
                onClick={() => setClickCount(prev => prev + 1)}
                className="cursor-pointer"
              >
                • <a href="https://tracker.gg/valorant/profile/riot/%D0%9C%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%230000/overview" 
                    className="text-white hover:underline">Valorant Profile - im just bad</a>
              </motion.p>
              <motion.p 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                • <a href="https://steamcommunity.com/id/aozyr/" 
                    className="text-white hover:underline">Steam Profile (Main)</a>
              </motion.p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Operating Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4 rounded-lg"
              >
                <p className="text-zinc-300">• Windows 10</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4 rounded-lg"
              >
                <p className="text-zinc-300">• Kali Linux</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4 rounded-lg"
              >
                <p className="text-zinc-300">• Ubuntu Linux</p>
              </motion.div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Setup & Peripherals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { text: 'Coding Keyboard: ', link: 'https://a.co/d/bDNBFwk', label: 'EPOMAKER x AULA F75 Gasket' },
                { text: 'Gaming Keyboard: ', link: 'https://a.co/d/co5mGmA', label: 'E-YOOSO HZ61 Rapid Trigger' },
                { text: 'Coding Mouse: ', link: 'https://a.co/d/3AOaTDp', label: 'Logitech Superlight 2 (8kHz)' },
                { text: 'Gaming Mouse: ', link: 'https://a.co/d/4zdHiyh', label: 'MCHOSE AX5 (4kHz)' },
                { text: 'Audio: ', link: 'https://a.co/d/bvfWXdN', label: 'Linsoul KZ ZS10 Pro' },
                { text: 'Mic: ', link: 'https://a.co/d/hT6DNdg', label: 'HyperX Quadcast + FIFINE Low Profile Boom Arm' },
                { text: 'Display: ', link: '#', label: 'Triple KOORUI Setup (1 Vertical, 2 Horizontal)' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4 rounded-lg"
                >
                  <p className="text-zinc-300">
                    • {item.text}
                    <a href={item.link} className="text-white hover:underline">
                      {item.label}
                    </a>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

  const CommandCard = ({ command, description }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-4 rounded-lg flex items-start space-x-3"
    >
      <Command className="shrink-0 mt-1" size={16} />
      <div>
        <span className="text-white font-semibold">{command}</span>
        <p className="text-zinc-300 text-sm mt-1">{description}</p>
      </div>
    </motion.div>
  );

  const TwitchSection = () => {
    const commands = [
      { command: '!stats', description: 'Check out my Valorant stats' },
      { command: '!sens', description: 'View my Valorant sensitivity settings' },
      { command: '!rank', description: 'See my current Valorant rank' },
      { command: '!crosshair', description: 'Get my Valorant crosshair settings' },
      { command: '!followage', description: 'Check how long you\'ve been following' },
      { command: '!uptime', description: 'See how long the stream has been live' },
      { command: '!clip', description: 'Create a clip of the current stream' },
      { command: '!discord', description: 'Get my Discord username' },
      { command: '!socials', description: 'View all my social media links' },
      { command: '!specs', description: 'See my PC specifications' },
      { command: '!help', description: 'See all available commands' }
  ];

    return (
      <div className="space-y-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-lg p-8 hover:bg-black/30 transition-all duration-300"
        >
          <div className="flex items-center space-x-2 mb-6">
            <Twitch className="shrink-0" />
            <h1 className="text-2xl font-bold">Twitch</h1>
          </div>

          <div className="space-y-8">
            {/* Stream Info */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Bot className="mr-2" /> Bot Commands
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commands.map((cmd, index) => (
                  <CommandCard key={index} {...cmd} />
                ))}
              </div>
            </div>

            {/* Stream Rules */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2" /> Stream Rules
              </h2>
              <div className="glass-card p-4 rounded-lg space-y-2">
                <p className="text-zinc-300">• Be chill, no toxic vibes</p>
                <p className="text-zinc-300">• Don't spoil or backseat unless I ask</p>
                <p className="text-zinc-300">• No self-promo</p>
                <p className="text-zinc-300">• Have fun and enjoy the stream!</p>
              </div>
            </div>

            {/* Twitch Link */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-4 rounded-lg inline-block"
            >
              <a
                href="https://twitch.tv/xukololz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2"
              >
                <Twitch size={20} />
                <span>Watch Live on Twitch</span>
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    );
  };

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [activePage, setActivePage] = useState('about');
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [valorantIndex, setValorantIndex] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === KONAMI_CODE[konamiIndex]) {
        if (konamiIndex === KONAMI_CODE.length - 1) {
          setShowEasterEgg(true);
          setTimeout(() => setShowEasterEgg(false), 3000);
          setKonamiIndex(0);
        } else {
          setKonamiIndex(prev => prev + 1);
        }
      } else {
        setKonamiIndex(0);
      }

      if (event.key.toLowerCase() === VALORANT_CODE[valorantIndex]) {
        if (valorantIndex === VALORANT_CODE.length - 1) {
          setShowEasterEgg(true);
          setTimeout(() => setShowEasterEgg(false), 3000);
          setValorantIndex(0);
        } else {
          setValorantIndex(prev => prev + 1);
        }
      } else {
        setValorantIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [konamiIndex, valorantIndex]);

  const pages = {
    about: AboutPage,
    portfolio: PortfolioPage,
    gaming: GamingPage,
    twitch: TwitchSection
  };
  const ActivePage = pages[activePage];

  return (
    <div className="min-h-screen bg-transparent text-white relative">
      <AnimatedBackground />
      
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setShowEasterEgg(false)}
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Ghost size={100} className="text-white" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="relative z-10">
        <motion.nav 
          className="p-4 mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-4">
              {Object.keys(pages).map((page) => (
                <motion.button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
                    activePage === page
                      ? 'bg-white text-black'
                      : 'bg-white/5 hover:bg-white/20 text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.nav>

        <main className="px-4 pb-8">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <PageTransition key={activePage}>
                <ActivePage />
              </PageTransition>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;