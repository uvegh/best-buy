// cls
import "./Sass/styles.css";

import Navigation from "./components/Navigation";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";

import AdminProducts from "./Admin/components/AdminProducts";
import UserAdmin from "./Admin/components/UserAdmin";
import BestBuyProvider from "./context/BestBuyContext";
import AdminDashboard from "./Admin/components/AdminDashboard";
import { useState } from "react";
import Protected from "./Admin/components/Protected";
import AdminLogin from "./Admin/components/AdminLogin";
import UserLayout from "./components/UserLayout";
import AdminLayout from "./Admin/components/AdminLayout";





function App() {

const [isLoggedIn,setIsLoggedIn]=useState(null)

  return (
  
  
    <>
<BestBuyProvider>

    <BrowserRouter>





    <Routes>
    <Route path="/" element={<UserLayout/>}>



<Route path='/home' element={<Home/>}/>
<Route path='/shop' element={<Shop/>}/>

<Route path ='/shop/:_id' element={<SingleProduct/>} />
<Route path ='/cart' element={<Cart/>} />

<Route path ='/signIn' element={<SignIn />} />
<Route path ='/signUp' element={<Signup />} />
</Route>


<Route path="/" element={<AdminLayout/>}>
 
<Route path ='/adminLogin'  element={<AdminLogin />} />

<Route path="/admin/product" element={<Protected isLoggedIn={isLoggedIn} >
  <AdminProducts />
   </Protected> } />

<Route path="/admin/user" element={<Protected isLoggedIn={isLoggedIn} >
  <UserAdmin />
   </Protected> } />

  <Route path="/admin" element={<Protected isLoggedIn={isLoggedIn} >
  <AdminDashboard />
   </Protected> } />
</Route>


    


</Routes>











    </BrowserRouter>

    </BestBuyProvider>
 
  </>
      
  );
}

export default App;
