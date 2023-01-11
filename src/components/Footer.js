import React from 'react'
import { Link } from "react-router-dom";
import {ReactComponent as Icon1} from "../img/iconNav1.svg";
import {ReactComponent as Icon2}from "../img/iconNav2.svg";
import {ReactComponent as Icon3}from "../img/iconNav3.svg";
import {ReactComponent as Icon4} from "../img/iconNav4.svg";

import {ReactComponent as Facebook} from "../img/facebook.svg";
import {ReactComponent as Twitter}from "../img/twitter.svg";
import {ReactComponent as IG}from "../img/instagram.svg";
import {ReactComponent as Pintrest} from "../img/pintrest.svg";
import {ReactComponent as YT} from "../img/youTube.svg";
import {ReactComponent as Tag} from "../img/tag.svg";

export default function Footer() {
  return (
    <div>

<footer className='mt-5' style={{backgroundColor:"#c5cbd5"}}>
<div className="row m-auto text-center ">
    <div className="col-lg-3 col-md-6 col-sm-12  m-auto ">
    <div className="col-3"> <Icon1 /></div>

<Link className=''>Visit our Support Center</Link>
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12  m-auto">
    <div className="col-3"> <Icon2 /></div>

<Link className=''>Visit our Support Center</Link>
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12  m-auto">
    <div className="col-3"> <Icon3 /></div>

<Link className=''>Visit our Support Center</Link>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12  m-auto">
    <div className="col-3"> <Icon4 /></div>

<Link className=''>Visit our Support Center</Link>
    </div>
</div>








<div className="w-100 py-4 flex-shrink-0 mt-5 pt-5 container-fluid">

      <div className="container py-4 m-auto  border-top ">
      <div className="row gy-4 gx-5 mt-2">
          <div className="col-lg-3 col-md-12 col-sm-12   m-auto">

            <ul className="list-unstyled text-muted">
              <li className='fw-bolder text-dark'>Order & Purchases</li>
              <li> <Link>Check Order Status </Link></li>
              <li> <Link>Shipping, Delivery & Pickup </Link></li>
              <li> <Link>Returns & Exchanges </Link></li>
              <li> <Link>Price Match Guarantee </Link></li>
              <li> <Link>Product Recalls </Link></li>
              <li> <Link>Trade-In Program</Link></li>
              <li> <Link>Gift Cards </Link></li>
              <li className='fw-bolder text-dark mt-3 mb-3'> Payment Options</li>
              <li> </li>
              <li> <Link> My Best Buy® Credit Card</Link></li>
              <li> <Link>Pay Your Bill at Citibank</Link></li>
              <li> <Link>Lease to Own</Link></li>
            </ul>
          </div>

         













          <div className="col-lg-3 col-md-12 col-sm-12 m-auto">
          <ul className="list-unstyled text-muted">
              <li className='fw-bolder text-dark'> Support & Services</li>
              <li> <Link>Visit our Support Center </Link></li>
              <li> <Link>Shop with an Expert</Link></li>
              <li> <Link>Schedule a Service </Link></li>
              <li> <Link>Manage an Appointment </Link></li>
              <li> <Link>Protection & Support Plan </Link></li>
              <li> <Link>Haul Away & Recycling</Link></li>
              <li> <Link>Contact Us </Link></li>
              <li className='fw-bolder text-dark mt-3 mb-3'> Rewards & Membership</li>
              <li> </li>
              <li> <Link>Best Buy Totaltech</Link></li>
              <li> <Link>My Best Buy</Link></li>
              <li> <Link>View Points & Certificates</Link></li>
              <li> <Link>Member Offers</Link></li>
            </ul>
          </div>

          












          <div className="col-lg-3 col-md-12 col-sm-12 m-auto">
          <ul className="list-unstyled text-muted">
              <li className='fw-bolder text-dark'> Partnerships</li>
              <li> <Link>Affiliate Program</Link></li>
              <li> <Link>Advertise with Us</Link></li>
              <li> <Link>Developers</Link></li>
              <li> <Link>Best Buy Health </Link></li>
              <li> <Link>Best Buy Education </Link></li>
              <li> <Link>Best Buy Business</Link></li>
              <li> <Link>Contact Us </Link></li>
              <li className='fw-bolder text-dark mt-3 mb-3'> 
About Best Buy</li>
              <li> </li>
              <li> <Link>Corporate Information</Link></li>
              <li> <Link>Careers</Link></li>
              <li> <Link>Corporate Responsibility & Sustainability</Link></li>
              <li> <Link>Discover & Learn</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12  bg-white ">

<div className="">
<Link>Sign in or Create Account</Link>


<p className='fw-bolder'>Get the latest deals and more</p>
<div className='d-flex'>
<input type="text" className="form-control" placeholder='Enter email address' />
<Link className='btn btn-primary ms-3' style={{fontSize:"10px", backgroundColor:"blue"}}>Signup</Link>
</div>

</div>

<div className='border-top d-flex '> <div className='col-3 text-primary'> <Tag/></div>
<div> <h5 className='fw-bold'>Best Buy App</h5>
<Link>Learn more</Link></div>

</div>

<div className="row border-top pt-5 socails mb-sm-2">
    <div className="col">
        <Link> <Facebook /> </Link>
    </div> 

    <div className="col">
        <Link> <Twitter /> </Link>
    </div>

    <div className="col">
        <Link> <IG/> </Link>
    </div>

    <div className="col">
        <Link> <Pintrest/> </Link>
    </div>

    
    <div className="col">
        <Link> <YT/> </Link>
    </div>
</div>
</div>


        </div>
        </div>
        </div>

        <div>
<p className='container' style={{fontSize:"13px"}}>
            How was your experience? <Link style={{textDecoration:"underline"}}>Give feedback</Link></p>

</div>
            <p></p>
<div>
<div className="d-lg-flex d-md-block d-sm-block container links justify-content-evenly border-top pt-3">
<Link className='me-md-2 me-sm-2'> Accessibility</Link>
<Link > Terms & Conditions</Link>
<Link className='me-md-2 me-sm-2'> Privacy</Link>
<Link> Interest-Based Ads</Link>
<Link className='me-md-2 me-sm-2'> California Privacy Rights</Link>
<Link> Do Not Sell My Personal Information</Link>
<Link> 
California Supply Chain Transparency Act</Link>


</div>




            <p className='mt-2 container mb-2 fs-md-6 fs-sm-6 'style={{fontSize:"13px"}}>In-store pricing may vary. Prices and offers are subject to change. © 2023 centeDev Buy. All rights reserved. BEST BUY, the BEST BUY logo, the tag design, and MY BEST BUY are trademarks of Best Buy and its affiliated companies.</p>
        </div>
    </footer>
    </div>
  )
}
