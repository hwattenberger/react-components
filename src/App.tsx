import './App.css';
import styled from 'styled-components';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import StarRating from './components/StarRating/StarRating';
import SnackbarShell from './components/Snackbar/SnackbarShell';
import { ProgressBarShell } from './components/ProgressBar/ProgressBarShell';

const ComponentContainer = styled.div`
    border: 2px solid black;
    width: 500px;
`;

const MainDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
`;

function App() {
  return (
    <div className="App">
      <h1>Components</h1>
      <MainDiv>
        <ComponentContainer>
          <StarRating />
        </ComponentContainer>
        <ComponentContainer>
          <ImageCarousel />
        </ComponentContainer>
        <ComponentContainer>
          <SnackbarShell />
        </ComponentContainer>
        <ComponentContainer>
          <ProgressBarShell />
        </ComponentContainer>
        {/* <ImageCarousel />
        <SnackbarShell />
        <ProgressBarShell /> */}
      </MainDiv>
    </div>
  );
}

export default App;
