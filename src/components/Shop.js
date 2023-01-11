import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import Apple1 from "../img/apple1.jpg";
import Apple2 from "../img/apple2.jpg";
import Apple3 from "../img/apple3.jpg";
import mac from "../img/mac.png";
import Apple5 from "../img/apple5.jpg";
import Apple6 from "../img/apple6.jpg";
import Apple7 from "../img/apple7.png";
import Apple8 from "../img/apple8.jpg";
import Apple9 from "../img/apple9.jpg";
import Apple10 from "../img/apple10.jpg";
import Apple11 from "../img/apple11.jpg";
import Apple12 from "../img/apple12.jpg";
import appleGroup from "../img/appleGroup.jpg"
import { useContext, useState } from "react";
import { useEffect } from "react";
import { BestBuyContext } from "../context/BestBuyContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function Shop() {
 const{myProducts}=useContext(BestBuyContext)





useEffect(()=>{
 
},[myProducts])
  return (
    <>
      <div className="container-fluid bg-black text-center p-3">
        <h1 className="text-light fw-bolder">Apple Shopping Event.</h1>
      </div>
      <p
        className="fw-bolder border-bottom fs-5 m-auto text-black"
        style={{ width: "95%" }}
      >
        Shop Apple by category
      </p>

      <div className="row   m-auto  shopHeader mb-5 text-center" style={{width:"94%"}}>
        <div className="col-lg-1 col-md-3 col-sm-3 m-auto">
          <Link>
            <div className="borderHover rounded-2 pt-2 ps-2  ">
              <LazyLoadImage className="img-fluid" src={Apple1} alt="apple-phone" />
              <br />
              <p className="mt-1"> iphone</p>
            </div>
          </Link>
        </div>

        <div className="col-lg-1 col-md-3 col-sm-3 m-auto">
          <Link>
            <div className="borderHover rounded-2 pt-2 ">
              <LazyLoadImage className="img-fluid" src={Apple2} alt="apple-phone" />
              <br />
              <p className="mt-1"> iPad</p>
            </div>
          </Link>
        </div>

        <div className="col-lg-1 col-md-3 col-sm-3 m-auto">
          <Link>
            <div className="borderHover rounded-2 pt-2">
              <LazyLoadImage className="img-fluid" src={Apple3} alt="apple-phone" />
              <br />
              <p className="mt-1"> Apple Watch</p>
            </div>
          </Link>
        </div>

        <div className="col-lg-1 col-md-3 col-sm-3 m-auto">
          <Link to="/shop/id">
            <div className="borderHover rounded-2 pt-2">
              <LazyLoadImage className="img-fluid" src={mac} alt="apple-phone" />
              <br />
              <p className="mt-1"> Mac</p>
            </div>
          </Link>
        </div>

        <div className="col-lg-1 col-md-3 col-sm-3 m-auto">
          <Link>
            <div className="borderHover rounded-2 pt-2">
              <LazyLoadImage className="img-fluid" src={Apple5} alt="apple-phone" />
              <br />
              <p className="mt-1"> Apple Tv</p>
            </div>
          </Link>
        </div>

        <div className="col-lg-1 col-md-3 col-sm-3 m-auto">
          <Link>
            <div className="borderHover rounded-2 pt-2">
              <LazyLoadImage className="img-fluid" src={Apple6} alt="apple-phone" />
              <br />
              <p className="mt-1"> AirPods</p>
            </div>
          </Link>
        </div>

        <div className="col-lg-1 col-md-3 col-sm-3 m-auto">
          <Link>
            <div className="borderHover rounded-2 pt-2">
              <LazyLoadImage className="img-fluid" src={Apple7} alt="apple-phone" />
              <br />
              <p className="mt-1"> HomePad</p>
            </div>
          </Link>
        </div>

        <div className="col-lg-1 col-md-3 col-sm-3 m-auto">
          <Link>
            <div className="borderHover rounded-2 pt-2">
              <LazyLoadImage className="img-fluid" src={Apple8} alt="apple-phone" />
              <br />
              <p className="mt-1"> Beats</p>
            </div>
          </Link>
        </div>

        <div className="col-lg-1 col-md-3 col-sm-3 m-auto">
          <Link>
            <div className="borderHover rounded-2 pt-2 ps-2 pe-2 ">
              <LazyLoadImage className="img-fluid" src={Apple9} alt="apple-phone" />
              <br />
              <p className="mt-1"> Accessories</p>
            </div>
          </Link>
        </div>
      </div>
      <p
        className="fw-bolder border-bottom fs-5 m-auto text-black"
        style={{ width: "95%" }}
      >
        Featured Offers
      </p>
      <div className="featuredOffer">

<div className="row  container-fluid m-auto mt-5 g-3">
  {myProducts.length===0?
  (    <div className="text-center min-vh-50 container-fluid">
                    <div class="lds-ripple m-auto"><div></div><div></div></div>
                    </div>):
                    myProducts.map(({image,price,description,_id,name},product)=>(

    <div className="col m-auto border-end" key={_id}>
    <Link to={`/shop/${_id}`} className="text-decoration-none text-dark">
    <LazyLoadImage src={`http://159.65.21.42:9000${image}`} width={200} height={200} alt=""
    placeholderSrc={Apple1} effect="blur"
     />
    <h3>{name}</h3>
            <p>{description}</p>
            <br />
            <p>Minimum savings is $50.</p>
            <p className="fw-bolder fs-3 text-black">{price}</p>
            <span
              className="fw-bolder p-1 text-light priceDiscount"
              style={{ background: "#bb0628" }}
            >
              Save $150
            </span>
          {price-150}
            <br />
            <p style={{ color: "yellow", fontSize: "15px" }}>
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </p>
            <br />
            <button 
            
             className="fw-bolder text-black btn btn-primary border-0
            "
              style={{ background: "#ffe000", padding: "" }}
            >
              {" "}
              <span className="fw-bold text-black fs-4 mb-3">
                {" "}
                <IoCart />
              </span>{" "}
              Add to Cart
            </button>

    </Link>
           
          </div>

  ))
  
  
  }
</div>



      </div>

      <div className="topDeals d-lg-flex m-auto d-md-flex container justify-content-center align-content-center p-3  mt-5" style={{background:"rgb(192, 191, 191)"}}>

        <div className="mt-5">
<h1 className="fw-bolder">
  Apple Top Deals
</h1>

<p>Shop great deals on iPhone, iPad, MacBook and more.</p>
<div className="text-end me-3"> <Link className=" btn btn-primary fw-bold text-light text-end">
Shop Now
</Link></div>



</div>

<div className="">
  <img className="" height={220} src={appleGroup} alt="" />
</div>
        </div>

        
        <div className="topDeals d-lg-flex m-auto d-md-flex containerjustify-content-center align-content-center p-3 mt-5 " >



<div className="">
<img className="" height={220} src={appleGroup} alt="" />
</div>


<div className="mt-5 ms-2">


<Link className="text-decoration">The Apple products you love, protected. </Link>
<p className="fw-bold" style={{fontSize:"12px"}}>Best Buy Totaltech™ members get up to 24 months of AppleCare+ on Apple products with active membership. </p>
<p style={{fontSize:"10px"}}>Terms, conditions and exclusions apply.</p>
<div className="text-start me-3"> <Link className=" btn btn-primary fw-bold text-light ">
Shop Now
</Link>
</div>



</div>
</div>
     <p
        className="fw-bolder border-bottom fs-5 m-auto text-black"
        style={{ width: "95%" }}
      >
        Subscriptions
      </p>
    
      <div className="row row-cols-lg-4 m-auto row-cols-md-2 row-cols-sm-1 container-fluid mt-5 subscriptions">
          <div className="col  border-end">
            <img src={Apple5} className="img-fluid" alt="" />
            <Link>One gift card. All of Apple.</Link>
            <br />
            <p >Use it to buy products, accessories, apps, games, music, movies, TV shows, iCloud and more.
</p>
            <p className="fw-bolder fs-3 text-black">$1,049.00</p>
            <Link className=" btn btn-primary fw-bold text-light mt-3 " style={{fontSize:"10px"}}>
Shop Now
</Link>
            
       
          </div>

          <div className="col  border-end">
            <img src={Apple5} className="img-fluid" alt="" />
            <Link>One gift card. All of Apple.</Link>
            <br />
            <p >Use it to buy products, accessories, apps, games, music, movies, TV shows, iCloud and more.
</p>
            <p className="fw-bolder fs-3 text-black">$1,049.00</p>
            <Link className=" btn btn-primary fw-bold text-light mt-3 " style={{fontSize:"10px"}}>
Shop Now
</Link>
            
       
          </div>


          <div className="col  border-end">
            <img src={Apple5} className="img-fluid" alt="" />
            <Link>One gift card. All of Apple.</Link>
            <br />
            <p >Use it to buy products, accessories, apps, games, music, movies, TV shows, iCloud and more.
</p>
            <p className="fw-bolder fs-3 text-black">$1,049.00</p>
            <Link className=" btn btn-primary fw-bold text-light mt-3 " style={{fontSize:"10px"}}>
Shop Now
</Link>
            
       
          </div>


          <div className="col  border-end">
            <img src={Apple5} className="img-fluid" alt="" />
            <Link>One gift card. All of Apple.</Link>
            <br />
            <p >Use it to buy products, accessories, apps, games, music, movies, TV shows, iCloud and more.
</p>
            <p className="fw-bolder fs-3 text-black">$1,049.00</p>
            <Link className=" btn btn-primary fw-bold text-light mt-3 " style={{fontSize:"10px"}}>
Shop Now
</Link>
            
       
          </div>

          </div>

          <div className="topDeals m-auto d-lg-flex d-md-flex container justify-content-center align-content-center p-3 mt-5" style={{
      background:"rgb(192, 191, 191)"}} >



<div className="">
<img className="" height={220} src={appleGroup} alt="" />
</div>


<div className="mt-5 ms-2">


<h1 className="fw-bolder">We’re an Apple Authorized Service  <br /> Provider.</h1>
<p className="" style={{fontSize:"12px"}}>Our Apple-trained technicians use Apple-approved diagnostics and genuine parts on every repair.. </p>
<p style={{fontSize:"10px"}}>Terms, conditions and exclusions apply.</p>
<div className="text-start me-3"><Link className=" btn btn-primary fw-bold text-light mt-1 " style={{fontSize:"10px"}}>
Shop Now
</Link>
</div>



</div>
</div>

    </>
  );
}
