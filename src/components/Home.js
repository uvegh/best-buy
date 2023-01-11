import React, { useRef } from "react";
import { Link } from "react-router-dom";
import laptop1 from "../img/laptop1.jpg";
import laptop2 from "../img/laptop2.jpg";
import tv1 from "../img/tv1.jpg";
import cellphones from "../img/cellphones.jpg";
import fridge from "../img/fridge1.jpg";
import gamePad from "../img/gamePadGreen.jpg";
import clearance from "../img/clearance.png";
import blueTv from "../img/blueTv.jpg";
import ad1 from "../img/ad1.jpg";
import ad2 from "../img/ad2.jpg";
import ad3 from "../img/ad3.png";
import gifts from "../img/lastMinuteGifts.jpg";
import forYou1 from "../img/forYou1.jpg";
import forYou2 from "../img/forYou2.jpg";
import forYou3 from "../img/forYou3.jpg";
import forYou4 from "../img/forYou4.jpg";
import forYou5 from "../img/forYou5.jpg";
import forYou6 from "../img/forYou6.jpg";
import featured1 from "../img/featured1.jpg";
import featured2 from "../img/featured2.jpg";
import featured3 from "../img/featured3.jpg";
import giftIdeas1 from "../img/giftIdeas1.jpg";
import giftIdeas2 from "../img/giftIdeas2.jpg";
import giftIdeas3 from "../img/giftIdeas3.jpg";
import giftIdeas4 from "../img/giftIdeas4.jpg";
import giftsUnder1 from "../img/giftsUnder1.jpg";
import giftsUnder2 from "../img/giftsUnder2.png";
import giftsUnder3 from "../img/giftsUnder3.jpg";
import giftsUnder4 from "../img/giftsUnder4.jpg";
import delivery1 from "../img/delivery1.png";
import delivery2 from "../img/delivery2.png";
import clearanceBox from "../img/clearanceOpenBox.jpg";
import vpeCard from "../img/vpeCard.png";
import { IoIosStar } from "react-icons/io";

export default function Home() {
const ref = useRef(null)



  return (
    <>
      <div className="homeBg">
        <div className="container  ">
          <div className="row text-center col-10 m-auto">
            <div className="col m-auto">
              <p className=" text-white " style={{ fontSize: "72px" }}>
                {" "}
                Great Deals.
              </p>
              <h1 className="fY "> All in one place.</h1>
            </div>

            <div className="col ">
              <p className="fw-bolder text-white fs-5 mt-5">
                Find new deals all season long.
              </p>
              <Link
                className="text-decoration-none text-white mt-1 text-start"
                style={{ fontSize: "10px" }}
              >
                Limited quantities. No rainchecks. See
                <span style={{ color: "yellow" }}> Holiday FAQs</span>
              </Link>{" "}
              <br /> <br />
              <Link to="/shop"
              
                className="rounded text-decoration-none p-2 text-black fw-bolder "
                style={{ backgroundColor: "yellow" }}
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>

        <div className="container imgContainer  mt-5">
          <div className="container">
            <p className="text-white text-start">Shop deals by category</p>
            <div className="row rows-col-6">
              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                <Link to="/shop">
                    <img src={laptop1} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  {" "}
                  Laptops and computers
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                <Link to="/shop">
                    <img src={laptop2} alt="" />
                    </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  TVS & Projectors
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={tv1} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Apple
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={fridge} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Video Games, Consoles & VR
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={gamePad} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Cell Phones
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={cellphones} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Major Appliances
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={laptop1} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Headphones
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={laptop2} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  PC Gaming
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={tv1} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Tablets & E-Readers
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={fridge} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Cameras, Camcorders & Drones
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={gamePad} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Sound Bars, Speakers & Streaming Devices
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={cellphones} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Wearable Technology
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={laptop1} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Small Appliances, Floor Care & Home Air Quality
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={laptop2} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Printers, Home Office & Computer Accessories
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={tv1} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Smart Home, Security & Wi-Fi
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={fridge} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Toys, Games, Collectibles & Movies
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={gamePad} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Electric Transportation
                </Link>
              </div>

              <div className="col  ">
                <div className=" imgCol bg-white p-3">
                  <Link>
                    <img src={cellphones} alt="" />
                  </Link>
                </div>
                <Link to="/shop" className="yellowLink">
                  Health, Fitness & Personal Care
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="youViewed"></div>

      <div className="container-fluid m-auto mt-5 dealsContainer">
        <div className="row  ">
          <div className="col-lg-5 col-md-12 col-sm-12 colCont rounded-2 border-1 m-auto p-4">
            <div className="d-flex mt-5 m-auto">
              <img src={clearance} alt="" width={140} />
              <div className="ms-4">
                <p className="d-inline-block">
                  Save when you shop the Best Buy Outlet for clearance,
                  open-box, refurbished and pre-owned items.
                </p>
                <Link to="/shop" className="btn btn-outline-primary">
                  View Outlet Deals
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12 colCont rounded-2 border-1 m-auto p-4">
            <div className="d-flex mt-5 m-auto">
              <img src={blueTv} alt="" width={140} />
              <div className="ms-4">
                <Link className="d-inline-block text-decoration-none">
                  Samsung - 43" Class TU690T Series LED 4K UHD Smart Tizen TV
                </Link>
                <p className="fw-bolder">$249</p>
                <Link to="/shop" className="btn btn-outline-primary">
                  Shop all Top Deals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cbBanner m-auto mt-5">
        <div className=" d-sm-flex d-sm-block container  justify-content-around">
          <div>
            {" "}
            <p className="fw-bolder text-white fs-5 container-fluid">
              {" "}
              Totaltech <br />
              Make holiday shopping a breeze{" "}
              <span> with Best Buy Totaltech™. </span>{" "}
            </p>
            <p className="text-white" style={{ fontSize: "12px" }}>
              Totaltech members enjoy exclusive access to great deals all
              holiday season long. They also get free shipping, free <br />
              standard installation, product protection, 24/7 tech support and
              so much more.
            </p>
          </div>

          <div className="mt-3 container-fluid">
            <Link
              className="m-auto text-decoration-none text-black fw-bold p-2 rounded "
              style={{ backgroundColor: "yellow" }}
            >
              Learn More
            </Link>
            <p className="text-white mt-3" style={{ fontWeight: "8px" }}>
              Exclusion terms and conditions apply
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col">
            <img src={ad1} alt="" className="img-fluid" />
          </div>

          <div className="col">
            <img src={ad2} alt="" className="img-fluid" />
          </div>

          <div className="col">
            <img src={ad3} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="border-bottom border-2 p-2">
        <p className="fw-bolder">Our featured offers</p>
      </div>

      <div className="container-fluid container-sm-fluid mt-3 featured ">
        <div className="row ">
          <div className="col">
            <Link>
              <img src={featured1} alt="" className="img-fluid" />
            </Link>
            <Link>
              Save up to $400 on select laptops powered by Intel® Core™
              processors.
            </Link>
            <p>Minimum savings is $30.</p>
          </div>

          <div className="col border-start">
            <Link className="">
              <img src={featured2} alt="" className="img-fluid" />
            </Link>
            <Link>Apple Shopping Event.</Link>
            <p className="">
              Save up to $200 on select MacBook models, plus more great deals.
            </p>

            <p>Minimum savings is $30.</p>
          </div>

          <div className="col border-start">
            <Link className="">
              <img src={featured3} alt="" className="img-fluid" />
            </Link>
            <Link className="">
              Save up to 25% on select JBL car audio products.
            </Link>

            <p className="mt-3">Minimum savings is $30.</p>
          </div>
        </div>
      </div>

      <div className="cbBanner p-3 m-auto d-flex justify-content-evenly ">
        <div className="">
          <h1 className="text-white">Get gifts fast — as soon as today.</h1>
        </div>

        <div>
          <Link to="/shop"
            className="btn border-primary btn-outline-primary bg-white fw-bold pe-4 ps-4"
            style={{ fontSize: "15px" }}
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="delivery container">
        <div className="row">
          <div className="col-lg-4 col-md-8 d-flex">
            <img src={delivery2} className="" alt="" width={80} height={80} />
            <Link>
              <p className="fw-bolder fs-3 text-decoration-none">
                {" "}
                Ready in one hour
              </p>{" "}
              <br />
              <p className="text-primary" style={{ fontSize: "14px" }}>
                with store or curbside pick up
              </p>
            </Link>
          </div>

          <div className="col-lg-4 col-md-8 d-flex">
            <img src={delivery2} className="" alt="" width={80} height={80} />
            <Link>
              <p className="fw-bolder fs-3 text-decoration-none">
                {" "}
                Ready in one hour
              </p>{" "}
              <br />
              <p className="text-primary" style={{ fontSize: "14px" }}>
                with store or curbside pick up
              </p>
            </Link>
          </div>

          <div className="col d-flex">
            <img
              src={delivery2}
              className="img-fluid"
              alt=""
              width={80}
              height={80}
            />
            <Link>
              <p className="fw-bolder fs-3 text-decoration-none">
                {" "}
                Ready in one hour
              </p>{" "}
              <br />
              <p className="text-primary mt-" style={{ fontSize: "14px" }}>
                with store or curbside pick up
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-bottom border-2 p-2">
        <p className="fw-bolder">You may also like</p>
      </div>

      <div className="container-fluid mt-3 mayLike ">
        <div className="row ">
          <div className=" col-lg-4 col-md-5 ">
            <Link>
              <img src={laptop1} alt="" className="img-fluid" />
            </Link>
            <Link>
              HP - Spectre 2-in-1 16" 3K+ Touch-Screen Laptop - Intel Evo
              platform Core i7 - 16GB Memory
            </Link>
            <p className="fw-bolder">$1,444.4</p>
            <p style={{ color: "yellow" }}>
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </p>
            <p className="fw-bold">$849.99</p>
          </div>

          <div className="col col-lg-4 col-md-5">
            <Link>
              <img src={laptop1} alt="" className="img-fluid" />
            </Link>
            <Link>
              HP - ENVY x360 2-in-1 15.6" Touch-Screen Laptop - Intel Evo
              Platform Intel Core i7 - 16GB
            </Link>
            <p className="fw-bolder">$1,444.4</p>
            <p style={{ color: "yellow" }}>
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </p>
            <p className="fw-bold">$849.99</p>
          </div>

          <div className=" col-lg-4 col-md-5">
            <Link>
              <img src={laptop1} alt="" className="img-fluid" />
            </Link>
            <Link>
              Dell - Inspiron 2-in-1 14” FHD+ Touch Laptop – 12th Gen Intel Core
              i7 – 16GB Memory – 512GB
            </Link>
            <p className="fw-bolder">$1,444.4</p>
            <p style={{ color: "yellow" }}>
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </p>
            <p className="fw-bold">$849.99</p>
          </div>

          <div className=" col-lg-4 col-md-5">
            <Link>
              <img src={laptop1} alt="" className="img-fluid" />
            </Link>
            <Link>
              Lenovo - Yoga 9i 14" 4K OLED Touch 2-in-1 Laptop with Pen - Intel
              Evo Platform - Core i7-1260P
            </Link>
            <p className="fw-bolder">$1,444.4</p>
            <p style={{ color: "yellow" }}>
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </p>
            <p className="fw-bold">$849.99</p>
          </div>

          <div className=" col-lg-4 col-md-5">
            <Link>
              <img src={laptop1} alt="" className="img-fluid" />
            </Link>
            <Link>
              HP - Spectre 2-in-1 16" 3K+ Touch-Screen Laptop - Intel Evo
              platform Core i7 - 16GB Memory
            </Link>
            <p className="fw-bolder">$1,444.4</p>
            <p style={{ color: "yellow" }}>
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </p>
            <p className="fw-bold">$849.99</p>
          </div>

          <div className=" col-lg-4 col-md-5">
            <Link>
              <img src={laptop1} alt="" className="img-fluid" />
            </Link>
            <Link>
              HP - Spectre 2-in-1 16" 3K+ Touch-Screen Laptop - Intel Evo
              platform Core i7 - 16GB Memory
            </Link>
            <p className="fw-bolder">$1,444.4</p>
            <p style={{ color: "yellow" }}>
              <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
              <IoIosStar />
            </p>
            <p className="fw-bold">$849.99</p>
          </div>
        </div>
      </div>

      <div className="container-fluid imgSlider d-none d-lg-block ">
        <div className="lastMinuteGifts position-relative ">
          <img src={gifts} className="position-relative" />
          <div className="position-absolute  textOverlay">
            <p className="fw-bolder fs-3"> Samsung last-minute gifts.</p>
            <p className="fw-lighter">Life opens up with Galaxy.</p>
            <Link> Shop more Samsung products</Link>
          </div>

          <div className="justify-content-evenly d-flex gifts overflow-scroll" >
            <div className="col ">
              <img src={laptop1} className="" />
              <Link>
                Samsung - T350 Series 27" IPS LED FHD, AMD FreeSync, VESA, HDMI
                -
              </Link>
            </div>

            <div className="col">
              <img src={laptop2} />
              <Link>
                Samsung - T350 Series 27" IPS LED FHD, AMD FreeSync, VESA, HDMI
                -
              </Link>
            </div>

            <div className="col">
              <img src={featured1} />

              <Link>
                Samsung - T350 Series 27" IPS LED FHD, AMD FreeSync, VESA, HDMI
                -
              </Link>
            </div>

            <div className="col">
              <img src={featured1} />
              <Link>
                Samsung - T350 Series 27" IPS LED FHD, AMD FreeSync, VESA, HDMI
                -
              </Link>
            </div>

            <div className="col">
              <img src={featured2} />
              <Link>
                Samsung - T350 Series 27" IPS LED FHD, AMD FreeSync, VESA, HDMI
                -
              </Link>
            </div>

            <div className="col">
              <img src={fridge} />
              <Link>
                Samsung - T350 Series 27" IPS LED FHD, AMD FreeSync, VESA, HDMI
                -
              </Link>
            </div>

            <div className="col">
              <img src={featured1} />
              <Link>
                Samsung - T350 Series 27" IPS LED FHD, AMD FreeSync, VESA, HDMI
                -
              </Link>
            </div>

            <div className="col">
              <img src={featured2} />
              <Link>
                Samsung - T350 Series 27" IPS LED FHD, AMD FreeSync, VESA, HDMI
                -
              </Link>
            </div>

            <div className="col">
              <img src={fridge} />
              <Link>
                Samsung - T350 Series 27" IPS LED FHD, AMD FreeSync, VESA, HDMI
                -
              </Link>
            </div>
          </div>
          <Link className="position-fixed" >

          <div className="ms-auto  fs-1 fw-lighter scrollRight" > <svg aria-hidden="true" role="img" viewBox="0 0 100 100" width="25" height="25" fill="#0046be"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M11.38 29.32a.98.98 0 0 1-.78-1.57L19.46 16 10.6 4.25a.98.98 0 0 1 1.57-1.17l9.3 12.33c.26.35.26.83 0 1.18l-9.3 12.34a.98.98 0 0 1-.79.39"></path></svg></svg></div>
          </Link>
         
        </div>
      </div>

      <div className="forYou  p-4 container-fluid p-5 mt-5 m-auto">
        <div className="row container  m-auto g-md-2  g-sm-2">
          <div className="col-lg-2 col-md-6 col-sm-6">
            <Link>
              <img src={forYou1} alt="" className="img-fluid" />
            </Link>
            <br />
            <Link>Google - Pixel 6a 128GB (Unlocked) - Charcoal</Link>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <Link>
              <img src={forYou2} alt="" className="img-fluid" />
            </Link>{" "}
            <br />
            <Link>Google - Nest Cam (Wired) - Snow</Link>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <Link>
              <img src={forYou3} alt="" className="img-fluid" />
            </Link>{" "}
            <br />
            <Link>Google - Nest Doorbell Battery - Snow</Link>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <Link>
              <img src={forYou4} alt="" className="img-fluid" />
            </Link>{" "}
            <br />
            <Link>Google - Nest Cam with Floodlight - Snow</Link>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <Link>
              <img src={forYou5} alt="" className="img-fluid" />
            </Link>{" "}
            <br />
            <Link>Google - Nest Audio - Smart Speaker - Chalk</Link>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <Link>
              <img src={forYou6} alt="" className="img-fluid" />
            </Link>{" "}
            <br />
            <Link>Google - Nest Audio - Smart Speaker - Chalk</Link>
          </div>
        </div>
      </div>
      <div className="container-fluid row rows-col-3 giftIdeas mt-5 gx-1 m-auto mt-5" >
        <div className="col-lg-3 col-md-12 col-sm-10 row bg-light  g-4 m-auto">
          <h4 className="fw-bolder">Gifts ideas for everyone</h4>
          <div className="col-6">
            <img src={giftIdeas1} alt="" />
          </div>

          <div className="col-6">
            <img src={giftIdeas2} alt="" />
          </div>

          <div className="col-6">
            <img src={giftIdeas3} alt="" />
          </div>

          <div className="col-6">
            <img src={giftIdeas4} alt="" />
          </div>
        </div>

        <div className="col-lg-3 col-md-12 col-sm-10 row bg-light  g-4 m-auto">
          <h4 className="fw-bolder">Gift Ideas by price</h4>
          <div className="col-6">
            <img src={giftsUnder1} alt="" />
          </div>

          <div className="col-6">
            <img src={giftsUnder2} alt="" />
          </div>

          <div className="col-6">
            <img src={giftsUnder3} alt="" />
          </div>

          <div className="col-6">
            <img src={giftsUnder4} alt="" />
          </div>
        </div>

        <div className="col-lg-3 col-md-12 col-sm-10  row bg-light  g-4 m-auto">
          <h4 className="fw-bolder">Last-minute gifts</h4>
          <div className="col-6">
            <img src={giftIdeas1} alt="" />
          </div>

          <div className="col-6">
            <img src={giftIdeas2} alt="" />
          </div>

          <div className="col-6">
            <img src={giftIdeas3} alt="" />
          </div>

          <div className="col-6">
            <img src={gamePad} alt="" />
          </div>
        </div>
      </div>

      <div className="container-lg-fluid  mt-5" style={{width:"96%"}}>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
          <img src={ad3} alt="" className="img-fluid" />
        
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <img src={ad2} alt="" className="img-fluid" />
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 border border-primary">
          <img src={clearanceBox} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="cbBanner m-auto  ">
      <div className="m-auto d-sm-flex d-md-block d-lg-flex justify-content-center" style={{width:"80%"}}>
        <div className=" container mt-5"> 
        <div className="d-flex  justify-content-center  ">
        <div className="mt-sm-6">
          <img src={vpeCard} alt="" width={120} />
          </div>
          <div>
          <p className="fw-bolder text-white">Apply today and get</p> 
          <h1 className=" fw-bolder" style={{color:"yellow"}}> 10% back</h1>
<p className="text-white"> in rewards on your first day of <br /> purchases when you are approved <br /> for the My Best Buy®  <br />
Credit Card. </p>
</div>
</div>
        </div>

<div className=" d-flex justify-content-center container mt-5">
        <div>
        <p className="fw-bolder text-white">Limited time</p> 
          <h1 className=" fw-bolder" style={{color:"yellow"}}> 18 month financing</h1>
<p className="text-white"> on storewide purchases $499 and up. <br />

Offer ends 12/25/22. </p>
</div>
<div className="mt-5">
          <Link
            className="btn border-primary btn-outline-primary bg-white fw-bold pe-2 ps-2"
            style={{ fontSize: "15px" }}
          >
            Learn more
          </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
