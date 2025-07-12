
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate on something amazing? Let's discuss your next project!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">+91 9342383967</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">ragaventhira6646@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-green-400 to-teal-500 rounded-xl">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">Periyanerkunam, Cuddalore</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-400 mb-4">Connect with me on social media</p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com"
                    className="p-3 bg-gray-700/50 rounded-xl text-gray-400 hover:text-cyan-400 hover:bg-gray-600/50 transition-all transform hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="p-3 bg-gray-700/50 rounded-xl text-gray-400 hover:text-cyan-400 hover:bg-gray-600/50 transition-all transform hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
              <h3 className="text-xl font-bold mb-4 text-white">Download My CV</h3>
              <p className="text-gray-300 mb-6">
                Get a detailed overview of my experience, skills, and achievements.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                <Send className="mr-2" size={20} />
                Download CV
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="Project Collaboration"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 font-semibold"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
