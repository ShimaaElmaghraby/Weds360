
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import AllPhotos from './components/AllPhotos/allPhotos';
import PhotoDetails from './components/PhotoDetails/photoDetails';

function App() {
  return (
    <>
    <Router>
        <Header/>
        {/* <div className="mainContainer"> */}
          {/* <div className="searchSection">
            <SearchBar/>
          </div> */}
          {/* <div className="imageSection"> */}
            <Routes>
              <Route path="/" element={<AllPhotos/>} />
              <Route path="/image/:id" element={<PhotoDetails/>}/>
            </Routes>
          {/* </div> */}
        {/* </div> */}
        <Footer />
    </Router> 
    </>
  ); 
}

export default App;
