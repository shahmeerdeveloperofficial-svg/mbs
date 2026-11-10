import React, { useState } from 'react';
import SectionBadge from '../components/SectionBadge';
import Button from '../components/Button';
import CourseDetailModal from '../components/CourseDetailModal';
import send24 from '../assets/webpng/send-24.png';
import send27 from '../assets/webpng/send-27.png';
import send28 from '../assets/webpng/send-28.png';
import send45 from '../assets/webpng/send-45.png';
import send47 from '../assets/webpng/send-47.png';
import juniorMontessoriImage from '../assets/cicular shape-01.png';
import seniorMontessoriImage from '../assets/cicular shape-02.png';
import advanceMontessoriImage from '../assets/cicular shape-03.png';
import primaryImage from '../assets/Page 1.jpg';
import scienceLabImage from '../assets/Page 2.png';
import montessoriShelfImage from '../assets/Page 3.png';

const allCourses = [
  {
    category: 'montessori',
    title: 'Junior Montessori',
    age: 'Age 2.5 to 4',
    image: juniorMontessoriImage,
    badgeClass: 'bg-[#f5222d]',
    ageClass: 'text-[#f5222d]',
    timing: '8:30 AM – 12:00 PM',
    desc: 'Joyful first steps into learning where toddlers explore through sensory play, Jolly Phonics sounds, rhymes, and socialization in a loving setup.',
    subjects: ['Sensory Exploration', 'Jolly Phonics (Stage 1)', 'Practical Life Skills', 'Islamic Manners & Duas'],
  },
  {
    category: 'montessori',
    title: 'Senior Montessori',
    age: 'Age 4 to 6',
    image: seniorMontessoriImage,
    badgeClass: 'bg-brand-yellow',
    ageClass: 'text-brand-yellow',
    timing: '8:00 AM – 12:45 PM',
    desc: 'Growing with curiosity and confidence. Children master sound blending, early reading, counting rods, creative craft, and self-expression.',
    subjects: ['Reading & Blending', 'Montessori Math Rods', 'Urdu Haroof-e-Tahajji', 'Nature & Discovery'],
  },
  {
    category: 'montessori',
    title: 'Advance Montessori',
    age: 'Age 6 to 7.5',
    image: advanceMontessoriImage,
    badgeClass: 'bg-brand-green',
    ageClass: 'text-brand-green',
    timing: '8:00 AM – 1:15 PM',
    desc: 'Independent thinkers ready for formal schooling. Focus on creative writing, mental math, science curiosity, and moral leadership.',
    subjects: ['Creative Writing', 'Logical Mathematics', 'General Science', 'Computer Familiarity'],
  },
  {
    category: 'montessori',
    title: 'Early Explorers Playgroup',
    age: 'Age 1.5 to 2.5',
    image: montessoriShelfImage,
    badgeClass: 'bg-[#ff6f6f]',
    ageClass: 'text-[#ff6f6f]',
    timing: '9:00 AM – 11:30 AM',
    desc: 'Gentle sensory discovery, music rhymes, physical balance games, toilet training assistance, and joyful emotional socialization.',
    subjects: ['Sensory Play', 'Motor Dexterity', 'Music & Rhymes', 'Social Connection'],
  },
  {
    category: 'primary',
    title: 'Primary Section (Class 1-5)',
    age: 'Age 7 to 11',
    image: primaryImage,
    badgeClass: 'bg-[#1976d2]',
    ageClass: 'text-[#1976d2]',
    timing: '7:45 AM – 1:30 PM',
    desc: 'Building rock-solid concepts. Integrated Oxford curriculum paired with compulsory Digital Skills & Coding from Class 1.',
    subjects: ['English & Urdu Literature', 'Conceptual Mathematics', 'STEM & Science Experiments', 'Digital Skills & Canva'],
  },
  {
    category: 'high',
    title: 'Middle & High (Class 6-10)',
    age: 'Age 11 to 16',
    image: scienceLabImage,
    badgeClass: 'bg-brand-dark',
    ageClass: 'text-brand-dark',
    timing: '7:45 AM – 2:00 PM',
    desc: 'Matric science board excellence, analytical lab experiments, computer science, AI prompt literacy, and career mentorship.',
    subjects: ['Physics, Chem, Bio Labs', 'Computer Science & Python', 'Pakistan Studies & Islamiyat', 'Public Speaking & Debates'],
  },
];

function CoursesSection({ onOpenAdmission, onOpenFee }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses =
    activeTab === 'all' ? allCourses : allCourses.filter((c) => c.category === activeTab);

  return (
    <section id="courses" className="scroll-mt-24 relative overflow-hidden py-16 sm:py-20">
      <img src={send47} alt="" className="pointer-events-none absolute left-0 top-0 hidden w-[220px] lg:block opacity-40" />
      <img src={send45} alt="" className="pointer-events-none absolute bottom-0 right-0 hidden w-[210px] lg:block opacity-40" />

      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div data-reveal="zoom">
            <SectionBadge>Academic Streams &amp; Programs</SectionBadge>
          </div>
          <h2
            className="mt-5 font-display text-4xl font-extrabold leading-none sm:text-6xl text-brand-dark"
            data-reveal
            data-delay="90"
          >
            <span className="text-brand-green">Our Educational</span>{' '}
            <span className="text-brand-yellow">Programs</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-8 text-slate-600"
            data-reveal
            data-delay="180"
          >
            Preparing children for life through academics, Islamic values, character building,
            confidence, and modern digital literacy from early years to Matric.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div
            className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            data-reveal
            data-delay="220"
          >
            {[
              { id: 'all', label: 'All Levels (6)' },
              { id: 'montessori', label: 'Montessori Wing (2.5 - 7.5 yrs)' },
              { id: 'primary', label: 'Primary (Grades 1-5)' },
              { id: 'high', label: 'Middle & Matric (Grades 6-10)' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-brand-green text-white shadow-soft scale-105'
                    : 'bg-white text-slate-600 border border-brand-green/15 hover:border-brand-yellow hover:text-brand-green'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-4" data-reveal data-delay="260">
            <img src={send24} alt="" className="w-18 animate-drift" data-fly data-speed="0.16" />
            <img src={send27} alt="" className="w-12 animate-pulse-soft" />
            <img src={send28} alt="" className="w-20 opacity-80" />
          </div>
        </div>

        {/* 6 Balanced Course Cards Grid - 2 complete rows of 3 */}
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course, index) => (
            <article
              key={course.title}
              className="group flex flex-col justify-between overflow-hidden rounded-[32px] bg-white shadow-card border border-brand-green/10 transition-all duration-400 hover:-translate-y-2.5 hover:shadow-soft"
              data-reveal="zoom"
              data-delay={String(80 + index * 70)}
            >
              <div>
                {/* Course Visual Header */}
                <div className="relative p-5 pb-0">
                  <div className="h-[210px] w-full overflow-hidden rounded-[26px] bg-brand-cream/60 flex items-center justify-center">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>

                  <div
                    className={`absolute left-1/2 -bottom-4 w-[85%] -translate-x-1/2 rounded-full px-4 py-2 text-center font-display text-lg font-bold text-white shadow-md ${course.badgeClass}`}
                  >
                    {course.title}
                  </div>
                </div>

                {/* Course Body Information */}
                <div className="px-6 pb-4 pt-8">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 pb-3 border-b border-slate-100">
                    <span className={`font-display text-base font-extrabold ${course.ageClass}`}>
                      {course.age}
                    </span>
                    <span className="rounded-full bg-brand-cream px-2.5 py-1 text-slate-500">
                      {course.timing}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-slate-500 line-clamp-3">
                    {course.desc}
                  </p>

                  {/* Core Subjects Pill List */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {course.subjects.map((sub) => (
                      <span
                        key={sub}
                        className="rounded-lg bg-brand-cream px-2.5 py-1 text-[11px] font-bold text-slate-600 border border-brand-green/10"
                      >
                        ✦ {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons for each course */}
              <div className="p-6 pt-0 border-t border-slate-100/80 mt-4 flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                  onClick={() => setSelectedCourse(course)}
                >
                  Syllabus Details
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1 text-xs"
                  onClick={() => onOpenAdmission && onOpenAdmission(course.title)}
                  arrow
                >
                  Enroll
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Global Consultation Banner */}
        <div
          className="mt-12 rounded-[28px] border-2 border-dashed border-brand-green/20 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card"
          data-reveal
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-brand-green">
              Unsure which grade suits your child best?
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Schedule a friendly developmental assessment with our Senior Montessori facilitators.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="green" size="md" onClick={onOpenFee}>
              View Fee Structure
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenAdmission && onOpenAdmission()}
              arrow
            >
              Book Assessment
            </Button>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onOpenAdmission={onOpenAdmission}
        />
      )}
    </section>
  );
}

export default CoursesSection;
