
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/ui/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import NCC from '@/components/NCC';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <NCC />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
