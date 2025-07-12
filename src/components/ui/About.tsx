
import React from 'react';
import { User, Heart, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Who Am I?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <User className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">About Me</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Motivated and enthusiastic IT undergraduate with a passion for creating digital experiences that matter. 
                I blend creativity with technical expertise to build solutions that are both beautiful and functional.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Heart className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">My Passion</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm deeply passionate about UI/UX design and web development. There's something magical about 
                transforming ideas into interactive experiences that users love and remember.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Code2 className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">My Approach</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I believe in clean code, intuitive design, and continuous learning. Every project is an opportunity 
                to push boundaries and create something extraordinary.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-cyan-500/30">
              <div className="text-center">
                <img
                   src="me.jpg"
                    alt="Ragavendhira"
                      className="w-48 h-48 mx-auto mb-6 rounded-full object-cover shadow-2xl border-4 border-cyan-400"
                    />

                <h3 className="text-2xl font-bold mb-2">Ragavendhirakanna T</h3>
                <p className="text-cyan-400 mb-4">Full Stack Developer</p>
                <p className="text-gray-300 text-sm">
                  "Code is poetry written in logic, design is poetry written in pixels."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
