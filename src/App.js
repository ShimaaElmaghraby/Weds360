
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import AllCategories from './components/AllCategories/allCategories';
import AllPhotos from './components/AllPhotos/allPhotos';
import PhotoDetails from './components/PhotoDetails/photoDetails';
import CategoryList from './components/CategoryList/categoryList';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AllPhotos />} />
          <Route path="/categories" element={<AllCategories/>} />
          <Route path="/image/:id" element={<PhotoDetails />} />
          <Route path="/categories/:id" element={<CategoryList />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
