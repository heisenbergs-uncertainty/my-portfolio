import type React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './portfolio.module.css';

type Project = {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  role: string;
  timeline: string;
  link?: string;
  github?: string;
  image?: string;
  highlights: string[];
  status: 'Completed' | 'In Progress' | 'Maintained';
};

const projects: Project[] = [
  {
    title: 'Apache StreamPipes',
    description: 'Open-source industrial IoT stream processing platform for real-time data analytics and pipeline management.',
    longDescription: 'Apache StreamPipes is a comprehensive stream processing platform designed for industrial IoT applications. As a top-level Apache Software Foundation project, it provides a visual programming interface for creating data pipelines, real-time analytics, and event processing workflows. The platform enables users to connect various data sources, apply processing algorithms, and visualize results without extensive programming knowledge, making it accessible to both technical and non-technical users in industrial settings. My contributions focus on enhancing the core processing engine, improving user experience, and extending industrial protocol support for real-world deployments.',
    technologies: ['Java', 'Angular', 'Docker', 'Apache Kafka', 'Apache Flink', 'InfluxDB', 'TypeScript', 'Spring Boot', 'Maven', 'Kubernetes'],
    category: 'Open Source Contribution',
    role: 'Core Contributor & Committer',
    timeline: '2023 - Present',
    github: 'https://github.com/apache/streampipes',
    link: 'https://streampipes.apache.org',
    image: '/img/apache-streampipes-logo.svg',
    highlights: [
      'Implemented advanced data adapter framework supporting 15+ industrial protocols (OPC-UA, MQTT, Modbus)',
      'Architected microservice-based pipeline execution engine with 40% performance improvement',
      'Developed real-time dashboard components serving 100K+ data points per second',
      'Led UI/UX redesign project resulting in 60% reduction in user onboarding time',
      'Contributed 150+ commits with focus on core platform stability and scalability',
      'Mentored new contributors and maintained comprehensive developer documentation',
      'Presented StreamPipes architecture at ApacheCon and IoT World conferences',
      'Collaborated with industrial partners for real-world deployment optimization'
    ],
    status: 'Maintained'
  },
  {
    title: 'Computational Physics Simulator',
    description: 'Advanced physics simulation engine built with Python and NumPy for modeling complex particle interactions and wave dynamics.',
    longDescription: 'A comprehensive physics simulation framework designed for educational and research purposes. The simulator handles various physical phenomena including particle dynamics, wave propagation, and thermodynamic processes. Built with performance optimization in mind, it can handle large-scale simulations while maintaining real-time visualization capabilities.',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'Jupyter', 'SciPy', 'Numba'],
    category: 'Scientific Computing',
    role: 'Lead Developer',
    timeline: '2023',
    github: 'https://github.com/heisenbergs-uncertainty/physics-sim',
    image: '/img/hero_simple.svg',
    highlights: [
      'Implemented multi-threaded particle system with 10,000+ entities',
      'Created interactive visualization dashboard',
      'Achieved 90% performance improvement through vectorization',
      'Published research findings in academic journal'
    ],
    status: 'Completed'
  },
  {
    title: 'React Dashboard Framework',
    description: 'Modular dashboard framework with real-time data visualization and customizable widgets for business intelligence.',
    longDescription: 'A flexible and extensible dashboard framework built for modern web applications. Features include drag-and-drop widget composition, real-time data streaming, responsive design, and extensive customization options. The framework is designed to be easily integrated into existing applications while providing powerful analytics capabilities.',
    technologies: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Redux', 'Material-UI'],
    category: 'Web Development',
    role: 'Full Stack Developer',
    timeline: '2023',
    github: 'https://github.com/heisenbergs-uncertainty/react-dashboard',
    link: 'https://dashboard-demo.example.com',
    image: '/img/hero_simple.svg',
    highlights: [
      'Built modular architecture supporting 50+ widget types',
      'Implemented real-time WebSocket data streaming',
      'Created responsive design system with dark/light themes',
      'Achieved 99.9% uptime in production deployment'
    ],
    status: 'Completed'
  },
  {
    title: 'D&D Campaign Manager',
    description: 'Digital tool for Dungeon Masters to manage campaigns, track player progress, and generate dynamic encounters.',
    longDescription: 'A comprehensive campaign management system for tabletop RPG enthusiasts. The platform provides tools for world-building, character tracking, encounter generation, and session management. Features include automated dice rolling, interactive maps, and collaborative note-taking for enhanced gameplay experience.',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'NextAuth.js', 'Vercel'],
    category: 'Full Stack Application',
    role: 'Solo Developer',
    timeline: '2023 - Present',
    github: 'https://github.com/heisenbergs-uncertainty/dnd-manager',
    image: '/img/hero_simple.svg',
    highlights: [
      'Developed comprehensive character sheet system',
      'Created dynamic encounter generation algorithm',
      'Implemented real-time collaboration features',
      'Built mobile-responsive interface for session use'
    ],
    status: 'In Progress'
  }
];

function ProjectCard({ project, ...props }: { project: Project } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectHeader}>
        {project.image && (
          <div className={styles.projectImage}>
            <img src={project.image} alt={project.title} />
          </div>
        )}
        <div className={styles.projectMeta}>
          <div className={styles.projectCategory}>{project.category}</div>
          <div className={clsx(styles.projectStatus, {
            [styles.statusCompleted]: project.status === 'Completed',
            [styles.statusInProgress]: project.status === 'In Progress',
            [styles.statusMaintained]: project.status === 'Maintained'
          })}>
            {project.status}
          </div>
        </div>
      </div>
      
      <div className={styles.projectContent}>
        <Heading as="h3" className={styles.projectTitle}>
          {project.title}
        </Heading>
        
        <div className={styles.projectDetails}>
          <div className={styles.projectRole}>
            <strong>Role:</strong> {project.role}
          </div>
          <div className={styles.projectTimeline}>
            <strong>Timeline:</strong> {project.timeline}
          </div>
        </div>
        
        <p className={styles.projectDescription}>{project.description}</p>
        <p className={styles.projectLongDescription}>{project.longDescription}</p>
        
        <div className={styles.projectHighlights}>
          <h4>Key Highlights:</h4>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles.projectTechnologies}>
          <h4>Technologies:</h4>
          <div className={styles.techTags}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className={styles.projectLinks}>
          {project.link && (
            <Link
              className={clsx('button button--primary', styles.projectButton)}
              to={project.link}
            >
              Visit Project
            </Link>
          )}
          {project.github && (
            <Link
              className={clsx('button button--secondary', styles.projectButton)}
              to={project.github}
            >
              View Source
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <Layout title="Portfolio" description="Explore my projects and contributions">
      <div className={styles.portfolioPage}>
        <div className="container">
          <div className={styles.portfolioHeader}>
            <Heading as="h1" className={styles.pageTitle}>
              My Portfolio
            </Heading>
            <p className={styles.pageSubtitle}>
              A comprehensive overview of my projects, contributions, and technical expertise
            </p>
          </div>
          
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          
          <div className={styles.contactSection}>
            <Heading as="h2">Interested in Collaboration?</Heading>
            <p>I'm always open to discussing new opportunities and interesting projects.</p>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
