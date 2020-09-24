import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_be_mountain.svg',
    description: (
      <>
        Brokerage Engine was designed from the ground up to allow users
        of all skill levels to effectively manage real estate operations.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_be_tree.svg',
    description: (
      <>
        Brokerage Engine helps automate core aspects of the back office,
        including listings, marketing, transactions and accounting.
      </>
    ),
  },
  {
    title: <>Tailored to Your Workflow</>,
    imageUrl: 'img/undraw_be_computer.svg',
    description: (
      <>
        Powerful configurations allow Brokerage Engine to match the way you
        work. Extend capabilities through our growing library of integrations.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Technical documentation and learning center for Brokerage Engine back office software.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src={'img/logo_reverse.svg'} height="100"/>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
