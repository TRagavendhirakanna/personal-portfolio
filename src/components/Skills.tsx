
import React from 'react';
import { Code, Palette, Database, Smartphone, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Web Development',
      skills: ['HTML5', 'CSS3', '', 'React.js', 'Node.js'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Wireframing', 'Prototyping'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Database,
      title: 'MERN Stack',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: Globe,
      title: 'WordPress',
      skills: ['Custom Themes', 'Elementor', 'WooCommerce', 'Plugin Dev', ''],
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      skills: ['', 'CSS Grid', 'Flexbox', 'Bootstrap', 'Tailwind'],
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Wrench,
      title: 'Tools & Others',
      skills: ['Git', 'VS Code', 'Chrome DevTools', '', 'Webpack'],
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            My Tech Arsenal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center text-gray-300 group-hover:text-white transition-colors"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3 opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
