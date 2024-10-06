// src/components/Home.js
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection/HeroSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import './Home.css'; // Import the CSS file for styling

function Home() {
  return (
    <div className="home">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
