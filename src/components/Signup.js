import React, { useState } from 'react'
import { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { BestBuyContext } from '../context/BestBuyContext';

export default function Signup() {
  const [validate, setValidate]= useState(false);
  const navigate =useNavigate()
const {togglePsswdChange,togglePsswd}=useContext(BestBuyContext)
  const [signupData,setSignupData]=useState({
    email: "",
    password: "",
    name: "",
    phone: ""
})

const handleSubmit=(e)=>{
  e.preventDefault()

  if (signupData.email===""|| signupData.password===""||signupData.name===""|| signupData.phone==="") {
    setValidate(true)
  } else {
    
    fetch("http://159.65.21.42:9000/register",{
method:"post",
headers:{'Content-Type':'application/json'},
body:JSON.stringify(signupData)})
.then(resp=>resp.json()).then((data)=>{
     console.log(data);



      
      
     navigate("/home")
    }).catch((err)=>{
     console.log(err.err)
    })
  }
      }

    return (
        <div className="h-100 pt-5 signIn" style={{background:"#e0e6ef"}} >
        <div className="pt-6 border border-2 m-auto col-4 bg-white"  >
    <div className=' text-center' >
    <h5 className="fw-bolder mt-3">Sign Up to Best Buy</h5>
    </div>
    <form >
    <div className="form-floating mb-3 col-11 mt-4 m-auto bg-white ">
      <input onChange={(e)=>{
setSignupData({...signupData,email:e.target.value})
      }}
            style={{borderColor:validate===true?"red":"black"}}
      type="email" className="form-control " name='email' value={signupData.email}  id="floatingInput" placeholder="Emsail address"/>
      <label for="floatingInput">Email address</label>
      {}
    </div>


    <div className="form-floating mb-3 col-11 mt-4 m-auto bg-white ">
      <input onChange={(e)=>{
setSignupData({...signupData,name:e.target.value})
      }}
            style={{borderColor:validate===true?"red":"black"}}
      type="text" className="form-control " name='name' value={signupData.name}  id="floatingInput" placeholder="Username"/>
      <label for="floatingInput">Username</label>
      {}
    </div>
    
    <label className="switch container fs-6 text-end">
      <input onChange={togglePsswd} type="checkbox"/>
      <span className="slider round"></span> 
    </label> Show password
    <div className="form-floating mb-3 col-11 mt-4 m-auto bg-white ">
      <input 
      style={{borderColor:validate===true?"red":"black"}}
        type={togglePsswdChange} 
      
      onChange={(e)=>{
setSignupData({...signupData,password:e.target.value})
      }}
      
       className="form-control " name='password' id="floatingInput" placeholder="password"/>
      <label for="floatingInput">Password</label>
      <label for="floatingPassword"></label>
      <Link >Forgot your password</Link>
      {validate===true&&signupData.password===""?(<span className='text-danger'> enter password</span>):null}
    </div>
    
 
    

  

    <div className="form-floating mb-3 col-11 mt-4 m-auto bg-white ">
      <input
    onChange={(e)=>{
      setSignupData({...signupData,phone:e.target.value})
    }}
       type="tel" className="form-control " name='phone'  id="floatingInput" placeholder=" phone"/>
      <label for="floatingInput">Mobile phone Number</label>
    </div>

   <input  type="checkbox" name="phone" id="" /> Use Account for Recovery

    

    
   <div className="container">
       <button type='button' onClick={handleSubmit}
                  className="fw-bolder btn btn-primary btn-lg mt-2 w-100 border-0  fs-6 text-light"
                  style={{fontSize: "12px" }}
                >
                  Create Account
                </button>
                </div>
    </form>

         
        </div>
        </div>
      )
}
