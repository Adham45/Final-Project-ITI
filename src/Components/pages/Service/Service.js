import React from 'react'
import Footer from "../Footer/Footer";
import PageTitle from "../../page_title"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css';
const Services = () => {
    return (
        <div >
            <PageTitle title="Service" description="Home / Service"/>
            <div className='container'>
                <div className='row '>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img
                            alt="img"
                            className='imgsize'
                            src='https://api.army.mil/e2/c/images/2021/02/18/f45b8688/original.jpg'
                            />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>

                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong>
                                        It is shown by default, until the collapse plugin adds the appropriate classes
                                        that we use to style each element. These classes control the overall appearance,
                                        as well as the showing and hiding via CSS transitions. You can modify any of
                                        this with custom CSS or overriding our default variables. It's also worth noting
                                        that just about any HTML can go within the
                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong>
                                        It is hidden by default, until the collapse plugin adds the appropriate classes
                                        that we use to style each element. These classes control the overall appearance,
                                        as well as the showing and hiding via CSS transitions. You can modify any of
                                        this with custom CSS or overriding our default variables. It's also worth noting
                                        that just about any HTML can go within the
                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong>
                                        It is hidden by default, until the collapse plugin adds the appropriate classes
                                        that we use to style each element. These classes control the overall appearance,
                                        as well as the showing and hiding via CSS transitions. You can modify any of
                                        this with custom CSS or overriding our default variables. It's also worth noting
                                        that just about any HTML can go within the
                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='con2 '>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-4  col-md-6 col-sm-12'>
                    <div className='inli'>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        alt=""
                                        src='https://misasmartlogistics.com/wp-content/uploads/brizy/11485/assets/images/iW=555&iH=303&oX=0&oY=0&cW=555&cH=303/Door-to-Door-Delivery-Service-V2.png'
                                        className='imgsize'/>
                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12'>

                    <div className='inli'>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        alt=""
                                        className='imgsize'
                                        src='https://cfcdn.streetfightmag.com/wp-content/uploads/Fotolia_55569182_S-e1429301151743-723x390.jpg'
                                       />

                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12'>

                    <div className='inli'>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        alt=""
                                        src='http://www.theborneopost.com/newsimages/2016/10/C_PC0017464.jpg'
                                        className='imgsize'/>

                                </div>
                                <div className="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>

            <Footer/>
        </div>
    )
}
export default Services;