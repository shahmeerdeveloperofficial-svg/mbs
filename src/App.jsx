import React, { useState } from 'react';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import CoursesSection from './sections/CoursesSection';
import CampusesSection from './sections/CampusesSection';
import AboutSection from './sections/AboutSection';
import ActivitiesSection from './sections/ActivitiesSection';
import CTASection from './sections/CTASection';
import DiscoverTalentsSection from './sections/DiscoverTalentsSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import FooterSection from './sections/FooterSection';
import AdmissionModal from './components/AdmissionModal';
import FeeStructureModal from './components/FeeStructureModal';
import CampusTourModal from './components/CampusTourModal';
import useSiteMotion from './hooks/useSiteMotion';

function App() {
  useSiteMotion();

  // Global Interactive Modals State
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [admissionGrade, setAdmissionGrade] = useState('');
  const [admissionCampus, setAdmissionCampus] = useState('dilfraz');

  const [isFeeOpen, setIsFeeOpen] = useState(false);

  const [isTourOpen, setIsTourOpen] = useState(false);
  const [tourCampus, setTourCampus] = useState('dilfraz');

  const handleOpenAdmission = (grade = '', campus = 'dilfraz') => {
    setAdmissionGrade(grade);
    setAdmissionCampus(campus);
    setIsAdmissionOpen(true);
  };

  const handleOpenTour = (campus = 'dilfraz') => {
    setTourCampus(campus);
    setIsTourOpen(true);
  };

  const handleOpenFee = () => {
    setIsFeeOpen(true);
  };

  return (
    <div className="overflow-x-hidden bg-brand-cream text-slate-900 selection:bg-brand-yellow selection:text-white">
      <Navbar
        onOpenAdmission={handleOpenAdmission}
        onOpenTour={handleOpenTour}
        onOpenFee={handleOpenFee}
      />

      <main>
        <HeroSection
          onOpenAdmission={handleOpenAdmission}
          onOpenTour={handleOpenTour}
          onOpenFee={handleOpenFee}
        />

        <CoursesSection
          onOpenAdmission={handleOpenAdmission}
          onOpenFee={handleOpenFee}
        />

        <CampusesSection
          onOpenAdmission={handleOpenAdmission}
          onOpenTour={handleOpenTour}
          onOpenFee={handleOpenFee}
        />

        <AboutSection
          onOpenAdmission={handleOpenAdmission}
          onOpenTour={handleOpenTour}
        />

        <ActivitiesSection
          onOpenAdmission={handleOpenAdmission}
        />

        <CTASection
          onOpenAdmission={handleOpenAdmission}
          onOpenTour={handleOpenTour}
        />

        <DiscoverTalentsSection
          onOpenAdmission={handleOpenAdmission}
          onOpenTour={handleOpenTour}
        />

        <WhyChooseUsSection
          onOpenAdmission={handleOpenAdmission}
          onOpenTour={handleOpenTour}
          onOpenFee={handleOpenFee}
        />
      </main>

      <FooterSection
        onOpenAdmission={handleOpenAdmission}
        onOpenTour={handleOpenTour}
        onOpenFee={handleOpenFee}
      />

      {/* Global Interactive Modals */}
      <AdmissionModal
        isOpen={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
        initialGrade={admissionGrade}
        initialCampus={admissionCampus}
      />

      <FeeStructureModal
        isOpen={isFeeOpen}
        onClose={() => setIsFeeOpen(false)}
        onOpenAdmission={(grade) => handleOpenAdmission(grade, 'dilfraz')}
      />

      <CampusTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        defaultCampus={tourCampus}
      />
    </div>
  );
}

export default App;
