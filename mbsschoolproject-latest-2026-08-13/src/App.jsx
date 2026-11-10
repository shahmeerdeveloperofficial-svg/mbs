import React from 'react';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import CoursesSection from './sections/CoursesSection';
import AboutSection from './sections/AboutSection';
import ActivitiesSection from './sections/ActivitiesSection';
import CTASection from './sections/CTASection';
import DiscoverTalentsSection from './sections/DiscoverTalentsSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import FooterSection from './sections/FooterSection';
import useSiteMotion from './hooks/useSiteMotion';

function App() {
  useSiteMotion();

  return (
    <div className="overflow-x-hidden bg-brand-cream text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <AboutSection />
        <ActivitiesSection />
        <CTASection />
        <DiscoverTalentsSection />
        <WhyChooseUsSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
