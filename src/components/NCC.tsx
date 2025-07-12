
import React from 'react';
import { Award, Shield, Star, Calendar } from 'lucide-react';

const NCC = () => {
  const achievements = [
    {
      title: 'NCC Cadet Member',
      period: '2022 - 2025',
      description: 'Active member of the National Cadet Corps, participating in various training programs and community service activities.',
      icon: Shield,
      color: 'from-green-400 to-teal-500'
    },
    {
      title: 'Army Attachment Camp  (AAC)',
      period: '2023',
      description: 'Participated in the prestigious All India Annual NCC Camp, showcasing discipline and leadership skills.',
      icon: Star,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Thal Sainik Camp (TSC)',
      period: '2023',
      description: 'Completed intensive military training at Thal Sainik Camp, developing physical fitness and tactical skills.',
      icon: Award,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Ek Bharat Shreshtha Bharat (EBSB)',
      period: '2022-2023',
      description: 'Participated in cultural exchange programs promoting unity and understanding of India\'s diverse heritage.',
      icon: Calendar,
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section id="ncc" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Beyond Code – NCC Cadet
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Leadership, discipline, and service to the nation through National Cadet Corps
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="text-white" size={32} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                      {achievement.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NCC Motto Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl p-12 backdrop-blur-sm border border-cyan-500/30">
            <h3 className="text-3xl font-bold mb-4 text-white">Unity and Discipline</h3>
            <p className="text-xl text-cyan-400 mb-6">"एकता और अनुशासन"</p>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The NCC experience has shaped my character, instilling values of leadership, teamwork, and service. 
              These qualities complement my technical skills, making me a well-rounded professional ready to contribute 
              to both technology and society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NCC;
