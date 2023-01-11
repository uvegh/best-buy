import { useEffect } from "react";
import { useContext,useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { BestBuyContext } from "../context/BestBuyContext"



export default function () {
const{setUserName,users,initUsers,togglePsswdChange,
  togglePsswd}= useContext(BestBuyContext);
const navigate =useNavigate()
const [validate,setValidate]=useState(false)
  const [signInData,setSignInData]=useState({
    email: "",
    password: "",
    
})

// console.log(users);
const handleSubmit=(e)=>{
  e.preventDefault()

  // if (signInData.email===""|| signInData.password==="") {
  //   setValidate(true)
  //   return
  // } else {
  
let loginVal =initUsers.filter((result)=>{
 return result.email==signInData.email&&result.password==signInData.password

}
)
// console.log(loginVal);
if (loginVal.length>0) {
  alert("login successful")
  setUserName(loginVal[0].name)
  navigate("/home")
}
 else{
  alert("user does not exist")
 }

//     fetch("http://159.65.21.42:9000/login",{
// method:"post",
// headers:{'Content-Type':'application/json'},
// body:JSON.stringify(signInData)


//     }).then(resp=>resp.json()).then((data)=>{
//       alert("sign In Successful")
//       console.log(data);
//       setUserName(data.name)
//       // alert(`welcome${data.name}`)
//     }).catch((error)=>{{
//       alert("user doesn't exist")
//       console.log(error.error)
//     }})
  



      }

      useEffect(()=>{
        
      },[validate])


        
      {validate===false?
              setTimeout(() => {

                <div class="spinner-border mt-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

              }
      
    , 10):( <> Sign in</>)
            } 


  return (
    <div className="h-100 pt-5 signIn" style={{background:"#e0e6ef"}} >
    <div className="pt-6 border border-2 m-auto col-sm-8 col-md-5 col-lg-4 bg-white "  >
<div className=' text-center container' >
<h5 className="fw-bolder mt-3">Sign In to Best Buy</h5>
</div>
<form method="post" action="http://159.65.21.42:9000/login"  className="">
<div className="form-floating mb-3 col-11 mt-4 m-auto bg-white ">
  <input
  onChange={(e)=>{
setSignInData({...signInData,email:e.target.value})
      }}
   type="email" className="form-control "  value={signInData.email} name="email"  id="floatingInput" placeholder="Emsail address"/>
  <label htmlFor="floatingInput">Email address</label>
</div>

<label className="switch container fs-6 text-end">
  <input onChange={
togglePsswd} type="checkbox"/>
  <span className="slider round"></span> 
</label> Show password

<div className="form-floating col-11 m-auto bg-white">
  <input 
   onChange={(e)=>{
setSignInData({...signInData, password:e.target.value})
      }}
  
  type={togglePsswdChange} className="form-control bg-white" value={signInData.password} name="password" id="floatingPassword" placeholder="Password"/>
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


     



            </div>
            </form>
    </div>
    </div>
  )
}
