import React from 'react';
import { books } from '../../data/books';

const BooksSection = () => {
  return (
    <section id="books">
      <h2 className="section-title">Recommended Books</h2>
      <p className="section-subtitle" style={{ 
        textAlign: 'center', 
        maxWidth: '700px', 
        margin: '0 auto var(--space-2xl)', 
        color: 'var(--text-secondary)' 
      }}>
        Books that have shaped my thinking and personal growth journey
      </p>
      
      <div className="grid grid-3" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: 'var(--space-xl)' 
      }}>
        {books.map(book => (
          <div 
            key={book.id} 
            className="card" 
            style={{ 
              padding: 0, 
              overflow: 'hidden',
              transition: 'var(--transition)',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            {/* Book Cover */}
            <div style={{
              width: '100%',
              height: '350px',
              background: book.gradient,
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src={book.image} 
                alt={book.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.9
                }}
              />
              <div style={{
                position: 'absolute',
                top: 'var(--space-md)',
                right: 'var(--space-md)',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '0.375rem 0.75rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.75rem',
                fontWeight: 600,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                {book.category}
              </div>
            </div>
            
            {/* Book Info */}
            <div style={{ padding: 'var(--space-lg)' }}>
              <h3 style={{ 
                marginBottom: 'var(--space-sm)', 
                fontSize: '1.25rem',
                color: 'var(--text-primary)'
              }}>
                📖 {book.title}
              </h3>
              <p style={{ 
                color: 'var(--primary)', 
                fontSize: '0.9rem', 
                fontWeight: 600,
                marginBottom: 'var(--space-md)'
              }}>
                by {book.author}
              </p>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.9rem',
                lineHeight: '1.6'
              }}>
                {book.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BooksSection;
