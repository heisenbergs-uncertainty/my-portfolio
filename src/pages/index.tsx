import type { ReactNode } from "react";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Skills from "@site/src/components/Skills";
import ProjectsPreview from "@site/src/components/ProjectsPreview";
import ContactCTA from "@site/src/components/ContactCTA";
import ScrollToTop from "@site/src/components/ScrollToTop";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  
  const roles = [
    { text: "Dad", icon: "👨‍👧‍👦" },
    { text: "Developer", icon: "💻" },
    { text: "DnD Enthusiast", icon: "🎲" },
    { text: "Computational Physicist", icon: "🔬" }
  ];

  // Generate unique keys for particles
  const particleKeys = Array.from({ length: 20 }, (_, i) => `particle-${i}-${Date.now()}`);
  const elementKeys = Array.from({ length: 6 }, (_, i) => `element-${i}-${Date.now()}`);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <header 
      ref={heroRef}
      className={clsx("hero", styles.heroBanner, "homepage-hero-container", {
        [styles.visible]: isVisible
      })}
    >
      <div className={styles.backgroundParticles}>
        {particleKeys.map((key, i) => (
          <div
            key={key}
            className={styles.particle}
            style={{
              animationDelay: `${i * 0.1}s`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroIntro}>
              <span className={styles.greeting}>Hello there! 👋</span>
            </div>
            <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
              I'm <span className={styles.nameHighlight}>{siteConfig.title}</span>
            </Heading>
            <div className={styles.roleContainer}>
              <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
                <span className={styles.roleIcon}>{roles[currentRole].icon}</span>
                <span className={styles.roleText}>{roles[currentRole].text}</span>
              </p>
            </div>
            <p className={styles.heroDescription}>
              Welcome to my digital space where I share my journey in technology, 
              physics, and the occasional adventure in dungeons and dragons. 
              Let's build something amazing together!
            </p>
            <div className={styles.heroButtons}>
              <Link
                className={clsx("button button--primary button--lg", styles.heroButton, styles.primaryButton)}
                to="/portfolio"
              >
                <span>🚀 View My Work</span>
              </Link>
              <Link
                className={clsx("button button--secondary button--lg", styles.heroButton, styles.secondaryButton)}
                to="/blog"
              >
                <span>✍️ Read My Blog</span>
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Projects Built</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>∞</span>
                <span className={styles.statLabel}>Problems Solved</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div 
              className={styles.interactiveArea}
              style={{
                transform: `translate(${mousePosition.x * 10 - 5}px, ${mousePosition.y * 10 - 5}px)`
              }}
            >
              <div className={styles.floatingElements}>
                {elementKeys.map((key, i) => (
                  <div
                    key={key}
                    className={clsx(styles.floatingElement, styles[`element${i + 1}`])}
                  />
                ))}
              </div>
              <div className={styles.codeSnippet}>
                <div className={styles.codeHeader}>
                  <div className={styles.codeDots}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className={styles.codeBody}>
                  <div className={styles.codeLine}>
                    <span className={styles.codeKeyword}>const</span>{' '}
                    <span className={styles.codeVariable}>passion</span>{' '}
                    <span className={styles.codeOperator}>=</span>{' '}
                    <span className={styles.codeString}>"solving problems"</span>
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.codeKeyword}>function</span>{' '}
                    <span className={styles.codeFunction}>buildAmazingThings</span>
                    <span className={styles.codeBracket}>()</span>{' '}
                    <span className={styles.codeBracket}>{'{'}</span>
                  </div>
                  <div className={styles.codeLine}>
                    &nbsp;&nbsp;<span className={styles.codeKeyword}>return</span>{' '}
                    <span className={styles.codeString}>"innovation"</span>
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.codeBracket}>{'}'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  
  useEffect(() => {
    // Add custom navbar class to homepage
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.add('homepage-navbar');
    }

    // Handle scroll events for navbar
    const handleScroll = () => {
      const navbar = document.querySelector('.homepage-navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      }
    };

    // Add scroll animations for sections
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      }
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    for (const section of Array.from(sections)) {
      observer.observe(section);
    }

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.classList.remove('homepage-navbar', 'navbar-scrolled');
      }
    };
  }, []);      return (
    <Layout
      title={`${siteConfig.title} - Developer, Dad, DnD Enthusiast & Computational Physicist`}
      description="Welcome to Matthew Holden's portfolio. I'm a passionate developer, devoted dad, D&D enthusiast, and computational physicist who loves solving complex problems and building innovative solutions."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Skills />
        <ProjectsPreview />
        <ContactCTA />
      </main>
      <ScrollToTop />
    </Layout>
  );
}
