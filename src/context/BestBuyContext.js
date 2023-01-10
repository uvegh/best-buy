

import { createContext,useState,useEffect } from 'react'



export const BestBuyContext = createContext();

export default function BestBuyProvider(props) {

  const [products, setProducts]= useState([])
  const [cart,setCart]=useState([]);
  const [qty,setQty]=useState(1)

  const [isShown, setIshown] = useState(false);
const [userName,setUserName]=useState("vince");
const [initUsers,setInitUsers]=useState([])
const [Categories, setCategories]=useState([])
const [users, setUsers]=useState([])
const checkCartData = localStorage.getItem("cart_record");

const [myProducts, setMyProducts] = useState([]);

// const [recentProducts,setRecent] =useState([])

const [togglePsswdChange,setTogglePsswdChange]=useState("password")

const togglePsswd=()=>{
  if (togglePsswdChange==="password") {
    setTogglePsswdChange("text")
    return
  }
  setTogglePsswdChange("password")
}



  const getProducts=()=>{
    fetch("http://159.65.21.42:9000/products")
    .then(resp=>resp.json())
    .then((data)=>{
      // console.log(data);
      setProducts(data)
    })
  }


  const getUsers=()=>{
    fetch("http://159.65.21.42:9000/users")
    .then(resp=>resp.json())
    .then((data)=>{
      // console.log(data);
      setInitUsers(data)
      
      const usersReverse=data.reverse()
      let filtered=   usersReverse.filter((userFilter,idx)=>idx<10)
      setUsers(filtered)
    })
  }

 


  const filter = () => {
    let filteredProducts = products.filter(
      (item) => item.category === "bestBuy"
    );
    // console.log(filteredProducts);
 
    const productsReverse = [...filteredProducts].reverse();
    setMyProducts(productsReverse);
    // console.log(myProducts);
  };




let getRecent = myProducts.filter((data,idx)=>idx<3 )
// console.log(getRecent);

let grandTP=[...cart].map(({totalPrice})=>totalPrice).reduce((a,b)=>{
  
 return a+b},0)

const activateCart = () => {
  if (checkCartData) {
    let cartData = JSON.parse(checkCartData);
    setCart(cartData);
  }
};
const addToCart = (item) => {
  let initialCartData = [...cart];
  let checkProduct = initialCartData.find(prod => prod._id === item._id);
  if (checkProduct) {
    alert("Product Already In Cart!!!!");
  } else {
    let newItem = { ...item, qty: 1, totalPrice: item.price };
    initialCartData.push(newItem);
    setCart(initialCartData);
    localStorage.setItem("cart_record", JSON.stringify(initialCartData));
  }
};


const handleQtyDecrease=(cartItem)=>{
let initCartData =[...cart]
initCartData.find((foundItem)=>{
  if(foundItem._id===cartItem._id){
    if (cartItem.qty>1) {
      cartItem.qty-=1;
      cartItem.totalPrice= cartItem.price*cartItem.qty;
    }
  }
  } )

  setCart(initCartData)
  localStorage.setItem("cart_record",JSON.stringify(initCartData))



}

const handleQtyIncrease=(cartItem)=>{
let initCartData =[...cart]
initCartData.find((foundItem)=>{
if (foundItem._id===cartItem._id) {
  cartItem.qty+=1;
  cartItem.totalPrice= cartItem.price*cartItem.qty;
}

});
setCart(initCartData)
  localStorage.setItem("cart_record",JSON.stringify(initCartData))
  }


  const deleteCartItem =(cartItem)=>{
    let initCartData =[...cart]
    let deletedItem=initCartData.filter((item)=>{
return cartItem._id !== item._id
    })

    setCart(deletedItem)
    localStorage.setItem("cart_record",JSON.stringify(deletedItem))
  }

  useEffect(()=>{
   
    getProducts()
    
    
    getUsers()
    filter()
  },[products])



  useEffect(()=>{
    deleteCartItem()
    activateCart()
  },[])
  return (

   


   <BestBuyContext.Provider value={{products,getProducts,addToCart,cart,userName,activateCart,
    setUserName,handleQtyIncrease,qty,deleteCartItem,Categories,users,getUsers,getRecent,grandTP,myProducts,

handleQtyDecrease,initUsers,togglePsswdChange,
togglePsswd}}>
{props.children}

   </BestBuyContext.Provider>
  )
}
