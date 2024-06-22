import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for books..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

const Book = ({ book }) => {
  return (
    <div className="book">
      {book.imageUrl && <img src={book.imageUrl} alt={book.title} className="book-image" />}
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Free of cost</p>
    </div>
  );
};

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const result = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: { Authorization: 'John' }
        });
        setBooks(result.data.books);
      } catch (error) {
        console.error('Error fetching the books:', error);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="book-list">
        {filteredBooks.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
