import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import Hero from "../components/Hero";
import BlogSection from "../components/BlogSection";
import DocSection from "../components/DocSection";
// import RecentBlogPosts from '@site/src/components/RecentBlogPosts';



export default function Home() {
  return (
    <Layout
      title={translate({ message: 'Tech Knowledge Hub' })}
      description="A curated collection of tech topics, guides, and tutorials.">
      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title"><Translate>Welcome to Tech Knowledge Hub</Translate></h1>
          <p className="hero__subtitle">A curated collection of tech topics, guides, and tutorials.</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/category/java">
              <Translate>Browse All Topics</Translate>
            </Link>
          </div>
        </div>
      </header> */}
      <Hero/>
      <BlogSection/>
      <DocSection/>
      {/* <RecentBlogPosts maxItems={4} /> */}
      
    </Layout>
  );
}
