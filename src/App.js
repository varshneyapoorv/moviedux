
import './App.css';
import "./styles.css"

import Header from './components/Header';
import Footer from './components/Footer';
import MovieGrid from './components/MovieGrid';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>
          Welcome to Moviedux
        </h1>
      </header>
      <div className='container'>
        <Header></Header>
        <MovieGrid></MovieGrid>
      </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
