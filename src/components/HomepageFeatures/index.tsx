import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Problem Solver',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        From debugging complex algorithms to solving physics equations, 
        I thrive on tackling challenging problems with creative solutions.
      </>
    ),
  },
  {
    title: 'Continuous Learner',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Technology evolves rapidly, and I stay current with the latest trends, 
        frameworks, and best practices to deliver cutting-edge solutions.
      </>
    ),
  },
  {
    title: 'Bridge Builder',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I excel at connecting different worlds - translating complex technical 
        concepts into understandable solutions for diverse audiences.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            What I Bring to the Table
          </Heading>
          <p className={styles.sectionSubtitle}>
            My approach to development and problem-solving
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
