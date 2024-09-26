
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
import Orders from './pages/User/Orders';
import ResetPassword from './pages/User/ResetPassword';
import ForgetPassword from './pages/User/ForgetPassword';
import Productdetails from './pages/Admin/Productdetails';
import Totalearnings from './pages/Admin/Totalearnings';
import { HeaderProvider } from './context/header';


function App() {
  return (
    <div className="App">
      <HeaderProvider>
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
        <Route path='/userOrders' element={<Orders/>}/>
        <Route path='/ResetPassword/:token' element={<ResetPassword/>}/>
        <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
        <Route path='/productdetails' element={<Productdetails/>}/>
<Route path='/Totalearnings'element={<Totalearnings/>} ></Route>

      </Routes> 
    
      <Footer/> 
      </HeaderProvider>
      
      </div>  
  );
}

export default App;
