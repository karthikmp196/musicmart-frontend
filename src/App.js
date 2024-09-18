
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Admindash from './pages/Admin/Admindash';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/User/Cart';
import Adminform from './pages/Admin/Adminform';
import Admintable from './pages/Admin/Admintable';
import Product from './pages/User/Product';
import Adminedit from './pages/Admin/Adminedit';
import Userdetails from './pages/Admin/Userdetails';
import Orderdetails from './pages/Admin/Orderdetails';
import Profile from './pages/User/Profile';


function App() {
  return (
    <div className="App">
      <Header/> 
       <Routes>
        <Route path='/adminform' element={<Adminform/>}/>
        <Route path='/admintable' element={<Admintable/>}/>
        <Route path='/admindash' element={<Admindash/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Adminedit' element={<Adminedit/>}/>
        <Route path='/Userdetails' element={<Userdetails/>}/>
        <Route path='/Orderdetails' element={<Orderdetails/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes> 
    
      <Footer/> 
      
      </div>  
  );
}

export default App;
