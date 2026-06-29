import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';
import './Leadership.css';

gsap.registerPlugin(ScrollTrigger);

const placeholderSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23f1f5f9'/%3E%3Cg transform='translate(152, 202) scale(4)'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23cbd5e1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpolyline points='21 15 16 10 5 21'/%3E%3C/svg%3E%3C/g%3E%3C/svg%3E";

const leaders = [
  {
    id: 1,
    name: 'Gopalbhai Shingala',
    role: 'Chairman',
    image: '/assets/images/Team/Gopalbhai_Shingala.png',
    linkedin: '#', // Icon added
    description: ""
  },
  {
    id: 2,
    name: 'Vijay Shingala',
    role: 'Managing Director',
    image: '/assets/images/Team/Vijay_Shingala.png',
    linkedin: 'https://www.linkedin.com/in/vijay-shingala-6580b8241/',
    description: ""
  },
  {
    id: 3,
    name: 'Ravi Vadodariya',
    role: 'Director',
    image: '/assets/images/Team/Ravi_Vadodariya.png',
    linkedin: '#',
    description: ""
  },
  {
    id: 4,
    name: 'Dhaval Vadodariya',
    role: 'Chief Executive Officer',
    image: '/assets/images/Team/Dhaval_Vadodariya.png',
    linkedin: 'https://www.linkedin.com/in/dhaval-vadodariya-a0b323417/',
    description: ""
  }
];

const Leadership = () => {
  const containerRef = useRef(null);
  const [selectedLeader, setSelectedLeader] = useState(null);

  useGSAP(() => {
    // Reveal animation for cards
    gsap.fromTo('.leader-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.leadership-section',
          start: 'top 80%',
        }
      }
    );

    // Description animation
    gsap.fromTo('.leadership-desc',
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: '.leadership-desc',
          start: "top 85%",
        }
      }
    );

  }, { scope: containerRef });

  // Modal Animation Logic
  useGSAP(() => {
    if (selectedLeader) {
      gsap.fromTo('.leader-modal-overlay',
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo('.leader-modal-content',
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      );
    }
  }, [selectedLeader]);

  const closeModal = () => {
    gsap.to('.leader-modal-content', { y: 20, opacity: 0, scale: 0.95, duration: 0.3, ease: 'power2.in' });
    gsap.to('.leader-modal-overlay', { opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: () => setSelectedLeader(null) });
  };

  return (
    <section ref={containerRef} className="leadership-section">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
        {/* Top: Text Content */}
        <div className="container text-center mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <span className="impact-eyebrow inline-block mb-6 md:mb-8">OUR LEADERSHIP</span>
          <h2 className="global-section-heading">
            Leadership That Built the Foundation
          </h2>
          <p className="global-section-desc leadership-desc">
            Our company was founded with a vision of quality, trust, and growth. The dedication and leadership of our founders continue to guide our success today.          </p>
        </div>

        {/* Bottom: Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="leader-card"
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="leader-image-box">
                <img src={leader.image} alt={leader.name} />
              </div>
              <div className="leader-info">
                <h4 className="leader-name">{leader.name}</h4>
                <p className="leader-role">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedLeader && (
        <div className="leader-modal-overlay" onClick={closeModal}>
          <div className="leader-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="leader-modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="leader-modal-grid">
              <div className="leader-modal-image">
                <img src={selectedLeader.image} alt={selectedLeader.name} />
              </div>
              <div className="leader-modal-info">
                <h3 className="leader-modal-name">{selectedLeader.name}</h3>
                <p className="leader-modal-role">{selectedLeader.role}</p>

                <div className="leader-modal-desc">
                  {selectedLeader.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Leadership;
