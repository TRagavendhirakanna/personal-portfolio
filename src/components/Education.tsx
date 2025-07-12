
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Engineering College',
      period: '2022 - 2026',
      status: 'Pursuing',
      description: 'Focused on software development, data structures, algorithms, and modern web technologies.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      degree: 'Higher Secondary (HSLC)',
      institution: 'Senior Secondary School',
      period: '2020 - 2022',
      status: '61%',
      description: 'Completed with focus on Mathematics and Science subjects.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      degree: 'Secondary (SSLC)',
      institution: 'High School',
      period: '2018 - 2020',
      status: '54%',
      description: 'Foundation in core subjects with early interest in technology.',
      color: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Academic Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My educational path that shaped my passion for technology and innovation
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.degree}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} mb-8 md:mb-0`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${edu.color} text-white text-sm font-semibold mb-4`}>
                      <Calendar className="mr-2" size={16} />
                      {edu.period}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>
                    
                    <div className="flex items-center text-gray-400 mb-3">
                      <GraduationCap className="mr-2" size={18} />
                      <span>{edu.institution}</span>
                    </div>
                    
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${edu.color} bg-opacity-20 text-cyan-400 text-sm font-semibold mb-4`}>
                      {edu.status}
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
