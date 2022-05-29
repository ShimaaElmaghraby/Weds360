
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import SearchBar from './components/SearchBar/searchBar';

function App() {
  return (
    <>
    <Router>
        <Header/>
        <div className="mainContainer">
          <div className="searchSection">
            <SearchBar/>
          </div>
          <div className="imageSection">
            <Routes>
              <Route />
              <Route  />
            </Routes>
          </div>
        </div>
        <Footer />
    </Router> 
    </>
  ); 
}

export default App;
