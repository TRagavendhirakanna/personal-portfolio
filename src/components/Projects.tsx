
import React from 'react';
import { ExternalLink, Github, Palette, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring smooth animations and interactive elements.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      githubUrl: '#',
      liveUrl: '#',
      category: 'Web Development',
      featured: true
    },
    {
      title: 'Startup Gig Platform',
      description: 'A full-stack MERN application connecting startups with talented individuals. Features user authentication, real-time messaging, and project management.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop',
      githubUrl: '#',
      liveUrl: '#',
      category: 'Full Stack',
      featured: true
    },
    {
      title: 'UI/UX Design System',
      description: 'Comprehensive design system with reusable components, style guides, and design tokens for consistent user experiences.',
      technologies: ['Figma', 'Adobe XD', 'CSS3', 'Design Tokens'],
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop',
      githubUrl: '#',
      liveUrl: '#',
      category: 'UI/UX Design',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            What I've Built
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent projects demonstrating my skills in web development and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500 text-white">
                    {project.category === 'UI/UX Design' ? <Palette className="mr-1" size={12} /> : <Code className="mr-1" size={12} />}
                    {project.category}
                  </span>
                </div>

                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:text-cyan-400 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-700/50 text-cyan-400 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-700/50 text-white rounded-lg hover:bg-gray-600/50 transition-colors"
                  >
                    <Github className="mr-2" size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
