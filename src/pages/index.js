import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <div>
      <head>
          <title>Mini Stacks Course by Sahil Aujla</title>
          <meta property="og:title" content="Mini Stacks Course by Sahil Aujla" />
          <meta
            property="og:description"
            content="A mini course on the Stacks blockchain by Sahil Aujla to help you get up and running with the Stacks ecosystem."
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="./stacks-og.jpeg" />
          <meta property="og:url" content="https://www.stacks-course.vercel.app/" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.stacks-course.vercel.app/" />
          <meta property="twitter:title" content="Mini Stacks Course by Sahil Aujla" />
          <meta
            property="twitter:description"
            content="A mini course on the Stacks blockchain by Sahil Aujla to help you get up and running with the Stacks ecosystem."
          />
          <meta
            property="twitter:image"
            content="https://cdn.discordapp.com/attachments/947480890181812294/1028157725944840255/unknown.png"
          />
        </head>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={styles.stars} />
        <div className={styles.twinkling} />
        <div className={clsx('container', styles.pageInner)}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Get Started 🚀
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
