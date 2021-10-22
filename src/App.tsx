import React from 'react';
import './App.css';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import StarRating from './components/StarRating/StarRating';

function App() {
  return (
    <div className="App">
      <p>Components</p>
      <StarRating />
      <ImageCarousel />
    </div>
  );
}

export default App;
