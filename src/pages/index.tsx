import type { ReactNode } from "react";
import { useEffect, useState } from "react";
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
  
  const roles = [
    { text: "Dad", icon: "👨‍👧‍👦" },
    { text: "Developer", icon: "💻" },
    { text: "DnD Enthusiast", icon: "🎲" },
    { text: "Computational Physicist", icon: "🔬" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header 
      className={clsx("hero", styles.heroBanner, "homepage-hero-container", {
        [styles.visible]: isVisible
      })}
    >
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
            <div className={styles.astronautContainer}>
              <div className={styles.spaceElements}>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.planet}></div>
              </div>
              <img 
                src="/img/astronaut.png" 
                alt="Cartoon astronaut floating in space" 
                className={styles.astronautImage}
              />
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
  }, []);

  return (
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
