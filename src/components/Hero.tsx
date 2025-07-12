
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Ragavendhira
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Tech Explorer & Creative Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg text-cyan-400 mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <span className="bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">Web Developer</span>
            <span className="bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">UI Designer</span>
            <span className="bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">MERN Stack Enthusiast</span>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <a href="https://github.com" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ragavendhira-kanna-3941752a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ragaventhira6646@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Explore My Journey
              <ChevronDown className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
