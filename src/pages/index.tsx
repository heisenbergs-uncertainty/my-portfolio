import type { ReactNode } from "react";
import { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner, "homepage-hero-container")}>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "400px" }}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", alignContent: "space-between", "height": "2vh"}}>
          <p className="hero__subtitle">{siteConfig.tagline}</p>  
          <p className="hero__subtitle">Developer</p>  
          <p className="hero__subtitle">DnD Enthusiast</p>  
          <p className="hero__subtitle">Computational Physicist</p>
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

    // Handle scroll events
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

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listener and classes when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.classList.remove('homepage-navbar', 'navbar-scrolled');
      }
    };
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
