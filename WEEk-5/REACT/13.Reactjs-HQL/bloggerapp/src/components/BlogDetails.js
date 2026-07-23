import React, { useState } from 'react';

const blogs = [
  { id: 1, title: 'Getting Started with React', author: 'Jane Doe', category: 'Tech', likes: 120, published: true },
  { id: 2, title: 'Top 10 Travel Destinations 2024', author: 'John Smith', category: 'Travel', likes: 85, published: true },
  { id: 3, title: 'Healthy Eating on a Budget', author: 'Alice Green', category: 'Health', likes: 200, published: false },
  { id: 4, title: 'Mastering JavaScript Promises', author: 'Bob Dev', category: 'Tech', likes: 155, published: true },
  { id: 5, title: 'Yoga for Beginners', author: 'Sara Fit', category: 'Health', likes: 95, published: false },
];

// WAY 6: Returning null from a component (renders nothing)
function UnpublishedBadge({ isPublished }) {
  if (isPublished) return null; // renders nothing if published
  return <span className="badge" style={{ background: '#ffe3e3', color: '#c0392b' }}>📝 Draft</span>;
}

// WAY 7: Enum / Object Map for Conditional Rendering
const categoryColors = {
  Tech:   { background: '#e3f0ff', color: '#1a5fff' },
  Travel: { background: '#fff8e3', color: '#c77700' },
  Health: { background: '#e3fff0', color: '#0a7a4f' },
};

function BlogDetails() {
  const [filterPublished, setFilterPublished] = useState('all'); // 'all' | 'published' | 'draft'
  const [searchTerm, setSearchTerm] = useState('');

  // WAY 2: if/else for filtering
  let displayedBlogs;
  if (filterPublished === 'published') {
    displayedBlogs = blogs.filter(b => b.published);
  } else if (filterPublished === 'draft') {
    displayedBlogs = blogs.filter(b => !b.published);
  } else {
    displayedBlogs = blogs;
  }

  // Apply search filter
  if (searchTerm.trim() !== '') {
    displayedBlogs = displayedBlogs.filter(b =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="component-container">
      <h2 className="component-title">✍️ Blog Details</h2>
      <p className="component-subtitle">Read articles from our top bloggers.</p>

      {/* WAY 3: Logical && - show search result count only when searching */}
      {searchTerm && (
        <div className="alert alert-info">
          🔍 Found <strong>{displayedBlogs.length}</strong> result(s) for "{searchTerm}"
        </div>
      )}

      <div className="controls">
        {/* Search input - WAY 3: && to show clear button */}
        <input
          type="text"
          placeholder="🔍 Search blogs..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ padding: '8px 14px', borderRadius: '8px', border: '2px solid #ddd', fontSize: '0.95rem', minWidth: '200px' }}
        />
        {searchTerm && (
          <button className="toggle-btn danger" onClick={() => setSearchTerm('')}>✕ Clear</button>
        )}

        {/* Filter buttons */}
        {['all', 'published', 'draft'].map(f => (
          <button
            key={f}
            className={`toggle-btn ${filterPublished === f ? 'selected' : ''}`}
            onClick={() => setFilterPublished(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* WAY 4: Ternary - empty state message */}
      {displayedBlogs.length === 0 ? (
        <div className="alert alert-warning">😕 No blogs match your current filter.</div>
      ) : (
        <div className="card-grid">
          {displayedBlogs.map(blog => {
            // WAY 7: Enum/Object Map for category color
            const style = categoryColors[blog.category] || { background: '#f0f4f8', color: '#333' };
            return (
              <div key={blog.id} className="card card-blog">
                <h3>{blog.title}</h3>
                <p>👤 {blog.author}</p>
                <p>❤️ {blog.likes} likes</p>
                {/* WAY 6: Null-returning component */}
                <UnpublishedBadge isPublished={blog.published} />
                {/* WAY 4: Ternary for published label */}
                <span className="badge">
                  {blog.published ? '✅ Published' : '🕒 Unpublished'}
                </span>
                {/* WAY 7: Object Map */}
                <span className="badge" style={style}>{blog.category}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* WAY 5: IIFE - Summary Stats */}
      <div className="section-label">Blog Stats (IIFE - Way 5)</div>
      {(() => {
        const published = blogs.filter(b => b.published).length;
        const totalLikes = blogs.reduce((sum, b) => sum + b.likes, 0);
        return (
          <div className="alert alert-success">
            📊 Total Blogs: <strong>{blogs.length}</strong> | Published: <strong>{published}</strong> | Total Likes: <strong>{totalLikes}</strong>
          </div>
        );
      })()}
    </div>
  );
}

export default BlogDetails;
