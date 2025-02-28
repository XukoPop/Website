import React, { useState } from 'react';
import { Code, Boxes, Ghost, Sparkles, Gamepad, Briefcase, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedBackground = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
);

const SectionCard = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    className="glass-card rounded-lg p-8 hover:bg-black/30 transition-all duration-300 backdrop-blur-sm bg-black/20"
  >
    {children}
  </motion.section>
);

const AboutPage = () => {
  return (
    <div className="space-y-8">
      <SectionCard>
        <div className="flex items-center space-x-2 mb-4">
          <Code className="shrink-0" />
          <h1 className="text-2xl font-bold">About Me</h1>
        </div>

        <motion.div className="text-zinc-300 space-y-6">
          <p>
          I'm Andrew. was a digital seller and freelance developer, but now i just work a normal job and game all night lmao. you'll usually catch me on cs2, val, or r6 at like 3am when i should definitely be sleeping.
          </p>

          <p>
          besides gaming i cook sometimes, write in my journal, and drink probably more than i should ngl
          </p>

          <p>
          im kinda introverted but if we're vibing i can talk forever. especially if you're down to run some games or talk about random shit at weird hours.
          </p>

          <p>
          i still code every now and then - if u need help with something just hmu. always down to help..⌨️
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact & Social</h2>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4 rounded-lg backdrop-blur-sm bg-black/20"
              >
            <p className="text-zinc-300">
              • Discord: <span className="text-white">wafermelon.</span> <br />
              • TikTok: <a href="https://www.tiktok.com/@xuko.xyz" className="text-white underline">xuko.xyz</a> <br />
              • Roblox: <a href="https://www.roblox.com/users/1627020226/profile" className="text-white underline">Wispful</a> <br />
              • Spotify: <a href="https://open.spotify.com/user/friq6622tb52nfwqf7zo3gbk8" className="text-white underline">wafermelon</a> <br />
              • Steam: <a href="https://steamcommunity.com/id/aozyr/" className="text-white underline">wafermelon</a>
            </p>
              </motion.div>
            </div>

            <div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-zinc-300">
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-8">
            <ul className="space-y-3">
              {[
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
                  {item.status && (
                    <span className="ml-2 text-sm text-zinc-400">({item.status})</span>
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
          <h1 className="text-2xl font-bold">Portfolio</h1>
        </div>
        
        <motion.div className="text-zinc-300 space-y-6">
          <p className="text-lg">
            EX-Frontend developer
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Wrench className="mr-2" /> Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Frontend Development",
                    skills: "React.js, TailwindCSS, React Router, Client-side State Management"
                  },
                  {
                    title: "Backend Development",
                    skills: "Python, Go, Database Management, Server-Side Scripting"
                  },
                  {
                    title: "API Integration",
                    skills: "RESTful APIs, OAuth Authentication, Third-party Services"
                  },
                  {
                    title: "Development Tools",
                    skills: "Git Version Control, Modern JavaScript (ES6+)"
                  }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-4 rounded-lg backdrop-blur-sm bg-black/20"
                  >
                    <h3 className="font-medium mb-2">{skill.title}</h3>
                    <p className="text-zinc-300">{skill.skills}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Boxes className="mr-2" /> Featured Projects
              </h2>
              <div className="space-y-8">
                {/* VaultCore */}
                <div className="glass-card p-6 rounded-lg">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">VaultCore - Secure Storage Solution</h3>
                    <p className="text-zinc-300">A secure digital storage platform with advanced encryption and user-friendly interface. Designed for sensitive data management with multi-factor authentication.</p>
                  </div>
                  
                  <div className="relative rounded-lg overflow-hidden mb-6">
                    <img 
                      src="/VaultCore.png"
                      alt="VaultCore interface screenshot" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-zinc-400 mb-2">Technologies used:</p>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'TailwindCSS', 'Node.js', 'Encryption API'].map((tech, i) => (
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
                    </motion.a>
                  </div>
                </div>

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
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                >
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                >
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
  return (
    <div className="space-y-8">
      <SectionCard>
        <div className="flex items-center space-x-2 mb-6">
          <Gamepad className="shrink-0" />
          <h1 className="text-2xl font-bold">Gaming & Setup</h1>
        </div>

        <div className="space-y-8">
          <div>
            <div className="space-y-2">
              <motion.p 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer"
              >
              </motion.p>
              <motion.p 
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
              </motion.p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Operating Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Windows 10', 'Kali Linux', 'Ubuntu Linux'].map((os, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4 rounded-lg backdrop-blur-sm bg-black/20"
                >
                  <p className="text-zinc-300">• {os}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Setup & Peripherals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
              { text: ' Keyboard 1: ', link: 'https://a.co/d/bDNBFwk', label: 'EPOMAKER x AULA F75 Gasket' },
              { text: ' Keyboard 2: ', link: 'https://a.co/d/co5mGmA', label: 'E-YOOSO HZ61 Rapid Trigger' },
              { text: ' Mouse 1: ', link: 'https://a.co/d/3AOaTDp', label: 'Logitech Superlight 2' },
              { text: ' Mouse 2: ', link: 'https://a.co/d/4zdHiyh', label: 'MCHOSE AX5' },
              { text: 'Audio: ', link: 'https://a.co/d/bvfWXdN', label: 'Linsoul KZ ZS10 Pro' },
              { text: 'Mic: ', link: 'https://a.co/d/hT6DNdg', label: 'HyperX Quadcast + FIFINE Low Profile Boom Arm' },
              { text: 'Display: ', link: '#', label: 'Triple KOORUI Setup (1 Vertical, 2 Horizontal)' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4 rounded-lg backdrop-blur-sm bg-black/20"
              >
                <p className="text-zinc-300">
                  • {item.text}
                  <a href={item.link} 
                     className="text-white hover:underline"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
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
const [showEasterEgg, setShowEasterEgg] = useState(false);


const pages = {
  about: AboutPage,
  portfolio: PortfolioPage,
  gaming: GamingPage,
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