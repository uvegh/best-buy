import iphone from "../img/bigIphone.jpg";
import { IoCart } from "react-icons/io5";
import thumbnail1 from "../img/iphone14thumbnail1.jpg";
import thumbnail2 from "../img/iphone14thumbnail2.jpg";
import thumbnail3 from "../img/iphone14thumbnail3.jpg";
import thumbnail4 from "../img/iphone14thumbnail4.jpg";
import thumbnail5 from "../img/iphone14thumbnail5.jpg";
import thumbnail6 from "../img/iphone14thumbnail6.jpg";

import iphone1 from "../img/iphone1.jpg";
import iphone2 from "../img/iphone2.jpg";
import iphone3 from "../img/iphone3.jpg";
import iphone4 from "../img/iphone4.jpg";
import iphone5 from "../img/iphone5.jpg";
import iphone6 from "../img/iphone6.jpg";

import { Link, useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { MdArrowRight } from "react-icons/md";
import { ReactComponent as AtT } from "../img/At&t.svg";
import { useContext } from "react";
import { BestBuyContext } from "../context/BestBuyContext";

export default function SingleProduct() {
  const { _id } = useParams();
  const {addToCart}=useContext(BestBuyContext)
  const [isShown, setIshown] = useState(false);
  const [cartValidate, setCartValidate] = useState(false);
  const [product,setProduct]= useState({})
  const imgThumbnail = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
    thumbnail5,
    thumbnail6,
  ];

  const getProduct=()=>{
    fetch(`http://159.65.21.42:9000/product/${_id}`)
    .then(resp=>resp.json())
    .then((data)=>{
     console.log(data);
      setProduct(data)
    })
  }


  useEffect(()=>{

    getProduct()
  },[])

  const images = [iphone1, iphone2, iphone3, iphone4, iphone5, iphone6];
  const [imgindex, setImgIndex]=useState(0);
  const [cart,setCart] =useState([])

  // const [imgState, setImgState] = useState(imgThumbnail);

  const handlePopup =()=>{
    setIshown(current=>!current)
  }


  // useEffect(()=>{

  // },[imgindex])
  return (
    <>
    
      <div className="row border-top container-fluid mt-4 m-md-5 m-sm-5">
      <div className="singleNav container mt-3">
      <Link to="/">Best Buy</Link>  <MdArrowRight/> <Link to="/shop">Apple</Link>  <MdArrowRight/> <Link>Iphone14</Link>  
    </div>

        <div className="col-7 text-center" >
        <Link onClick={handlePopup} >   <img className="img-fluid" src={`http://159.65.21.42:9000${product.image}`} alt="" /></Link>
        
        </div>

        <div className="col">
          <h5>{product.name}</h5>
          <p>
            <span className="fw-bold"> {product.description} </span>
            
          </p>
          <br />
          <p style={{ color: "yellow", fontSize: "15px" }}>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
            <IoIosStar />
          </p>{" "}
          <p>{product.category}</p>

          <div>
            <h4>Carrier</h4>
            <p className="border-dark  border border-1 p-2 fw-bolder">${product.price} excluding door delivery</p>
            <button onClick={()=>{addToCart(product)}}
              className="fw-bolder text-black btn btn-primary border-0
            "
              style={{ background: "#ffe000", padding: "" }}
            >
              
              <span className="fw-bold text-black fs-4 mb-3">
               
                <IoCart />
              </span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
{isShown&&(<div className="overlay container-fluid sticky-top mt-5 pt-5 ">
        <div className="bg-white popup   mt-1 ">
          <div className=" border-bottom p-2 d-flex justify-content-between ">
            <Link className="fw-bold text-center text-decoration-none">
              {" "}
              Product Image
            </Link>

            <Link onClick={()=>{
              setIshown(false)
            }} className="ms-auto text-black fs-4 text-decoration-none" ><FaTimes /> </Link>
          </div>

          <div className="row container-fluid  mt-3">
          <div className="col-2  ">
              <div className="row">

            
                <div className="col-6 border" key={product.id} >
                  <Link>
                  
                    <img className="img-fluid" src={`http://159.65.21.42:9000${product.image}`} alt="" />
                  </Link>
                </div>

                <div className="col-6 border" key={`http://159.65.21.42:9000${product.image}`} >
                  <Link>
                  
                    <img className="img-fluid" src={`http://159.65.21.42:9000${product.image}`} alt="" />
                  </Link>
                </div>

                <div className="col-6 border" key={`http://159.65.21.42:9000${product.image}`} >
                  <Link>
                  
                    <img className="img-fluid" src={`http://159.65.21.42:9000${product.image}`} alt="" />
                  </Link>
                </div>

                <div className="col-6 border" key={`http://159.65.21.42:9000${product.image}`} >
                  <Link>
                  
                    <img className="img-fluid" src={`http://159.65.21.42:9000${product.image}`} alt="" />
                  </Link>
                </div>

                

                </div>
                
           
            </div>

            <div className="col text-center ">
              <img
                className="img-fluid"
                src={`http://159.65.21.42:9000${product.image}`}
                alt=""
                style={{ width: "300px",height:"400px" }}
              />
            </div>
            </div>
            </div>
      </div>
            
          )
}
          
          
          
           

         



       
      
      
      
    </>
  )
  
  
}
