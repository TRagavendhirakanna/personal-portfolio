
import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              RAGAVA.IN
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating digital experiences that inspire and innovate. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ragaventhira6646@gmail.com"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>+91 9342383967</p>
              <p>ragaventhira6646@gmail.com</p>
              <p>Periyanerkunam, Cuddalore</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 mb-4 sm:mb-0">
            <span>Crafted with</span>
            <Heart className="mx-2 text-red-500" size={16} fill="currentColor" />
            <span>by Ragavavendhirakanna</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Ragava.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
