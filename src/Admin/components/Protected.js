import { Navigate } from "react-router-dom"



const Protected =({children})=>{
const isLoggedIn=sessionStorage.getItem("admin")
    
    if(!isLoggedIn){
return <Navigate to="/adminLogin" replace />


    }
    return children


}
export default Protected