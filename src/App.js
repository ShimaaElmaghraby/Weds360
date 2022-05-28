
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import SearchBar from './components/SearchBar/searchBar';

function App() {
  return (
    <div className="App">
      <div> 
        <Header/>
        <div className="mainContainer">
          <div className="searchSection">
            <SearchBar/>
          </div>
          <div className="imageSection">

          </div>

        </div>
        <Footer />
      </div>
    </div>
  ); 
}

export default App;
