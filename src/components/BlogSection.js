import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import {useBlogPosts} from '@docusaurus/plugin-content-blog/client';
import Link from '@docusaurus/Link';
import { useAllDocsData, useDocsData, useDoc } from '@docusaurus/plugin-content-docs/client';

// const recentPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

const BlogSection = () => {
  // const { siteConfig } = useDocusaurusContext();

  
  // const { posts } = useBlogPosts();
  // console.log(JSON.stringify(posts, null, 2));
  // const allDocsData = useAllDocsData();

  // console.log(JSON.stringify(recentPosts, null, 2));

  // console.log(allDocsData);
  // const docs = allDocsData['default']?.['versions']?.[0]?.docs;
  // console.log(docs);
  // if (!docs) return (<p>No docs found..</p>);
  // docs.forEach(doc => {
  //   console.log(`Title: ${doc.title}`);
  //   console.log(`Slug: ${doc.slug}`);
  //   console.log(`Permalink: ${doc.permalink}`);
  //   console.log(`Description: ${doc.description}`);
  //   console.log(`Tags: ${doc.tags}`);
  //   console.log('---');
  // });

  // const docsData = useDoc();
  // console.log(docsData);


  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Modern Authentication Flows in Web Applications',
      excerpt: 'A comprehensive guide to OAuth 2.0, JWT tokens, and implementing secure authentication in modern web apps.',
      date: 'May 15, 2025',
      readTime: '8 min read',
      category: 'Security',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure large-scale React applications using TypeScript to improve code quality and maintainability.',
      date: 'April 28, 2025',
      readTime: '12 min read',
      category: 'React',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Optimizing API Performance with GraphQL and Caching',
      excerpt: 'Practical strategies for improving API response times using GraphQL, efficient caching, and performance optimization techniques.',
      date: 'April 12, 2025',
      readTime: '10 min read',
      category: 'Performance',
      image: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'Containerization Best Practices for Microservices',
      excerpt: 'Deep dive into Docker, Kubernetes, and containerization strategies for building robust microservice architectures.',
      date: 'March 30, 2025',
      readTime: '15 min read',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (

    
    <section id="blog" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">TECH BLOG</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Latest technical insights
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Deep dives into technical topics, best practices, and industry trends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured article */}
          <div className="lg:col-span-8 overflow-hidden group">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {featuredPost.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  Read Article
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Recent posts */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Posts</h3>
            
            {regularPosts.map(post => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden group">
                <div className="flex">
                  <div className="w-1/3 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <span className="inline-block px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-xs font-medium rounded mb-2">
                      {post.category}
                    </span>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center mt-8">
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
              >
                View All Articles
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;