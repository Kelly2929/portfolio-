import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WeatherPage from './WeatherPage';
import FavoritesPage from './FavoritesPage';
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Weather App
          </Typography>
          <Link to="/" style={{ color: 'white', paddingRight: '20px' }}>Weather</Link>
          <Link to="/favorites" style={{ color: 'white' }}>Favorites</Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import axios from 'axios';

const fetchBooks = async (query) => {
  const result = await axios(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  const sortedBooks = result.data.items.sort((a, b) => {
    const dateA = a.volumeInfo.publishedDate ? new Date(a.volumeInfo.publishedDate) : new Date();
    const dateB = b.volumeInfo.publishedDate ? new Date(b.volumeInfo.publishedDate) : new Date();
    return dateB - dateA;
  });
  return sortedBooks;
};
const [books, setBooks] = useState([]);
const [query, setQuery] = useState('');

useEffect(() => {
  const fetchData = async () => {
    if (query) {
      const fetchedBooks = await fetchBooks(query);
      setBooks(fetchedBooks);
    }
  };
  fetchData();
}, [query]);

// Real-time filtering
const filteredBooks = books.filter(book => book.volumeInfo.title.toLowerCase().includes(query.toLowerCase()));
