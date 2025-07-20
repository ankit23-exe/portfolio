import React, { useEffect, useState } from 'react';
import rough from 'roughjs/bundled/rough.esm';
import emailjs from '@emailjs/browser';

// Custom components
const DoodleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
      <svg width="100%" height="100%" className="absolute inset-0">
        {/* Original doodle elements */}
        <circle cx="100" cy="100" r="30" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="5,5" />
        <rect x="200" y="50" width="40" height="40" fill="none" stroke="#000" strokeWidth="2" transform="rotate(15)" />
        <path d="M 300,200 Q 350,150 400,200 T 500,200" stroke="#000" strokeWidth="2" fill="none" />
        <circle cx="80%" cy="150" r="25" fill="none" stroke="#000" strokeWidth="2" />
        <rect x="70%" y="300" width="50" height="30" fill="none" stroke="#000" strokeWidth="2" transform="rotate(-10)" />
        <path d="M 100,400 Q 150,350 200,400" stroke="#000" strokeWidth="2" fill="none" />
        <circle cx="90%" cy="80%" r="35" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="3,3" />
        <rect x="10%" y="70%" width="45" height="25" fill="none" stroke="#000" strokeWidth="2" transform="rotate(20)" />
        
        {/* Additional doodle elements - scattered throughout */}
        {/* Top section doodles */}
        <polygon points="50,30 70,10 90,30 70,50" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="4,2" />
        <path d="M 150,80 Q 170,60 190,80 Q 210,100 230,80" stroke="#000" strokeWidth="2" fill="none" />
        <circle cx="350" cy="40" r="15" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="2,2" />
        <rect x="450" y="20" width="25" height="35" fill="none" stroke="#000" strokeWidth="2" transform="rotate(-25)" />
        
        {/* Middle section doodles */}
        <ellipse cx="120" cy="250" rx="40" ry="20" fill="none" stroke="#000" strokeWidth="2" transform="rotate(30)" />
        <path d="M 400,300 L 420,280 L 440,300 L 460,280 L 480,300" stroke="#000" strokeWidth="2" fill="none" />
        <polygon points="250,180 270,160 290,180 280,200 260,200" fill="none" stroke="#000" strokeWidth="2" />
        <circle cx="50%" cy="40%" r="20" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="3,1" />
        
        {/* Right side doodles */}
        <rect x="85%" y="200" width="30" height="40" fill="none" stroke="#000" strokeWidth="2" transform="rotate(45)" />
        <path d="M 90%,350 Q 85%,330 80%,350 Q 75%,370 70%,350" stroke="#000" strokeWidth="2" fill="none" />
        <polygon points="92%,500 94%,480 96%,500 94%,520" fill="none" stroke="#000" strokeWidth="2" />
        
        {/* Bottom section doodles */}
        <ellipse cx="200" cy="85%" rx="35" ry="15" fill="none" stroke="#000" strokeWidth="2" transform="rotate(-20)" />
        <path d="M 350,90% C 370,85% 390,95% 410,90%" stroke="#000" strokeWidth="2" fill="none" />
        <circle cx="500" cy="80%" r="18" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="6,3" />
        <rect x="60%" y="85%" width="35" height="25" fill="none" stroke="#000" strokeWidth="2" transform="rotate(15)" />
        
        {/* Left side doodles */}
        <polygon points="30,300 50,280 70,300 50,320" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="2,3" />
        <path d="M 10,500 Q 30,480 50,500 Q 30,520 10,500" stroke="#000" strokeWidth="2" fill="none" />
        <ellipse cx="5%" cy="60%" rx="25" ry="40" fill="none" stroke="#000" strokeWidth="2" transform="rotate(60)" />
        
        {/* Additional scattered elements */}
        <path d="M 75%,250 L 77%,230 L 79%,250 L 81%,230" stroke="#000" strokeWidth="2" fill="none" />
        <circle cx="25%" cy="25%" r="12" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="1,1" />
        <rect x="40%" y="75%" width="20" height="30" fill="none" stroke="#000" strokeWidth="2" transform="rotate(-35)" />
        <polygon points="15%,400 17%,380 19%,400 17%,420" fill="none" stroke="#000" strokeWidth="2" />
        
        {/* Wavy lines and curves */}
        <path d="M 0,60% Q 5%,55% 10%,60% T 20%,60%" stroke="#000" strokeWidth="2" fill="none" />
        <path d="M 80%,10% Q 85%,5% 90%,10% T 100%,10%" stroke="#000" strokeWidth="2" fill="none" />
        <path d="M 30%,95% Q 35%,90% 40%,95% T 50%,95%" stroke="#000" strokeWidth="2" fill="none" />
        
        {/* Small decorative elements */}
        <circle cx="65%" cy="35%" r="8" fill="none" stroke="#000" strokeWidth="2" />
        <rect x="30%" y="45%" width="15" height="15" fill="none" stroke="#000" strokeWidth="2" transform="rotate(45)" />
        <polygon points="85%,65% 87%,60% 89%,65% 87%,70%" fill="none" stroke="#000" strokeWidth="2" />
        <ellipse cx="15%" cy="85%" rx="20" ry="10" fill="none" stroke="#000" strokeWidth="2" />
        
        {/* Hand-drawn style arrows */}
        <path d="M 600,150 L 620,140 L 615,145 L 630,145 M 620,140 L 615,150" stroke="#000" strokeWidth="2" fill="none" />
        <path d="M 150,600 L 140,620 L 145,615 L 145,630 M 140,620 L 150,615" stroke="#000" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};

const SkillCard = ({ skill, index }) => {
  // Map skills to Font Awesome icons
  const skillIcons = {
    'Node.js': 'fab fa-node',
    'Express.js': 'fas fa-server',
    'MongoDB': 'fas fa-database',
    'MySQL': 'fas fa-database',
    'JavaScript': 'fab fa-js',
    'HTML/CSS': 'fab fa-html5',
    'C++ (DSA)': 'fas fa-laptop-code',
    'Git/GitHub/Postman/REST APIs': 'fab fa-git-alt'
  };

  return (
    <div 
      className={`p-6 bg-white border-2 border-black rounded-none transform hover:-rotate-1 hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-up shadow-lg relative overflow-hidden`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        borderRadius: '20px 5px 20px 5px', // Irregular border radius for doodle effect
      }}
    >
      {/* Doodle decorations */}
      <div className="absolute top-2 right-2 text-black opacity-20">
        <svg width="20" height="20">
          <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2" />
        </svg>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 mb-4 border-2 border-black bg-yellow-100 flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300" 
             style={{ borderRadius: '50% 40% 50% 40%' }}>
          <i className={`${skillIcons[skill.name] || 'fas fa-code'} text-4xl text-black`}></i>
        </div>
        <h3 className="font-bold text-black text-lg mb-2 font-hand">{skill.name}</h3>
        <p className="text-gray-700 text-sm leading-relaxed font-hand">{skill.desc}</p>
      </div>
      
      {/* Hand-drawn style progress bar */}
      <div className="mt-4 relative">
        <div className="w-full h-3 border-2 border-black bg-white" style={{ borderRadius: '10px 2px 10px 2px' }}>
          <div 
            className="h-full bg-yellow-300 border-r-2 border-black transition-all duration-1000 delay-300"
            style={{ 
              width: `${skill.level || 80}%`,
              borderRadius: '8px 0 8px 0'
            }}
          ></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-xs text-black font-hand font-bold">
          {skill.level || 80}%
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className={`bg-white border-3 border-black p-6 transform hover:rotate-1 hover:scale-105 transition-all duration-300 shadow-lg animate-slide-up relative overflow-hidden`}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        borderRadius: '15px 5px 15px 25px', // Irregular doodle-style border
        borderWidth: '3px',
      }}
    >
      {/* Doodle decorations */}
      <div className="absolute top-3 right-3">
        <svg width="30" height="30" className="text-black opacity-20">
          <path d="M5,5 Q15,2 25,5 Q22,15 25,25 Q15,22 5,25 Q8,15 5,5 Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="3,3" />
        </svg>
      </div>
      
      <div className="relative">
        {/* Project header with doodle icon */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 border-2 border-black bg-yellow-200 flex items-center justify-center transform -rotate-3" 
               style={{ borderRadius: '50% 30% 50% 30%' }}>
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-2xl font-hand">🚀</div>
        </div>

        {/* Project content */}
        <h3 className="font-bold text-xl text-black mb-3 font-hand transform hover:skew-x-2 transition-transform duration-300">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed font-hand">{project.description}</p>

        {/* Tech stack with doodle-style tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech?.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-sm font-bold bg-yellow-100 text-black border-2 border-black font-hand transform hover:-rotate-1 transition-transform duration-200"
              style={{ 
                borderRadius: i % 2 === 0 ? '15px 5px 15px 5px' : '5px 15px 5px 15px'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project links with doodle buttons */}
        <div className="flex space-x-3">
          <button className="bg-black text-white px-4 py-2 border-2 border-black font-bold text-sm font-hand flex items-center space-x-2 transform hover:bg-yellow-300 hover:text-black hover:-rotate-1 transition-all duration-300"
                  style={{ borderRadius: '20px 5px 20px 5px' }}>
            <span>View Project</span>
            <span>→</span>
          </button>
          <button className="border-2 border-black bg-white text-black p-2 hover:bg-gray-100 transition-colors transform hover:rotate-1 duration-300"
                  style={{ borderRadius: '50% 20% 50% 20%' }}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Static projects data - you can easily add more projects here
  const projects = [
    {
      _id: '1',
      title: 'E-Commerce Backend API',
      description: 'Full-featured REST API for e-commerce platform with user authentication, payment processing, and inventory management.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe API']
    },
    {
      _id: '2',
      title: 'Real-time Chat Application',
      description: 'Socket.io powered chat application with room management, file sharing, and user presence indicators.',
      tech: ['Node.js', 'Socket.io', 'React', 'MongoDB']
    },
    {
      _id: '3',
      title: 'Task Management System',
      description: 'Collaborative project management tool with task assignment, progress tracking, and team collaboration features.',
      tech: ['MERN Stack', 'Redux', 'JWT', 'Material-UI']
    }
  ];

  // Handle contact form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const result = await emailjs.sendForm(
        'service_upn08o9',        // Replace with your EmailJS service ID
        'template_rudbwje',       // Replace with your EmailJS template ID
        e.target,                 // The form element
        't3c8ILOjrupxnV3vd'         // Replace with your EmailJS public key
      );

      console.log('Email sent successfully!', result.text);
      setSubmitMessage('✅ Message sent successfully! Thanks for reaching out!');
      e.target.reset(); // Clear the form
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
      
    } catch (error) {
      console.error('Failed to send email:', error.text);
      setSubmitMessage('❌ Failed to send message. Please try again or contact me directly.');
      
      // Hide error message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {

    // Initialize rough.js doodles
    setTimeout(() => {
      // Hero doodle - make it more colorful and doodle-like
      const heroCanvas = document.getElementById('hero-doodle');
      if (heroCanvas) {
        const ctx = heroCanvas.getContext('2d');
        const rc = rough.canvas(heroCanvas);
        
        // Load and display photo in laptop area
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = function() {
          console.log('Photo loaded successfully');
          // Clear canvas first
          ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
          
          // Create clipping area for the entire laptop
          ctx.save();
          ctx.beginPath();
          ctx.roundRect(50, 55, 200, 110, 10);
          ctx.clip();
          
          // Draw the photo to fill the entire laptop area
          ctx.drawImage(img, 50, 55, 200, 110);
          ctx.restore();
          
          // Draw yellow laptop border to frame the photo
          rc.rectangle(45, 50, 210, 120, { 
            roughness: 2.5, 
            stroke: '#ffeb3b',
            strokeWidth: 6,
            fill: 'transparent'
          });
          
          // Draw inner black border on top of the photo
          rc.rectangle(50, 55, 200, 110, { 
            roughness: 2.5, 
            stroke: '#000',
            strokeWidth: 2,
            fill: 'transparent'
          });
          
          console.log('Photo integrated into laptop doodle');
        };
        
        img.onerror = function(e) {
          console.error('Failed to load photo:', e);
          // Fallback: draw empty laptop if image fails to load
          rc.rectangle(45, 50, 210, 120, { 
            roughness: 2.5, 
            stroke: '#ffeb3b',
            strokeWidth: 6,
            fill: 'transparent'
          });
          rc.rectangle(50, 55, 200, 110, { 
            roughness: 2.5, 
            fill: '#f0f8ff',
            stroke: '#000',
            strokeWidth: 2,
            fillStyle: 'zigzag'
          });
        };
        
        // Try multiple image paths
        const imagePaths = [
          '/photo.jpeg',
          './photo.jpeg',
          `${process.env.PUBLIC_URL}/photo.jpeg`
        ];
        
        let currentPathIndex = 0;
        const tryNextPath = () => {
          if (currentPathIndex < imagePaths.length) {
            console.log(`Trying to load image from: ${imagePaths[currentPathIndex]}`);
            img.src = imagePaths[currentPathIndex];
            currentPathIndex++;
          } else {
            console.error('All image paths failed, using fallback');
            img.onerror();
          }
        };
        
        img.onerror = function(e) {
          console.error(`Failed to load from ${imagePaths[currentPathIndex - 1]}:`, e);
          tryNextPath();
        };
        
        // Start loading
        tryNextPath();
        
        // Decorative elements
        /*
        
        rc.circle(80, 30, 25, {
          roughness: 2,
          fill: '#ff9800',
          stroke: '#000',
          strokeWidth: 2,
          fillStyle: 'dots'
        });
        
        rc.ellipse(220, 40, 35, 20, {
          roughness: 2.5,
          fill: '#e91e63',
          stroke: '#000',
          strokeWidth: 2,
          fillStyle: 'solid'
        });
        */
       
        
      }

      // Skill icons are now handled by Font Awesome in the SkillCard component
    }, 500);
  }, []);

  const skills = [
    { name: 'Node.js', desc: 'Backend development', level: 90 },
    { name: 'Express.js', desc: 'API building', level: 85 },
    { name: 'MongoDB', desc: 'Database management', level: 80 },
    { name: 'MySQL', desc: 'Relational databases', level: 75 },
    { name: 'JavaScript', desc: 'Core scripting', level: 90 },
    { name: 'HTML/CSS', desc: 'Frontend basics', level: 85 },
    { name: 'C++ (DSA)', desc: 'Algorithms', level: 70 },
    { name: 'Git/GitHub/Postman/REST APIs', desc: 'Tools & workflows', level: 85 }
  ];

  return (
    <div className="min-h-screen bg-cream text-black relative" style={{ backgroundColor: '#fffbea' }}>
      <DoodleBackground />
      
      {/* Hero Section with doodle style */}
      <header className="relative py-5 flex items-center justify-center px-6 z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6 relative">
            <div className="absolute -top-5 -left-5 transform rotate-12">
              <svg width="50" height="50" className="text-black opacity-30">
                <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" />
              </svg>
            </div>
            <canvas id="hero-doodle" width="300" height="220" className="mx-auto border-2 border-black transform hover:rotate-2 transition-transform duration-500" 
                    style={{ borderRadius: '20px 5px 20px 5px' }}></canvas>
            <div className="absolute -bottom-5 -right-5 transform -rotate-12">
              <svg width="40" height="40" className="text-black opacity-30">
                <rect x="5" y="5" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 font-hand transform hover:skew-y-2 transition-transform duration-300"
              style={{ textShadow: '3px 3px 0px #ffeb3b' }}>
            Ankit Gupta 👋
          </h1>
          
          <div className="bg-white hover:bg-yellow-300 border-3 border-black p-4 mb-8 transform -rotate-1 hover:rotate-0 transition-all duration-300 group"
               style={{ 
                 borderRadius: '25px 5px 25px 5px',
                 borderWidth: '3px'
               }}>
            <h2 className="text-2xl md:text-3xl font-bold text-black font-hand">
              MERN Backend Developer 💻
            </h2>
          </div>
          
          <div className="bg-yellow-100 border-2 border-black p-6 mb-12 transform rotate-1 hover:-rotate-1 transition-transform duration-300"
               style={{ borderRadius: '15px 25px 15px 25px' }}>
            <p className="text-lg md:text-xl text-black leading-relaxed font-hand">
              Building secure, scalable backends with a creative twist! 🎨<br />
              Passionate about creating efficient solutions that power amazing user experiences. ✨
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                const projectsSection = document.querySelector('#projects-section');
                if (projectsSection) {
                  const elementPosition = projectsSection.offsetTop;
                  const offsetPosition = elementPosition + 50;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-black text-white px-8 py-4 border-2 border-black font-bold text-lg font-hand flex items-center space-x-2 hover:bg-yellow-300 hover:text-black transform hover:-rotate-2 transition-all duration-300"
              style={{ borderRadius: '25px 5px 25px 5px' }}>
              <span>View My Work</span>
              <span className="text-2xl">👀</span>
            </button>
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact-section');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-white text-black px-8 py-4 border-3 border-black font-bold text-lg font-hand hover:bg-yellow-100 transform hover:rotate-2 transition-all duration-300"
              style={{ 
                borderRadius: '5px 25px 5px 25px',
                borderWidth: '3px'
              }}>
              Get In Touch 📬
            </button>
            <a 
              href="/resume.docx" 
              download="Ankit_Gupta_Resume.docx"
              className="bg-yellow-300 text-black px-8 py-4 border-3 border-black font-bold text-lg font-hand flex items-center space-x-2 hover:bg-yellow-400 hover:shadow-lg transform hover:rotate-1 transition-all duration-300"
              style={{ 
                borderRadius: '20px 8px 20px 8px',
                borderWidth: '3px'
              }}>
              <span>Download Resume</span>
              <span className="text-2xl">📄</span>
            </a>
          </div>
        </div>
      </header>

      {/* About Section with doodle style */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black font-hand mb-4 transform hover:skew-x-2 transition-transform duration-300">
              About Me 🎯
            </h2>
            <div className="w-24 h-1 bg-black mx-auto transform rotate-1"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="bg-white hover:bg-gradient-to-br hover:from-yellow-100 hover:to-orange-100 border-3 border-black p-8 transform -rotate-1 hover:rotate-0 transition-all duration-500 shadow-lg hover:shadow-2xl group"
                   style={{ 
                     borderRadius: '25px 5px 25px 5px',
                     borderWidth: '3px'
                   }}>
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl font-bold text-black font-hand group-hover:text-orange-700 transition-colors duration-300">My Journey</h3>
                  <span className="ml-3 text-3xl group-hover:animate-bounce">🚀</span>
                </div>
                <div className="space-y-4 font-hand text-black group-hover:text-gray-800 leading-relaxed transition-colors duration-300">
                  <p>
                    I'm Ankit Gupta, a B.Tech student in Information Technology at JSS Academy of Technical Education, Noida 
                    (CGPA: 8.14 after 3 semesters, 2023–present). I scored 91% in Class XII (CBSE) with PCM + CS from Radiant Academy School.
                  </p>
                  <p>
                    As Head Boy at school, I led events and teams, honing my leadership and communication skills. 
                    Achievements include 3rd place in an internal hackathon for "Kawach". 🏆
                  </p>
                  <p>
                    In my free time, I play the ukulele 🎸 and solve real-life problems with tech. 
                    Always excited to take on new challenges and learn cutting-edge technologies! 💡
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-yellow-100 border-3 border-black p-8 transform rotate-1 hover:-rotate-1 transition-transform duration-300 shadow-lg"
                   style={{ 
                     borderRadius: '5px 25px 5px 25px',
                     borderWidth: '3px'
                   }}>
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl font-bold text-black font-hand">Let's Connect</h3>
                  <span className="ml-3 text-3xl">🤝</span>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: '📧', text: 'ankitgupta23sep@gmail.com', href: 'mailto:ankitgupta23sep@gmail.com' },
                    { icon: '📱', text: '(+91) 7835867383', href: 'tel:+917835867383' },
                    { icon: '💼', text: 'LinkedIn: @ankit23sep', href: 'https://linkedin.com/in/ankit23sep' },
                    { icon: '💻', text: 'GitHub: /ankit23-exe', href: 'https://github.com/ankit23-exe' }
                  ].map((contact, i) => (
                    <a key={i} href={contact.href} 
                       target={contact.icon === '💼' || contact.icon === '💻' ? '_blank' : undefined}
                       rel={contact.icon === '💼' || contact.icon === '💻' ? 'noopener noreferrer' : undefined}
                       className="flex items-center space-x-3 hover:bg-yellow-50 p-2 rounded-lg transition-colors duration-200 transform hover:scale-105">
                      <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center transform hover:rotate-12 transition-transform duration-200"
                           style={{ borderRadius: '50% 30% 50% 30%' }}>
                        <span className="text-xl">{contact.icon}</span>
                      </div>
                      <span className="text-black font-hand font-bold hover:text-blue-600 transition-colors duration-200">{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with doodle style */}
      <section className="py-20 px-6 relative z-10" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black font-hand mb-4 transform hover:-skew-x-2 transition-transform duration-300">
              My Skills 💪
            </h2>
            <div className="flex justify-center">
              <div className="w-32 h-2 bg-black transform -rotate-1" style={{ borderRadius: '10px 2px 10px 2px' }}></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with doodle style */}
      <section id="projects-section" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black font-hand mb-4 transform hover:skew-y-2 transition-transform duration-300">
              Featured Projects 🎨
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-2 bg-black transform rotate-2" style={{ borderRadius: '5px 10px 5px 10px' }}></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with doodle style */}
      <section id="contact-section" className="py-12 px-6 relative z-10 border-t-4 border-black border-dotted" style={{ backgroundColor: '#f0f8ff' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black font-hand mb-4 transform hover:-skew-y-2 transition-transform duration-300">
              Get In Touch 📬
            </h2>
            <div className="flex justify-center">
              <div className="w-28 h-2 bg-black transform -rotate-1" style={{ borderRadius: '10px 3px 10px 3px' }}></div>
            </div>
          </div>
          
          <div className="bg-white border-3 border-black p-6 md:p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg"
               style={{ 
                 borderRadius: '30px 10px 30px 10px',
                 borderWidth: '3px'
               }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitMessage && (
                <div className="mb-4 p-3 rounded-lg bg-yellow-50 border-2 border-black text-center font-hand font-bold">
                  {submitMessage}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-left text-black font-bold mb-2 font-hand" htmlFor="name">
                    Name 👤
                  </label>
                  <input 
                    className="w-full px-4 py-2 border-2 border-black text-black font-hand focus:outline-none focus:border-yellow-400 focus:bg-yellow-50 transition-all duration-300" 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your full name"
                    style={{ borderRadius: '15px 5px 15px 5px' }}
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-left text-black font-bold mb-2 font-hand" htmlFor="email">
                    Email 📧
                  </label>
                  <input 
                    className="w-full px-4 py-2 border-2 border-black text-black font-hand focus:outline-none focus:border-yellow-400 focus:bg-yellow-50 transition-all duration-300" 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="your.email@example.com"
                    style={{ borderRadius: '5px 15px 5px 15px' }}
                    required 
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-left text-black font-bold mb-2 font-hand" htmlFor="message">
                  Message 💬
                </label>
                <textarea 
                  className="w-full px-4 py-2 border-2 border-black text-black font-hand focus:outline-none focus:border-yellow-400 focus:bg-yellow-50 transition-all duration-300 resize-none" 
                  id="message" 
                  name="message" 
                  rows="4"
                  placeholder="Tell me about your project or just say hello!"
                  style={{ borderRadius: '20px 10px 20px 10px' }}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''} bg-black text-white px-6 py-3 border-2 border-black font-bold text-lg font-hand flex items-center justify-center space-x-2 mx-auto hover:bg-yellow-300 hover:text-black transform hover:-rotate-2 hover:scale-105 transition-all duration-300`}
                style={{ borderRadius: '25px 10px 25px 10px' }}>
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <span className="text-2xl">{isSubmitting ? '⏳' : '🚀'}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer with enhanced doodle style */}
      <footer className="relative py-16 px-6 border-t-4 border-black z-10" style={{ 
        borderStyle: 'dashed',
        backgroundColor: '#fffbea',
        background: 'linear-gradient(45deg, #fffbea 0%, #fff9e6 50%, #fffbea 100%)'
      }}>
        {/* Decorative doodle elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <circle cx="10%" cy="30%" r="20" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="3,3" />
            <rect x="85%" y="20%" width="30" height="30" fill="none" stroke="#000" strokeWidth="2" transform="rotate(45)" />
            <path d="M 20%,80% Q 30%,70% 40%,80%" stroke="#000" strokeWidth="2" fill="none" />
            <ellipse cx="80%" cy="70%" rx="25" ry="15" fill="none" stroke="#000" strokeWidth="2" transform="rotate(-20)" />
            <polygon points="15%,50% 20%,40% 25%,50% 20%,60%" fill="none" stroke="#000" strokeWidth="2" />
            <circle cx="90%" cy="85%" r="12" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="2,2" />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          {/* Creative thank you message */}
          <div className="mb-8 relative">
            <div className="absolute -top-3 -left-3 transform rotate-12 z-0">
              <svg width="40" height="40" className="text-yellow-300 opacity-60">
                <circle cx="20" cy="20" r="15" fill="currentColor" stroke="#000" strokeWidth="2" />
              </svg>
            </div>
            <div className="bg-white border-3 border-black p-6 inline-block transform -rotate-1 hover:rotate-1 transition-transform duration-300 shadow-lg relative z-10"
                 style={{ 
                   borderRadius: '25px 10px 25px 10px',
                   borderWidth: '3px'
                 }}>
              <h3 className="text-2xl font-bold text-black font-hand mb-2">
                Thanks for Visiting! 🌟
              </h3>
              <p className="text-gray-700 font-hand">
                Let's build something amazing together
              </p>
            </div>
            <div className="absolute -bottom-2 -right-2 transform -rotate-12 z-0">
              <svg width="30" height="30" className="text-yellow-200 opacity-60">
                <rect x="5" y="5" width="20" height="20" fill="currentColor" stroke="#000" strokeWidth="2" />
              </svg>
            </div>
          </div>
          
          {/* Fun tech stack showcase */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { name: 'React', emoji: '⚛️' },
              { name: 'Node.js', emoji: '💚' },
              { name: 'MongoDB', emoji: '🍃' },
              { name: 'Express', emoji: '🚀' },
              { name: 'JavaScript', emoji: '✨' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="bg-yellow-100 border-2 border-black px-4 py-2 font-hand font-bold text-black transform hover:-rotate-3 hover:scale-105 transition-all duration-300"
                style={{
                  borderRadius: index % 2 === 0 ? '20px 5px 20px 5px' : '5px 20px 5px 20px',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="mr-2">{tech.emoji}</span>
                {tech.name}
              </div>
            ))}
          </div>
          
          {/* Main footer content */}
          <div className="bg-gradient-to-r from-yellow-200 to-yellow-100 border-3 border-black p-8 transform rotate-1 hover:-rotate-1 transition-transform duration-500 shadow-xl"
               style={{ 
                 borderRadius: '30px 15px 30px 15px',
                 borderWidth: '3px'
               }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left: Coding status */}
              <div className="bg-white border-2 border-black p-4 transform -rotate-2 hover:rotate-2 transition-transform duration-300"
                   style={{ borderRadius: '15px 5px 15px 5px' }}>
                <div className="text-lg font-hand font-bold text-black">
                  Status: <span className="text-green-600">Coding 💻</span>
                </div>
                <div className="text-sm text-gray-600 font-hand mt-1">
                  Building the future, one line at a time
                </div>
              </div>
              
              {/* Center: Copyright */}
              <div className="bg-black text-white p-6 border-2 border-black font-hand transform hover:scale-105 transition-transform duration-300"
                   style={{ borderRadius: '50% 20% 50% 20%' }}>
                <div className="text-lg font-bold">
                  © 2025 Ankit Gupta
                </div>
                <div className="text-sm opacity-90 mt-1">
                  Crafted with ❤️ and lots of ☕
                </div>
                <div className="flex justify-center mt-2 text-xl">
                  🎨✨💻
                </div>
              </div>
              
              {/* Right: Fun fact */}
              <div className="bg-white border-2 border-black p-4 transform rotate-2 hover:-rotate-2 transition-transform duration-300"
                   style={{ borderRadius: '5px 15px 5px 15px' }}>
                <div className="text-lg font-hand font-bold text-black">
                  Fun Fact 🎸
                </div>
                <div className="text-sm text-gray-600 font-hand mt-1">
                  I play ukulele when debugging!
                </div>
              </div>
            </div>
            
            {/* Bottom inspirational quote */}
            <div className="mt-6 pt-4 border-t-2 border-black border-dashed">
              <p className="text-black font-hand font-bold text-lg italic">
                "Code is poetry, and every bug is just a plot twist!" 📝✨
              </p>
            </div>
          </div>
          
          {/* Scroll to top hint */}
          <div className="mt-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white border-2 border-black px-6 py-3 font-hand font-bold text-black hover:bg-yellow-100 transform hover:-rotate-3 hover:scale-105 transition-all duration-300"
              style={{ borderRadius: '25px 8px 25px 8px' }}
            >
              <span className="mr-2">🙉</span>
              Back to Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
