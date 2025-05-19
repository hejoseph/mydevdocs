import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const categories = [
  {
    title: 'Java',
    description: 'Tutorials, best practices, and core concepts in Java.',
    link: '/docs/category/java',
  },
  // {
  //   title: 'Web Development',
  //   description: 'Frontend, backend, HTML/CSS, and JavaScript guides.',
  //   link: '/docs/web',
  // },
  {
    title: 'Streaming Tech',
    description: 'Explore M3U8, HLS, DASH, and other streaming formats.',
    link: '/docs/category/tech-related',
  },
  // {
  //   title: 'Programming Concepts',
  //   description: 'Deep dives into algorithms, data structures, and patterns.',
  //   link: '/docs/concepts',
  // },
  // {
  //   title: 'Language Notes',
  //   description: 'Insights on various programming languages and quirks.',
  //   link: '/docs/language',
  // },
];

export default function Home() {
  return (
    <Layout
      title="Tech Knowledge Hub"
      description="A curated collection of tech topics, guides, and tutorials.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Welcome to Tech Knowledge Hub</h1>
          <p className="hero__subtitle">A curated collection of tech topics, guides, and tutorials.</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/category/java">
              Browse All Topics
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="container margin-top--lg">
          <div className="row">
            {categories.map((cat, idx) => (
              <div key={idx} className="col col--4 margin-bottom--lg">
                <div className="card shadow--md">
                  <div className="card__header">
                    <h3>{cat.title}</h3>
                  </div>
                  <div className="card__body">
                    <p>{cat.description}</p>
                  </div>
                  <div className="card__footer">
                    <Link className="button button--outline button--primary" to={cat.link}>
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
