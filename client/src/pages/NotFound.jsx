import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import anime from 'animejs';
import SplitType from 'split-type';
import SEO from '../components/SEO/SEO';
import Schema from '../components/SEO/Schema';
import { buildWebPageSchema } from '../utils/schemaBuilders';
const NotFound = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const tagRef = useRef(null);
  const dividerRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const quickLinksRef = useRef(null);
  const cardRef = useRef(null);

  // ── 1. Number Scrambler (Anime.js) ─────────────────────────────────────
  useEffect(() => {
    if (!headingRef.current) return;
    const obj = { val: 0 };
    anime({
      targets: obj,
      val: 404,
      round: 1,
      duration: 1400,
      delay: 400,
      easing: 'easeOutExpo',
      update: () => {
        if (headingRef.current) {
          headingRef.current.textContent = String(obj.val).padStart(3, '0');
        }
      },
      complete: () => {
        // Gentle floating loop after scramble finishes
        anime({
          targets: headingRef.current,
          translateY: [0, -8, 0],
          duration: 3500,
          easing: 'easeInOutSine',
          loop: true,
        });
      },
    });

    return () => anime.remove(headingRef.current);
  }, []);

  // ── 2. GSAP entrance timeline ───────────────────────────────────────────
  useGSAP(() => {
    if (!cardRef.current) return;

    // SplitType — split subtitle into words for staggered reveal
    const split = new SplitType(subtitleRef.current, { types: 'words' });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Card slides up from below
    tl.fromTo(
      cardRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.9 }
    )
    // Tag badge fades in
    .fromTo(
      tagRef.current,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.5 },
      '-=0.5'
    )
    // Divider line grows from left
    .fromTo(
      dividerRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.5 },
      '-=0.2'
    )
    // Subtitle words stagger up
    .fromTo(
      split.words,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
      '-=0.2'
    )
    // Description fades up
    .fromTo(
      descRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.3'
    )
    // Button scales in
    .fromTo(
      btnRef.current,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.5 },
      '-=0.3'
    )
    // Quick links
    .fromTo(
      quickLinksRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 },
      '-=0.2'
    );

    return () => {
      tl.kill();
      split.revert();
    };
  }, { scope: containerRef });

  // ── 3. Magnetic button (Anime.js) ───────────────────────────────────────
  const handleBtnMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    anime({
      targets: btnRef.current,
      translateX: x * 0.25,
      translateY: y * 0.25,
      duration: 300,
      easing: 'easeOutQuad',
    });
  };

  const handleBtnMouseLeave = () => {
    anime({
      targets: btnRef.current,
      translateX: 0,
      translateY: 0,
      scale: 1,
      duration: 400,
      easing: 'easeOutElastic(1, .6)',
    });
  };

  return (
    <div ref={containerRef} className="not-found-container">
      <SEO 
        title="404 Not Found - Flashcab Cables"
        description="The page you are looking for does not exist."
        url="/404"
      />
      <Schema 
        schemaData={buildWebPageSchema({
          name: "404 Not Found",
          description: "The page you are looking for does not exist.",
          url: "/404"
        })}
      />
      {/* Grid background */}
      <div className="not-found-grid-bg" />

      {/* Soft glow accents */}
      <div className="not-found-glow-1" />
      <div className="not-found-glow-2" />

      {/* Main card */}
      <div ref={cardRef} className="not-found-content-box" style={{ opacity: 0 }}>

        {/* Status tag */}
        <div ref={tagRef} className="not-found-tag" style={{ opacity: 0 }}>
          <span className="not-found-tag-dot" />
          Error 404
        </div>

        {/* Giant animated 404 number */}
        <h1 ref={headingRef} className="not-found-heading">
          000
        </h1>

        {/* Gradient divider */}
        <div ref={dividerRef} className="not-found-divider" />

        {/* Subtitle */}
        <h2 ref={subtitleRef} className="not-found-subtitle">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p ref={descRef} className="not-found-desc" style={{ opacity: 0 }}>
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to something useful.
        </p>

        {/* CTA Button — matches the theme's btn-uiverse style */}
        <Link
          to="/"
          ref={btnRef}
          className="btn-uiverse group"
          onMouseMove={handleBtnMouseMove}
          onMouseLeave={handleBtnMouseLeave}
          style={{ opacity: 0 }}
        >
          <span className="flex items-center gap-2.5">
            Back to Homepage
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 ease-out group-hover:translate-x-1 shrink-0 self-center">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </span>
        </Link>

      </div>
    </div>
  );
};

export default NotFound;
