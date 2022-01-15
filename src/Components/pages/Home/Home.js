import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MdOutlineRecycling ,MdOutlineBusAlert} from 'react-icons/md';
import {RiExchangeDollarLine , RiPlantLine} from 'react-icons/ri';
import Icons from "../Home/icons";
import Progress from "../Home/progress";
import { LinearProgress } from "@material-ui/core";
import "./Home.css";
import lamp from "../Home/lamp.PNG";
import plant from '../Home/plant.png'
import recycling from '../Home/recycling.png'
import electricity from "../Home/electricity.png"
import power from "../Home/power.png"
import watering from '../Home/watering.png'
const Home = () => {
  return (
      <>
      <div className="carousel">
        <div id="carouselExampleCaptions" className="carousel slide cus-carousel-height" data-bs-interval="false">
            <div className="carousel-indicators cus-postion">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="cus-shape active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="cus-shape" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="cus-shape" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className="cus-shape" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner cus-full-height">
                <div className="carousel-item zero-slide active cus-full-height">
    
                <div className="cus-overlay">
                        <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                            <h1 className="my-4 h2 animate__animated animate__zoomIn">WELCOME TO THE WORLD</h1>
                            <p className="mb-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, maiores amet quasi sunt dignissimos totam!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item first-slide cus-full-height">
                    <div className="cus-overlay">
                        <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                            <h1 className="my-4 h2 animate__animated animate__zoomIn">WELCOME TO THE WORLD</h1>
                            <p className="mb-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, maiores amet quasi sunt dignissimos totam!
                            </p>
                            <div className="my-4 cus-bottons animate__animated animate__fadeInUpBig">
                                <button type="button" className="btn btn-success btn-lg rounded-pill mx-2 cus-befor">Get Start Now</button>
                                <button type="button" className="btn btn-outline-light btn-lg rounded-pill m-2 cus-befor">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item second-slide cus-full-height">
                    <div className="cus-overlay">
                        <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                            <h1 className="my-4 h2 animate__animated animate__zoomIn">What Do You Do Today For Peaples 2</h1>
                            <p className="mb-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, maiores amet quasi sunt dignissimos totam!
                            </p>
                            <div className="cus-bottons my-4 animate__animated animate__fadeInUpBig">
                                <button type="button" className="btn btn-success btn-lg rounded-pill mx-2 cus-befor">Get Start Now</button>
                                <button type="button" className="btn btn-outline-light btn-lg rounded-pill m-2 cus-befor">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item third-slide cus-full-height">
                    <div className="cus-overlay">
                        <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                            <h1 className="my-4 h2 animate__animated animate__zoomIn">What Do You Do Today For Peaples 1</h1>
                            <p className="my-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, maiores amet quasi sunt dignissimos totam!
                            </p>
                            <div className="my-4 cus-bottons animate__animated animate__fadeInUpBig">
                                <button type="button" className="btn btn-success btn-lg rounded-pill mx-2 cus-befor">Get Start Now</button>
                                <button type="button" className="btn btn-outline-light btn-lg rounded-pill m-2 cus-befor">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><br></br>
    <Container>
       <h2 className='green' >2000+Volunter</h2>
       <h1 id='headers' >People working with us since 1987!!</h1>
       <p className='size'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam</p>
    </Container>
    <div className='cont'>
     <Row>
      <Col>
        <div>
            <p className='ubuntu'>our mission</p>
            <h4 className='h4' >We've <span className='green'> large volunteer</span> community to set environment  </h4><br></br>
         </div>
        <div>
            <Row >
                 <Col xs={2} >
                    <img src={plant} alt="Plant!" width="30" height="30"/>

                 </Col>
            <Col><h5 className='ubuntu' >Recycling Rubbish</h5>
                 <p className='ubuntu' >Lorem ipsum dolor sit amet</p>
            </Col>
            </Row>
         </div>
        <div>
            <Row>
                <Col xs={2} >
                    <img src={recycling} alt="Plant!" width="40" height="40"/>

                </Col>
                <Col><h5 className='ubuntu' >Plant Ecology</h5>
                     <p className='ubuntu' >Lorem ipsum dolor sit amet</p>
                </Col>
            </Row>
        </div>
        <div>
            <Row>
                <Col xs={2}>
                    <img src={watering} alt="Plant!" width="40" height="40"/>
                </Col>
                <Col><h5 className='ubuntu'>Recycling Rubbish</h5>
                    <p className='ubuntu' >Lorem ipsum dolor sit amet</p>
                </Col>
            </Row>
        </div>
                </Col>
        <Col>
                <img src={lamp} alt="Tree inside lamp!" width="200" height="300"/>
        </Col>
        </Row>
        </div><br></br>
        <section id="homeCard">
            <div className='container py-5'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card border text-center pb-1">
                            <div className='bg-white pt-4 pb-3 buttom-rounded'> 
                               <img src= {electricity} className="card-img-top" alt="..." />
                               <h4 className='my-3'>Recycling</h4>
                            </div>
                            <div className="card-body text-white small py-3 ">
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <a href='#' className='btn py-1 rounded-pill border-white fw-bold border-2'><small>READ MORE</small></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border text-center pb-1">
                            <div className='bg-white pt-4 pb-3 buttom-rounded'> 
                               <img src={power} className="card-img-top" alt="..." />
                               <h4 className='my-3'>Water Refine</h4>
                            </div>
                            <div className="card-body text-white small py-3 ">
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <a href='#' className='btn py-1 rounded-pill border-white fw-bold border-2'><small>READ MORE</small></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border text-center pb-1">
                            <div className='bg-white pt-4 pb-3 buttom-rounded'> 
                               <img src={electricity} className="card-img-top" alt="..." />
                               <h4 className='my-3'>Eco System</h4>
                            </div>
                            <div className="card-body text-white small py-3 ">
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <a href='#' className='btn py-1 rounded-pill border-white fw-bold border-2'><small>READ MORE</small></a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border text-center pb-1">
                            <div className='bg-white pt-4 pb-3 buttom-rounded'> 
                               <img src={power} className="card-img-top" alt="..." />
                               <h4 className='my-3'>Soler System</h4>
                            </div>
                            <div className="card-body text-white small py-3 ">
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <a href='#' className='btn py-1 rounded-pill border-white fw-bold border-2'><small>READ MORE</small></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section><br></br>
        <div className=" icons d-flex flex-wrap justify-content-evenly justify-content-center my-5 py-5">      
            <Icons icon={<MdOutlineRecycling />} value={"recycling"}  />
            <Icons icon={<RiPlantLine />} value={"Plant a tree"}  />
            <Icons icon={<MdOutlineBusAlert />} value={"Connecting"}  />
            <Icons icon={<RiExchangeDollarLine />} value={"Get Money"}  />    
        </div>
        <section id="reat_section" className=" mt-5 p-3 fs-sm-6 fs-md-1">
            <table className="table table-borderless text-center" >
                <thead className="" >
                    <tr className=" row align-items-center">
                        <th className="col-3 d-none d-sm-block ">material</th>
                        <th className="col-4 col-sm-3">annual <br/> production</th>
                        <th className="col-4 col-sm-3">Annual <br/> consumption</th>
                        <th className="col-4 col-sm-3">recycling</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=" row justify-content-between align-items-centermt-md-2">
                        <td className="col-12 col-sm-3 mb-3 mb-sm-0">plastic</td>
                        <td className="col-4 col-sm-3"><Progress value={50}/> <span>50%</span></td>
                        <td className="col-4 col-sm-3"><Progress value={80}/><span>80%</span></td>
                        <td className="col-4 col-sm-3"><Progress value={93}/><span>93%</span></td>
                    </tr>
                    <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
                        <td className="col-12 col-sm-3 mb-3 mb-sm-0">Cardboard and papers</td>
                        <td className="col-4 col-sm-3"><Progress value={45} /><span>45%</span></td>
                        <td className="col-4 col-sm-3"><Progress value={30}/><span>30%</span></td>
                        <td className="col-4 col-sm-3"><Progress value={80}/><span>80%</span></td>
                    </tr>
                    <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
                        <td className="col-12 col-sm-3 mb-3 mb-sm-0">Aluminum</td>
                        <td className="col-4 col-sm-3"><Progress value={70}/><span>70%</span></td>
                        <td className="col-4 col-sm-3"><Progress value={80}/><span>80%</span></td>
                        <td className="col-4 col-sm-3"><Progress value={90}/><span>90%</span></td>
                    </tr>
             
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4} className="ssss">
                            <h6>environmental conservation rate</h6>
                            <LinearProgress className="env_rate" variant="determinate" value={80} />
                        </td>
                    </tr>
                </tfoot>
            </table>
        </section>
        <footer>
            <div className="top-footer py-3">
                <div className="container d-flex flex-wrap align-items-center justify-content-between">
                    <div>
                        <h2 className='my-2'>
                            <span className="text-green">Stay in touch </span> 
                            & sign up for new sletter
                        </h2>
                    </div>
                    <div className="input-group my-2">
                        <input type="text" className="form-control" placeholder="Enter your name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span className="input-group-text" id="basic-addon2"><i className="fab fa-telegram-plane"></i></span>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <div className="container d-flex flex-wrap align-items-start justify-content-between">
                    <div className='my-4'>
                        <div className='mb-4'>
                            <h2 className='mb-0'>
                                Envi<span className='text-green'>ro</span> 
                            </h2>
                            <small className='text-gray'>Nature & ECO Tempelate</small>
                        </div>
                        <p className='text-gray small'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
                            Rerum iure beatae tenetur repudiandae asperiores non <br/>
                            ducimus libero minus fuga fugit, illum.
                        </p>
                        <div className='scial-icons text-gray'>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>   
                            <a href="#"><i className="fab fa-pinterest"></i></a>  
                            <a href="#"><i className="fab fa-twitter"></i></a>  
                            <a href="#"><i className="fab fa-vimeo-v"></i></a>  
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>  
                        </div>
                    </div>
                    <div className='my-4 quick-links'>
                        <h3 className='mb-4'>Quick Links</h3>
                        <ul className='text-gray'>
                            <li>
                                <i className="fas fa-chevron-right"></i> <a href='#'>About Us</a>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <a href='#'>Recent Projects</a>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <a href='#'>Our Mission</a>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <a href='#'>FAQ's</a>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right"></i> <a href='#'>Privcy & Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className='my-4 latest-news'>
                        <h3 className='mb-4'>Latest News</h3>
                        <div>
                            <div className="card border-0 mb-3" style={{maxWidth:"250px"}}>
                                <div className="row g-0">
                                    <div className="col-5">
                                        <img src="http://placekitten.com/400/300" className="h-100 img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-7">
                                    <div className="card-body py-0 pe-0">
                                        <h6 className="card-title text-gray">How can be successfull in market place</h6>
                                        <p className="card-text"><small className="text-muted">13 Feb, 2016</small></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 mb-3" style={{maxWidth:"250px"}}>
                                <div className="row g-0">
                                    <div className="col-5">
                                        <img src="http://placekitten.com/400/300" className="h-100 img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-7">
                                    <div className="card-body py-0 pe-0">
                                        <h6 className="card-title text-gray">How can be successfull in market place</h6>
                                        <p className="card-text"><small className="text-muted">13 Feb, 2016</small></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-4 our-address'>
                        <h3 className='mb-4'>
                            Our Address
                        </h3>
                        <ul className='small text-gray'>
                            <li className='mb-3'>
                                <i className="fas fa-map-marker-alt"></i><p className='m-0'>60 Grant Ave, Central New <br/>Road 0708, UK</p>
                            </li>
                            <li className='mb-3'>
                                <i className="fas fa-phone"></i><p className='m-0'>+880 1723 801 729 </p>
                            </li>
                            <li className='mb-3'>
                                <i className="fas fa-envelope-open-text"></i><p className='m-0'>enviroco@gmail.com </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='py-3 btm-footer'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <div><p className='m-0 small'>All Rights Reserved <span className='text-green'>CreativeGifs</span> @ 2017</p></div>
                    <div className='text-gray small'><a href='#'>Home</a> | <a href='#'>Privacy & policy</a> | <a href='#'>FAQ's</a></div>
                </div>
            </div>
            <div className='below-footer'>
                <div className='overlay py-5'>
                    <div className='container text-center py-5 my-5'>
                        <h5 className='mb-0'>Spreed your love</h5>
                        <h2 className='h1 my-3'>Become A Volunteer</h2>
                        <a href='#' className='btn bg-green rounded-pill text-white py-1 px-4'><small>JOIN US NOW</small></a>
                    </div>  
                </div>
            </div>
        </footer>
      </>
  )
}
export default Home;