import React from 'react';
import BookCard from './BookCard'; 
import './BookList.css';



function BookList({ books }) {
  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;



