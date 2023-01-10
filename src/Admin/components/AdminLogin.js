import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate,Link, json } from 'react-router-dom'

export default function AdminLogin() {
const navigate= useNavigate();
const [validate,setValidate]=useState(false)
    const [signInData,setSignInData]=useState({
        name: "",
        password: "",
        
    })
    const [validateMessage,setValidateMessage]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
      
      
            if(signInData.name==="admin"&& signInData.password==="1234"){
                setValidate(false)
                navigate("/admin");
                sessionStorage.setItem("admin",JSON.stringify())

                setValidateMessage("")
                console.log("correct details");
            }
            else{
                setValidate(true)
                setValidateMessage("invalid details")
                console.log("incorrect details");
            }
            

        }
         


  return (
    <div className="h-100 pt-5 signIn" style={{background:"#e0e6ef"}} >
    <div className="pt-6 border border-2 m-auto col-4 bg-white"  >
<div className=' text-center' >
<h5 className="fw-bolder mt-3">Sign In to Best Buy</h5>
</div>
<form method="post" action="http://159.65.21.42:9000/login">
<div className="form-floating mb-3 col-11 mt-4 m-auto bg-white ">
  <input style={{borderColor:validate===true&&!signInData.name?"red":"transparent"}}
  onChange={(e)=>{
setSignInData({...signInData,name:e.target.value})
      }}
   type="text" className="form-control "  value={signInData.name} name="name"  id="floatingInput" placeholder="username"/>
  <label htmlFor="floatingInput">name address</label>
</div>

<label className="switch container fs-6 text-end">
  <input  type="checkbox"/>
  <span className="slider round"></span> 
</label> Show password

<div className="form-floating col-11 m-auto bg-white">
  <input style={{borderColor:validate===true&&!signInData.password?"red":"transparent"}}
   onChange={(e)=>{
setSignInData({...signInData,password:e.target.value})
      }}
  
  type="password" className="form-control bg-white" value={signInData.password} name="password" id="floatingPassword" placeholder="Password"/>
  <label htmlFor="floatingInput"></label>
  <Link >Forgot your password</Link>
</div>
<div className="container">
   {/* <button onClick={handleSubmit}
              className="fw-bolder btn btn-primary btn-lg mt-2 w-100 border-0  fs-6 text-light"
              style={{fontSize: "12px" }}
            >
     
             
            </button> */}

            <button onClick={handleSubmit}
              className="fw-bolder btn btn-primary btn-lg mt-2 w-100 border-0  fs-6 text-light"
              style={{fontSize: "12px" }}
            >
            sign in
   
             
            </button>
<p className='fs-6 text-danger'> {validateMessage}</p>

     



            </div>
            </form>
    </div>
    </div>
  )
}
