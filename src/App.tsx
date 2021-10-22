import './App.css';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import StarRating from './components/StarRating/StarRating';
import SnackbarShell from './components/Snackbar/SnackbarShell';

function App() {
  return (
    <div className="App">
      <p>Components</p>
      <StarRating />
      <ImageCarousel />
      <SnackbarShell />
    </div>
  );
}

export default App;
