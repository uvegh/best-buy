import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { GiShoppingBag } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useContext } from "react";
import { BestBuyContext } from "../../context/BestBuyContext";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function AdminProducts() {
  const [isShown, setIshown] = useState(false);
  const [imgIsShown, setimgIsShown] = useState(false);
  const [currentId, setCurrentId] = useState(1);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [validate, setValidate] = useState(false);
  const { products, getProducts,myProducts } = useContext(BestBuyContext);

 

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    image: "",
    description: "",
  });


  console.log(product);

 

  // console.log(product);

  const handlePopup = () => {
    setIshown((current) => !current);
  };

  const editProduct = (item) => {
    console.log(item);
    setProduct({
      name: products[item].name,
      category: products[item].category,
      price: products[item].price,
      quantity: products[item].quantity,
      image: "",
      description: products[item].description,
    });

    setIshown(true);
    setUpdateStatus(true);
    setCurrentId(products[item]._id);
  };

  const addProduct = () => {
    const formData = new FormData();
    if (
      product.name === "" ||  product.description === "" || product.price === "" ||  product.image === "" ||product.quantity==="" || product.quantity==="") {
      setValidate(true);
      return;
    } 
      console.log(currentId);

      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("image", product.image);
      formData.append("quantity", product.quantity);
      formData.append("price", product.price);
      formData.append("category", product.category);
console.log(formData);
      fetch("http://159.65.21.42:9000/create/product", {
        method: "post",
        // header: { "Content-Type": "application/json" },
        body: formData,
      }).then(resp => resp.json())
        .then((data) => {
          console.log(data);
          alert("item added");
        })
        .catch((err) => {
          console.log(err);
        });


      // setProduct({

      //     name: "",
      //     category: "",
      //     price: "",
      //     quantity: "",
      //     image: "",
      //     description: "",
      //   }
      // );
      setIshown(false);
      setCurrentId(null);
    
  };

  const updateProduct = () => {
    console.log(currentId);
    if (updateStatus === true) {
      fetch("http://159.65.21.42:9000/update/product/" + currentId, {
        method: "put",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
    }
    setProduct({
      name: "",
      category: "",
      price: "",
      quantity: "",
      image: "",
      description: "",
    });
    setIshown(false);
    setCurrentId(null);
  };

  const deleteProduct = (id) => {
    fetch("http://159.65.21.42:9000/product/" + id, {
      method: "delete",
    }).catch((err) => {
      alert("Failed to delete");
    });
    alert("item deleted");
    console.log("item deleted");
  };

  const handleImgPopup = () => {
    setimgIsShown((current) => !current);
  };

  useEffect(() => {
  
    getProducts();
  }, [myProducts]);

  return (
    <>
      <div className=" container-fluid" style={{fontFamily: "monospace"}}>
        {isShown && (
          <div className="overlay col-8 ms-auto   container-fluid fixed-top ">
            <div className=" popupProductAdd mt-6 pt-6">
              <div className=" border-bottom p-2 d-flex justify-content-between ">
                <Link className="fw-bold text-center text-decoration-none">
                  {" "}
                  Add item
                </Link>

                <Link
                  onClick={() => {
                    setIshown(false);
                  }}
                  className="ms-auto text-black fs-4 text-decoration-none"
                >
                  <FaTimes />{" "}
                </Link>
              </div>

              <form
               
                
                className="col-lg-8 m-auto rounded-3"
              >
                <div className="row gx-3 gy-3">
                  <div className="col-6 p-2">
                    <input style={{borderColor:validate===true&&!product.name?" rgba(187, 57, 57, 0.911)":"transparent"}}
                      onChange={(e) => {
                        setProduct({ ...product, name: e.target.value });
                      }}
                      value={product.name}
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Product name"
                      aria-label="First name"
                    />
                  </div>
                  {/* {validate===true&&!product.name?(<span className="text-danger"> add items's name</span>):null} */}

                  <div className="mb-3 col-3 p-2">
                    <input  style={{borderColor:validate===true&&!product.price?" rgba(187, 57, 57, 0.911);":"transparent"}}
                      type="number"
                      onChange={(e) => {
                        setProduct({ ...product, price: e.target.value });
                      }}
                      value={product.price}
                      className="form-control"
                      name="price"
                      placeholder="price"
                      aria-label="Dollar amount (with dot and two decimal places)"
                    />
                  </div>
                  {/* {validate===true&&!product.image?(<span className="text-danger"> add item's price</span>):null} */}

                  <div className="col-3 p-2">
                    <input  style={{borderColor:validate===true&&!product.quantity?" rgba(187, 57, 57, 0.911)":"transparent"}}
                      onChange={(e) => {
                        setProduct({ ...product, quantity: e.target.value });
                      }}
                      value={product.quantity}
                      type="number"
                      className="form-control p-2"
                      name="quantity"
                      placeholder="quantity"
                      aria-label="Last name"
                    />

                    {/* {validate===true&&!product.quantity?(<span className="text-danger"> add quantity available</span>):null} */}
                  </div>

                  <div className="col-6 p-2">
                    <input  style={{borderColor:validate===true&&!product.category?" rgba(187, 57, 57, 0.911);":"transparent"}}
                      className="form-control p-2"
                      name="category"
                      placeholder="Category"
                      onChange={(e) => {
                        setProduct({ category: e.target.value });
                      }}
                      value={product.category}
                    />

                    {/* {validate===true&&!product.category?(<span className="text-danger"> add item's category</span>):null}  */}
                  </div>

                  <div className="col-6 m-auto">
                    <div className="mb-3">
                      <label
                        htmlfor="exampleFormControlTextarea1"
                        className="form-label"
                      ></label>
                      <textarea  style={{borderColor:validate===true&&!product.description?" rgba(187, 57, 57, 0.911)":"transparent"}}
                        onChange={(e) => {
                          setProduct({
                            ...product,description: e.target.value,
                          });
                        }}
                        value={product.description}
                        className="form-control"
                        name="description"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="....About"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12 m-auto">
                    <div className="input-group mb-3">
                      <label
                        className="input-group-text"
                       htmlFor=""
                      >
                        Upload
                      </label>
                      <input  style={{borderColor:validate===true&&!product.image?" rgba(187, 57, 57, 0.911);":"transparent"}}
                        onChange={(e) => {
                          setProduct({ ...product, image: e.target.files[0] });
                        }}
                        // value={product.image.file}
                        type="file"
                        className="form-control p-3"
                        name="image"
                       
                      />
                      {/* {validate===true&&!product.image?(<span className="text-danger"> add item's image</span>):null} */}
                    </div>
                  </div>
                </div>

                <div className="text-center d-grid gap-2 d-md-block">
                  {updateStatus === true ? (
                    <button
                      type="button"
                      onClick={updateProduct}
                      className="btn btn-primary"
                    >
                      update
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={addProduct}
                      className="btn btn-primary btn-lg"
                    >
                      Submit
                    </button>


                  )}
                </div>
              </form>
            </div>
          </div>
        )}

        {/* imgPopup */}
        {/* {imgIsShown&&(<div className="overlay col-8 ms-auto   container-fluid sticky-top ">
        <div className="bg-white popup mt-1 ">
          <div className=" border-bottom p-2 d-flex justify-content-between ">
            <Link className="fw-bold text-center text-decoration-none">
            
            </Link>

            <Link onClick={()=>{
              setimgIsShown(false)
            }} className="ms-auto text-black fs-4 text-decoration-none" ><FaTimes /> </Link>
          </div>

          
            </div>


            <img src={` http://159.65.21.42:9000/${products[currentId].image}`} alt="" />
      </div>
            
          )
} */}

        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-dark  sidebar collapse"
          >
            <div className="position-sticky  pt-1">
              <ul className=" container-fluid  sidebar-dark " id="">
                <Link to="/" className="sidebar-brand  text-decoration-none">
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

                <Link
                  to="/admin"
                  className=" nav-link text-light fs-5 fw-bolder p-1 mt-2"
                >
                  <span className="fs-3">
                    <MdOutlineDashboardCustomize />
                  </span>
                  <span className="fs-3">DASHBOARD</span>
                </Link>

                <Link
                  to="/admin/user"
                  className="nav-link text-light fs-5 fw-bolder  p-1 mt-lg-4"
                >
                  <span className="fs-3">
                    {" "}
                    <HiUsers />
                  </span>
                  <span className="fs-3">USERS</span>
                </Link>

                <Link
                  to="/admin/product"
                  className="nav-link text-light fs-5 fw-bolder mt-lg-4  p-1"
                >
                  <GiShoppingBag />
                  <span className="fs-3">PRODUCT</span>
                </Link>
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 header bg-light g-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap  align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h3 className=""> PRODUCTS</h3>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2"></div>
              </div>
            </div>

            {/* <li className="">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
        aria-expanded="true" aria-controls="collapsePages">
        <i className="fas fa-fw fa-folder"></i>
        <span>Pages</span>
    </a>
    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="../studentLogin.html">Login</a>
            <a className="collapse-item" href="../register.html">Register</a>
            
            <div =className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item" href="../exam.html">Exam Demo</a>
            <a className="collapse-item" href="../ADMIN/index.html">Home Page</a>
        </div>
    </div>
</li> */}

            <div className="container-fluid overflow-hidden mt-5 text-black contentDisplay">
              <div className="p-2    ">
                <div className="shadow-lg p-3 mb-6">
                  <button
                    className="btn  btn-primary p-2"
                    onClick={handlePopup}
                  >
                    {" "}
                    <AiOutlinePlus />
                    <span className=" text-dark fw-bolder fs-5">
                      {" "}
                      Add New Product
                    </span>
                  </button>
                </div> <br /> <br />
                <div className="row gy-2 gx-4 mt-6 ">
                  {myProducts.length === 0 ? (
                    <div className="text-center min-vh-100 container-fluid"> <br /> <br /> <br /> <br />
                    <div class="lds-ripple m-auto">
                    
                    <div></div><div></div></div>
                    </div>
                  ) : (
                    myProducts.map((product, index) => (
                      <div
                        className="col-lg-4 col-md-6 col-sm-6 bg-light  border rounded-3 shadow"
                        key={product.id}
                      >
                        <Link
                          onClick={() => {
                            handleImgPopup();
                            // setCurrentId(product._id);
                          }}
                          className="text-decoration-none text-dark"
                        >
<h3 className="text-decoration-none text-dark border-bottom border-1">
                          {product.name}
                        </h3>

                          <LazyLoadImage
                            src={product.image}
                            className=""
                            width={250}
                            height={250}
                            alt=""
                            effect="blur"
                          />
                        </Link>

                        
                        <p className="text-dark prodDes">
                          <br /> {product.description}.
                        </p>
                        <br />

                        <p className="fw-bolder"><span className="fw-lighter">Price-</span> ${product.price}</p>
                        <br />


                        <div className="d-flex justify-content-between container-fluid sticky-bottom  bg-secondary p-2" >
                          <button
                            className="btn btn-lg  btn-danger fs-3 fw-bolder border-0 text-dark"
                            style={{ background: "#104d55" }}
                            onClick={() => {
                              editProduct(index);
                            }}
                          >
                            <AiOutlineEdit />
                          </button>{" "}
                          <Link
                            className="btn btn-lg  btn-danger fs-3 fw-bolder border-0 text-darkr"
                            style={{ background: "rgba(211, 56, 56, 0.568)" }}
                            onClick={() => {
                              deleteProduct(product._id);
                            }}
                          >
                            <AiOutlineDelete />
                          </Link>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Outlet />
    </>
  );
}
