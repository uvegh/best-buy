import { useEffect } from "react";
import { useState } from "react";
import {  createContext} from "react";//create context to create the global store

export const BlogContext  = createContext()//exporting the context you created  with createContext

//function to disperse the data to others that need it
function BlogProvider(props){
    const [cart, setCart]=useState(0);
    const [being, setBeing] = useState("Otsuski")
    const [users, setUser] = useState([])
    let fishes = ["tilapia","titus","catFish","Bony Fish"]



    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((resp) => resp.json())
          .then((data) => {
            setUser(data);
            console.log(users);
          });
      };

      useEffect(()=>{
        getUsers()
      },[])
    
return(
    
    
    //incharge of disbursing the data to others
<BlogContext.Provider value={{cart,being,users,fishes,getUsers}}> 
{/* provide values for the context */}
 {/*  instead of manually listing thr components that would use the data */}
 {props.children}
 </BlogContext.Provider>

)

}
export default BlogProvider