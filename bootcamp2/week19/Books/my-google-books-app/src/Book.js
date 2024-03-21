
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './BookList'; 

const Book = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const fetchBooks = async () => {
    if (!query) return; 
    try {
      const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      setBooks(result.data.items || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  //useEffect(() => {
  


  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books"
      />
      <button onClick={()=>fetchBooks()}>Search</button>
      {books.length > 0 && <BookList books={books} />}
    </div>
  );
};

export default Book;
