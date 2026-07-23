import React, { useState } from 'react';

const books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', genre: 'Technology', rating: 5, available: true },
  { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', rating: 4, available: false },
  { id: 3, title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', rating: 5, available: true },
  { id: 4, title: '1984', author: 'George Orwell', genre: 'Fiction', rating: 5, available: false },
  { id: 5, title: 'Deep Work', author: 'Cal Newport', genre: 'Self-Help', rating: 4, available: true },
];

function BookDetails() {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedBook, setSelectedBook] = useState(null);

  const genres = ['All', 'Technology', 'Fiction', 'Self-Help'];

  // WAY 2: if/else block to pre-filter books
  let filteredBooks;
  if (showAvailableOnly) {
    filteredBooks = books.filter(b => b.available);
  } else {
    filteredBooks = books;
  }

  // Further filter by genre
  if (selectedGenre !== 'All') {
    filteredBooks = filteredBooks.filter(b => b.genre === selectedGenre);
  }

  return (
    <div className="component-container">
      <h2 className="component-title">📚 Book Details</h2>
      <p className="component-subtitle">Browse our collection of books.</p>

      {/* WAY 3: Logical && (AND) Operator - Show only when a book is selected */}
      {selectedBook && (
        <div className="alert alert-info">
          📖 You selected: <strong>{selectedBook.title}</strong> by {selectedBook.author}
          <button onClick={() => setSelectedBook(null)} style={{ float: 'right', cursor: 'pointer', background: 'none', border: 'none', fontWeight: 'bold', fontSize: '1rem' }}>✕</button>
        </div>
      )}

      {/* WAY 4: Ternary Operator - Toggle button label */}
      <div className="controls">
        <button
          className={`toggle-btn ${showAvailableOnly ? 'selected' : ''}`}
          onClick={() => setShowAvailableOnly(!showAvailableOnly)}
        >
          {showAvailableOnly ? '✅ Showing: Available Only' : '📋 Show: All Books'}
        </button>
        {genres.map(g => (
          <button
            key={g}
            className={`toggle-btn ${selectedGenre === g ? 'selected' : ''}`}
            onClick={() => setSelectedGenre(g)}
          >
            {g}
          </button>
        ))}
      </div>

      {/* WAY 3 (again): && operator - show warning if no results */}
      {filteredBooks.length === 0 && (
        <div className="alert alert-warning">
          ⚠️ No books found for the selected filters.
        </div>
      )}

      <div className="card-grid">
        {filteredBooks.map(book => (
          <div
            key={book.id}
            className="card card-book"
            onClick={() => setSelectedBook(book)}
          >
            <h3>{book.title}</h3>
            <p>✍️ {book.author}</p>
            <p>{'⭐'.repeat(book.rating)}</p>

            {/* WAY 4: Ternary Operator inline for availability */}
            <p>
              {book.available
                ? <span style={{ color: 'green', fontWeight: 'bold' }}>✅ Available</span>
                : <span style={{ color: 'red', fontWeight: 'bold' }}>❌ Not Available</span>
              }
            </p>
            <span className="badge">{book.genre}</span>
          </div>
        ))}
      </div>

      {/* WAY 5: IIFE (Immediately Invoked Function Expression) */}
      <div className="section-label">Conditional Rendering: IIFE (Way 5)</div>
      {(() => {
        const available = books.filter(b => b.available).length;
        if (available > 3) {
          return <div className="alert alert-success">🎉 Great selection! {available} books available right now.</div>;
        } else if (available > 0) {
          return <div className="alert alert-warning">⚠️ Limited availability: Only {available} books available.</div>;
        } else {
          return <div className="alert alert-warning">😢 Sorry, no books are available currently.</div>;
        }
      })()}
    </div>
  );
}

export default BookDetails;
