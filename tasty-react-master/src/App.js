import './App.css';
import React from 'react';
import Home from './Components/Start/Home';
import Footer from './Components/Start/Footer';
import Imfor from './Components/Infor/infor'
import Menu from './Components/Menu/menu';
import Hostline from './Components/Hostline/hostline'
import Dangnhap from './Components/Dangnhap/dangnhap'
import Product from './Pages/Product';
import {Routes, Route,} from 'react-router-dom'
import Navbar from './Components/Start/Navbar';
import Cart from './Pages/Cart/Cart';
import Contact from './Components/Start/Contact';



function App() { 

return (
    <div>  

<Navbar/>

      <div className='App_start'> 
      <Routes>
        <Route path='/' element=  {<Home />}/> 
        <Route path='/information' element={<Imfor/>}/>
        <Route path='/menu' element={ <Menu/>}/>
        <Route path='/hostline' element={<Hostline/>}/>
        <Route path='/dangnhap' element={<Dangnhap/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/product" element={<Product/>}/>{
            <Route path=':productID' element={<Product/>}/>}  

            <Route />
        
      </Routes>
      </div>
 
<Footer/>

</div>
    
  ); 

}
export default App;
