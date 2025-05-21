import React from 'react';
import { ArrowRight, Code, BookOpen, BarChart } from 'lucide-react';
import Link from '@docusaurus/Link';


const Hero = () => {
  return (
    <div className="relative pt-0 pb-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 dark:from-indigo-900/30 dark:to-blue-900/30"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] dark:opacity-[0.1]"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-0 md:pt-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-4 animate-fade-in-up">
            Technical Documentation Made Simple
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in-up animation-delay-150">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300">
            Welcome to
            </span>{' '}
            Tech Knowledge Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up animation-delay-300">
            Discover clear, concise, and beautifully presented technical documentation
            that helps you build better software with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-450">
            <Link to="./docs/category/java" className="px-8 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 font-medium transition-colors duration-300">
              View Documentation
            </Link>
            
            {/* <Link to="/dev/blog" className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors duration-300 flex items-center justify-center">
              View Blogs
            </Link> */}
              {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
            
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Clean Code Examples</h3>
            <p className="text-gray-600 dark:text-gray-300">Beautifully formatted code snippets with syntax highlighting and explanations.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Comprehensive Guides</h3>
            <p className="text-gray-600 dark:text-gray-300">In-depth tutorials and documentation on advanced technical topics.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4">
              <BarChart className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Visual Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">Diagrams, charts, and visual aids to simplify complex technical concepts.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;