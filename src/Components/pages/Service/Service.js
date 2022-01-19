import React from 'react'
import Footer from "../Footer/Footer";
import PageTitle from "../../page_title"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css';
const Services = () => {
  return (
    <div >
     <PageTitle title="Service" description="Home / Service" />
        <div className='container'>
        <div className='row '>
        <div className='col-lg-6' >
        <img alt="" src='https://api.army.mil/e2/c/images/2021/02/18/f45b8688/original.jpg' width={'500px'} />
        </div>
        <div className='col-lg-6' >
      
        <div class="card bg-light text-dark">
    <div class="card-body">Light card</div>
  </div>
  <br/>
  <div class="card bg-light text-dark">
    <div class="card-body">Light card</div>
  </div>
  <br/>
  <div class="card bg-light text-dark">
    <div class="card-body">Light card</div>
  </div>
  
          </div>
  
          </div>
        </div>

        <div className='con2'>
          
          <div className='mar'>
      <div className='inli'>
        <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <img alt="" src='https://misasmartlogistics.com/wp-content/uploads/brizy/11485/assets/images/iW=555&iH=303&oX=0&oY=0&cW=555&cH=303/Door-to-Door-Delivery-Service-V2.png' width={'330px'} height={'400px'} />
    </div>
    <div className="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
</div>

<div  className='inli'>
        <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <img alt="" src='https://cfcdn.streetfightmag.com/wp-content/uploads/Fotolia_55569182_S-e1429301151743-723x390.jpg' width={'330px'} height={'400px'} />

    </div>
    <div className="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
</div>

<div  className='inli'>
        <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <img alt="" src='http://www.theborneopost.com/newsimages/2016/10/C_PC0017464.jpg' width={'330px'} height={'400px'} />

    </div>
    <div className="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
</div>
</div>
        </div>

     <Footer />
    </div>
  )
}
export default Services;