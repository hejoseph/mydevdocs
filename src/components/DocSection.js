import React from 'react';
import Link from '@docusaurus/Link';
const DocSection = () => {
  
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
    {
      title: 'Programming Concepts',
      description: 'Deep dives into algorithms, data structures, and patterns.',
      link: '/docs/concepts',
    },
    {
      title: 'Language Notes',
      description: 'Insights on various programming languages and quirks.',
      link: '/docs/language',
    },
  ];

  return (
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
  )

}

export default DocSection;