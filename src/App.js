
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import Home from './pages/home'
import About from './pages/about'
import NotFound from './pages/404';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Admin from './pages/admin';
import GlobalData from './store/globalData';
import Cart from './pages/cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <GlobalData>
    <BrowserRouter>

    <div className="App">
      <Navbar></Navbar>
      <div className='body'>
        <Routes>
          <Route path="/" element={ <Home/> }></Route>
          <Route path="/home" element={ <Home/> }></Route>
          <Route path="/about" element={ <About/> }></Route>
          <Route path="/catalog" element={ <Catalog/> }></Route>
          <Route path="/admin" element={ <Admin/> }></Route>
          <Route path="/cart" element={<Cart/>}></Route>

          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>

    </BrowserRouter>
    </GlobalData>
  );
}

export default App;
