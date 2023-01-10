import {useState} from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { GiShoppingBag } from "react-icons/gi";
import { FaCarAlt, FaClipboard, FaShoppingBasket, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import { useContext } from 'react';
import { BestBuyContext } from '../../context/BestBuyContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';



export default function AdminDashboard() {

   const {users,getRecent,cart,myProducts}=useContext(BestBuyContext)
  const getRecentReverse=[...getRecent].reverse()
   const [isShown, setIshown] = useState(false);
   const [currentIndex, setCurrentIndex] = useState(false);

   const handlePopup =()=>{
    setIshown(current=>!current)
  }

  //  const getProduct=()=>{
  //   fetch(`http://159.65.21.42:9000/product/${currentId}`)
  //   .then(resp=>resp.json())
  //   .then((data)=>{
  //     // console.log(data);
  //     setProduct(data)
  //   })
  // }

  return (

    <>

{isShown&&(<div className="overlay container-fluid fixed-top " style={{fontFamily: "monospace"}}>
        <div className="bg-white popup    ">
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
          <div className="col-9  ">
            
                <img src={"http://159.65.21.42:9000"+getRecent[currentIndex].image} alt="" className='img-fluid' />
           <p>${getRecent[currentIndex].price}</p>
           <p>{getRecent[currentIndex].description}</p>
            </div>

          
            </div>
            </div>
      </div>
            
          )
}






<div className="row" style={{fontFamily: "monospace"}}>
<nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-dark  sidebar collapse"
          >
            <div className="position-sticky  pt-1">

            
              <ul className=" container-fluid  sidebar-dark " id="">
                <Link to="/home" className="sidebar-brand  text-decoration-none">
                  <div className="sidebar-brand-icon rotate-n-15 pt-1">
                    <svg
                      aria-label="BestBuy.com"
                      role="img"
                      className="block"
                      height="40"
                      width="68"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 160 92"
                    >
                      <path
                        d="M127.6 66.66h31.33v25.09h-31.34l-7.8-7.34V74.06l7.81-7.4z"
                        fill="#fff200"
                      ></path>
                      <path
                        d="M126.03 79.19c0 .86-.69 1.55-1.55 1.55-.86 0-1.55-.69-1.55-1.55 0-.86.69-1.55 1.55-1.55.85 0 1.55.7 1.55 1.55z"
                        fill="#1d252c"
                      ></path>
                      <path
                        d="M127.2 57.76c0-1.17.94-2.12 2.12-2.12 1.2 0 2.12.94 2.12 2.11 0 1.19-.93 2.11-2.12 2.11-1.17 0-2.12-.9-2.12-2.1zm3.96-.01c0-1.07-.78-1.85-1.84-1.85-1.05 0-1.83.79-1.83 1.86 0 1.08.81 1.84 1.83 1.84 1.04 0 1.84-.77 1.84-1.85zm-2.55-1.13h.71c.48 0 .79.21.79.64v.01c0 .33-.21.51-.51.57l.64.97h-.35l-.61-.92h-.33v.92h-.33l-.01-2.19zm.72 1.03c.31 0 .46-.12.46-.37v-.01c0-.28-.16-.37-.46-.37h-.38v.75h.38zM30.21 19.81l.61-.22c5.92-3.18 6.93-11.05 1.16-15.36-2.58-2.06-6.09-3.09-10.55-3.09H2.1v39.61h20.47c5.25 0 16.12-.98 16.12-11.33-.01-7.91-8.29-9.54-8.48-9.61zM14.9 10.42h4.72c1.74-.04 3.23 1.18 3.21 2.9.02 1.73-1.48 2.94-3.21 2.9H14.9v-5.8zm8.82 20.12c-.74.7-1.67 1.04-2.78 1.04H14.9v-7.11h6.03c3.28-.18 5.27 3.8 2.79 6.07zM40.39 63.65l.61-.22c5.92-3.18 6.93-11.05 1.16-15.36-2.58-2.06-6.1-3.09-10.55-3.09h-19.3v39.61h20.43c5.25 0 16.12-.98 16.12-11.33 0-7.91-8.28-9.53-8.47-9.61zm-15.27-9.39h4.68c1.74-.04 3.23 1.18 3.22 2.9.01 1.73-1.48 2.94-3.22 2.9h-4.68v-5.8zm8.78 20.13c-.74.7-1.67 1.04-2.78 1.04h-6v-7.11h6c3.27-.18 5.26 3.8 2.78 6.07zM71.48 31.13H52.33v-6.21h15.63v-9.06H52.33v-5.08h19.19V1.13h-32v39.61h31.96v-9.61zM104.23 1.13v9.64h10.47v29.97h12.73V10.77h10.47V1.13h-33.67z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M89.75 30.5c-2.8 2.33-8.08-.25-10.16-2.38l-7.56 7.18.48.48c6.71 6.62 20.86 8.59 27.98 2.21 5.84-4.61 6.03-14.52-.04-18.59-2.29-1.46-5.4-2.86-7.97-3.52-1.31-.3-2.64-.73-3.53-1.25-2.85-1.53-.43-4.43 2.13-4.16 2.59 0 4.17 1.16 4.99 2l7.58-7.2-.14-.16C97.4-.99 84.27-1.92 77.89 3.77c-2.9 2.51-4.35 5.47-4.35 8.85-.16 8.34 7.15 11.23 13.83 13.19 1.42.6 3.28.97 3.44 2.47-.01.87-.36 1.61-1.06 2.22zM71.52 68.52c-.19 6.29-9.33 6.29-9.52 0V44.99H49.18v22.93c-.03 9.76 8.2 17.54 17.92 17.12 9.46 0 17.12-7.66 17.12-17.12V45h-12.7v23.52zM106.13 58.47 97.73 45H84.89l14.83 25.47v14.14h12.81V70.46L127.36 45h-12.84l-8.39 13.47z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </div>
                </Link>

                  <Link to="/admin" className=" nav-link text-light fs-5 fw-bolder p-1 mt-2">
                  <span><MdOutlineDashboardCustomize /></span>  
                    <span>DASHBOARD</span>
                  </Link>
              

                  <Link to="/admin/user" className="nav-link text-light fs-5 fw-bolder  p-1 mt-lg-4">
                  <span> <HiUsers /></span> 
                    <span>USERS</span>
                  </Link>
               
                  <Link to="/admin/product" className="nav-link text-light fs-5 fw-bolder mt-lg-4  p-1">
                    <GiShoppingBag />
                    <span>PRODUCT</span>
                  </Link>
             

                {/* <li className="border-top p-3">
                  <Link to="/admin/user" className="nav-link text-light fs-4 p-3">
                    <span>Pages</span>
                  </Link>
                </li> */}

                {/* <li className=" border-top p-1">
                  <div
                    id="collapseUtilities"
                    className="collapse"
                    aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar"
                  >
                    <div className="bg-white py-2 collapse-inner rounded">
                      <h6 className="collapse-header">Custom Utilities:</h6>
                     <Link className="collapse-item" href="utilities-color.html">
                        Colors
                      </Link> 
                     <Link className="collapse-item" href="utilities-border.html">
                        Borders
                      </Link> 
                      <a
                        className="collapse-item"
                        href="utilities-animation.html"
                      >
                        Animations
                      </Link> 
                     <Link className="collapse-item" href="utilities-other.html">
                        Other
                      </Link> 
                    </div>
                  </div>
                </li> */}

                {/* <hr className="sidebar-divider" /> */}

                

                <hr className="sidebar-divider d-none d-md-block" />
                <div className="sidebar-heading ">Pages</div>
                <div className="text-center d-none d-md-inline">
                  <button
                    className="rounded-circle border-0"
                    id="sidebarToggle"
                  ></button>
                </div>
              </ul>
            </div>
          </nav>


          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 header bg-light g-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap  align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h3 className=""> DASHBOARD</h3>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2"></div>
              </div>





            </div>
           


            <div className="container overflow-hidden mt-5 text-black contentDisplay">
              <div className="   ">
                <div className="shadow-lg p-3 ms-auto">
                  
                  
                </div>
                
          
                <div className="row gy-2 gx-2 ms-auto"> 
                <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Products</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800" >{myProducts.length}</div>
                            </div>
                            <div className="col-auto">
                               <FaShoppingBasket/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Users</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800" >{users.length}</div>
                            </div>
                            <div className="col-auto">
                              <FaUser/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Cart
                                </div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800"></div>
                                    </div>
                                    <div className="col">
                                        {cart.length}
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                            <FaShoppingCart/>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                 </div>


                 <div className="row">


 



          
<div className="col-xl-8 col-lg-7">
    <div className="card shadow mb-4">
        {/* <!-- Card Header - Dropdown --> */}
        <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Recently added Products</h6>
            <div className="dropdown no-arrow">
               <Link className="dropdown-toggle"  role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </Link> 
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Dropdown Header:</div>
                   <Link className="dropdown-item" >Action</Link> 
                   <Link className="dropdown-item" >Another action</Link> 
                    <div className="dropdown-divider"></div>
                   <Link className="dropdown-item" >Something else here</Link> 
                </div>
            </div>
        </div>
        {/* <!-- Card Body --> */}
        <div className=" ">
            <div className=" recent row" style={{fontSize:"10px"}} >
           {getRecentReverse.map((recentData,index)=>(

<Link onClick={()=>{
  setCurrentIndex(index)
}}>
            <div className="col-10 fs-6 card-body min-vh-50 m-auto border rounded-4 shadow " key={recentData._id}>
            <div className="card" style={{width: "18rem"}}>
  <LazyLoadImage src={`http://159.65.21.42:9000${recentData.image}`} className="card-img-fluid" alt={recentData.name}/>
  <div className="card-body">
    <h5 className="card-title text-dark fw-bolder">{recentData.name}</h5>
    <p className="card-text fw-light">
    {recentData.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">${recentData.price}</li>
   
  </ul>
  <div className="card-body">
   <Link onClick={handlePopup}  className="card-link text-dark">View</Link>
   <Link  className="card-link">Another link</Link>
  </div>
</div>
                      </div>
                      </Link>
           )

           )}
            </div>
        </div>
    </div>
</div>

{/* <!-- Pie Chart --> */}
<div className="col-xl-4 col-lg-5">
    <div className="card shadow mb-4">
        {/* <!-- Card Header - Dropdown --> */}
        <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">counter</h6>
            <div className="dropdown no-arrow">
               <Link className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </Link> 
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Dropdown Header:</div>
                    <Link className="dropdown-item" href="#">Action</Link>
                    <Link className="dropdown-item" href="#">Another action</Link>
                    <div className="dropdown-divider"></div>
                   <Link className="dropdown-item" href="#">Something else here</Link> 
                </div>
            </div>
        </div>
        {/* <!-- Card Body -->
        <div className="card-body">
            <div className="chart-pie pt-4 pb-2">
                <canvas id="myPieChart"></canvas>
            </div>
            <!-- <div className="mt-4 text-center small">
                <span className="mr-2">
                    <i className="fas fa-circle text-primary"></i> Direct
                </span>
                <span className="mr-2">
                    <i className="fas fa-circle text-success"></i> Social
                </span>
                <span className="mr-2">
                    <i className="fas fa-circle text-info"></i> Referral
                </span>
            </div> --> */}
        </div>
    </div>
</div>

</div>
</div>
 </main>

          

        </div>
        
      

        
       

       
           
          



    
    


    
    
      
    </>
  
  )

}
