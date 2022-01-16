import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <>
    <div className=" contact d-flex flex-wrap justify-content-evenly justify-content-center my-5 py-5"> 
    <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
    <h1 className="my-4 h2 animate__animated animate__zoomIn"><b>CONTACT US</b></h1>
    <h6 className="my-4">Home / contact</h6>
    </div> 
    </div>
    <Footer />
    </>
  )
}
export default Contact;