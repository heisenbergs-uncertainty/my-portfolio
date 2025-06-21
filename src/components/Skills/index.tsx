import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type SkillCategory = {
  title: string;
  skills: string[];
  icon: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Next.js', 'Docusaurus'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Python', 'API Design', 'Database Design', 'Microservices'],
  },
  {
    title: 'Physics & Computing',
    icon: '🔬',
    skills: ['Computational Physics', 'Data Analysis', 'Mathematical Modeling', 'Scientific Computing'],
  },
  {
    title: 'Tools & Technologies',
    icon: '🛠️',
    skills: ['Git', 'Docker', 'CI/CD', 'Cloud Platforms', 'Testing', 'Agile'],
  },
];

function SkillCategory({ title, skills, icon }: SkillCategory) {
  return (
    <div className={clsx('col col--3', styles.skillCategory)}>
      <div className={styles.skillCard}>
        <div className={styles.skillIcon}>{icon}</div>
        <Heading as="h3" className={styles.skillTitle}>
          {title}
        </Heading>
        <div className={styles.skillList}>
          {skills.map((skill) => (
            <span key={skill} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills(): ReactNode {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <div className={styles.skillsHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Skills & Technologies
          </Heading>
          <p className={styles.sectionSubtitle}>
            A collection of tools and technologies I work with
          </p>
        </div>
        <div className="row">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
