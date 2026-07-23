import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [activePage, setActivePage] = useState('book');

  // WAY 1: Switch Statement for Conditional Rendering
  const renderPage = () => {
    switch (activePage) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <BookDetails />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>📖 Blogger App</h1>
        <p className="tagline">Discover Books, Blogs & Courses</p>
        <nav className="navbar">
          <button
            className={`nav-btn ${activePage === 'book' ? 'active' : ''}`}
            onClick={() => setActivePage('book')}
          >
            📚 Book Details
          </button>
          <button
            className={`nav-btn ${activePage === 'blog' ? 'active' : ''}`}
            onClick={() => setActivePage('blog')}
          >
            ✍️ Blog Details
          </button>
          <button
            className={`nav-btn ${activePage === 'course' ? 'active' : ''}`}
            onClick={() => setActivePage('course')}
          >
            🎓 Course Details
          </button>
        </nav>
      </header>

      <main className="App-main">
        {/* Rendering result of switch-case function */}
        {renderPage()}
      </main>

      <footer className="App-footer">
        <p>Blogger App &copy; 2024 | Conditional Rendering Demo</p>
      </footer>
    </div>
  );
}

export default App;
