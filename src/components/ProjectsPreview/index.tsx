import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: 'Apache StreamPipes',
    description: 'Open-source industrial IoT stream processing platform for real-time data analytics and pipeline management.',
    technologies: ['Java', 'Angular', 'Apache Kafka', 'Docker', 'TypeScript'],
    github: 'https://github.com/apache/streampipes',
    link: 'https://streampipes.apache.org',
    image: '/img/apache-streampipes-logo.svg',
  },
  {
    title: 'Computational Physics Simulator',
    description: 'Advanced physics simulation engine built with Python and NumPy for modeling complex particle interactions and wave dynamics.',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'Jupyter'],
    github: 'https://github.com/heisenbergs-uncertainty/physics-sim',
    image: '/img/hero_simple.svg',
  },
  {
    title: 'React Dashboard Framework',
    description: 'Modular dashboard framework with real-time data visualization and customizable widgets for business intelligence.',
    technologies: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
    github: 'https://github.com/heisenbergs-uncertainty/react-dashboard',
    link: 'https://dashboard-demo.example.com',
    image: '/img/hero_simple.svg',
  },
];

function ProjectCard({ title, description, technologies, link, github, image }: Project) {
  return (
    <div className={clsx('col col--4', styles.projectCard)}>
      <div className={styles.projectContent}>
        {image && (
          <div className={styles.projectImage}>
            <img src={image} alt={title} />
          </div>
        )}
        <div className={styles.projectInfo}>
          <Heading as="h3" className={styles.projectTitle}>
            {title}
          </Heading>
          <p className={styles.projectDescription}>{description}</p>
          <div className={styles.projectTechnologies}>
            {technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
          <div className={styles.projectLinks}>
            {link && (
              <Link
                className={clsx('button button--primary button--sm', styles.projectButton)}
                to={link}
              >
                Live Demo
              </Link>
            )}
            {github && (
              <Link
                className={clsx('button button--secondary button--sm', styles.projectButton)}
                to={github}
              >
                GitHub
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPreview(): ReactNode {
  return (
    <section className={styles.projectsSection}>
      <div className="container">
        <div className={styles.projectsHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Featured Projects
          </Heading>
          <p className={styles.sectionSubtitle}>
            A showcase of my recent work and personal projects
          </p>
        </div>
        <div className="row">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className={styles.viewAllContainer}>
          <Link
            className={clsx('button button--primary button--lg', styles.viewAllButton)}
            to="/portfolio"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
