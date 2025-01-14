
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';



import Footer from './Components/Footer/Footer';

import NavbarOne from './Components/Navbar/NavbarOne';
import Home from './Components/Home/Home';
import About from './Components/About/About'

import Contact from './Components/Contact/Contact';



function App() {
  return (
    <div>
      <BrowserRouter>
     <NavbarOne/> 
     <Navbar/>
     
    <Routes>
      <Route path='/shop' element = {<Shop/>}/>
      <Route path='/mens' element = {<ShopCategory category="men"/>}/>
      <Route path='/womens' element = {<ShopCategory category="women"/>}/>
      <Route path='/kids' element = {<ShopCategory  category="kid"/>}/>
      <Route path=':product' element ={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/home' element= {<Home/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/contact' element= {<Contact/>}/>
    </Routes>
    
    <Footer/>
    
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
