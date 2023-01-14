import iphone from "../img/bigIphone.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BestBuyContext } from "../context/BestBuyContext";
import { HiShoppingCart } from "react-icons/hi";

export default function Cart() {
  const {cart,handleQtyDecrease,qty,deleteCartItem,grandTP,
    handleQtyIncrease}= useContext(BestBuyContext)
  return (
    <>
      <div className="" style={{background:"#e0e6ef"}}>
        {/* <p>Your cart is empty
</p>
<p>Just browsing? You can <Link>create an account </Link>  and start earning reward points whenever you make a purchase.</p>

<div>
<h1 className='border-top'> Your list is currently empty</h1>

<p> Need inspiration? <Link>Check out recommended items</Link>, or search for items to save.</p>
</div> */}
<br />
        <h4>Your Cart</h4>
        <div className="row  container-fluid gy-2 cart">
        {cart.length===0?
        (<div className="text-center m-auto h-100"><p className="fs-3">Add items to your cart <br /> <span> <HiShoppingCart /> </span> </p> 
        </div>):
        

          cart.map((item)=>(


            <div className="col-7 border-top">
            <div className="row  bg-white border border-light m-auto">
              <div className="col">
                <img className="img-fluid" src={item.image} alt="" />
              </div>
              <div className="col">
                <h5 className="fw-bold">
           {item.name}
                </h5>
                <p className="fs-6 fw-lighter">{item.description}</p>
                <p>${item.price}</p>
              </div>

              <div className="col">
                <input type="radio" name="" id="" />
                Unavailable within 250 miles of Hato Key <br />
                <input type="radio" name="" id="" />
                Shipping to
              </div>

              <div className="col">
                <Link onClick={()=>{
                  deleteCartItem(item)
                }}>Remove</Link> <br />
                <Link>Save</Link>

                <div className="d-flex">

                  <button  onClick={()=>{
                    handleQtyDecrease(item)}}
                  
                  className="p-3 border-0" style={{ background: "#ffe000", fontSize: "15px"  }}>-</button> <p className="p-2">{item.qty}</p> <button
                  onClick={()=>{
                    handleQtyIncrease(item)}}
                   className="p-3 border-0" style={{background: "#ffe000", fontSize: "15px"  }}>+</button>
                </div>
                

              </div>
            </div>
          </div>
          )

          )}
        
        
        


         
{cart.length===0?(<></>):( <div className="col-4  h-100 container bg-white">
            <h3 className="border-bottom p-1 fw-bolder text-center">
              Order Summary
            </h3>
            <div className="d-flex justify-content-between">
              <p>Item total</p>
              <p>${grandTP}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Shipping</p>
              <p>$100</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Estimated Tax Sales</p>
              <p>$30</p>
            </div>
            <div className="d-flex justify-content-between border-top pt-2">
              <h5>Total</h5>
              <p className="fw-bolder">${30+100+grandTP}</p>
            </div>
            <Link
              className="fw-bolder btn btn-lg  w-100 fs-6 w-80" 
              style={{ background: "#ffe000", fontSize: "12px" }}
            >
              Checkout
            </Link>{" "}
            <br />
            <Link
              className="fw-bolder bg-dark btn btn-lg mt-2 w-100 border-0  fs-6 text-light"
              style={{ background: "#1d252c", fontSize: "12px" }}
            >
              PayPal <span className="fs-6"> checkout</span>{" "}
            </Link>
            <Link to='/signIn'>Sign in or create a new account now</Link>
          </div>)}
         
        </div>
      </div>
    </>
  );
}
