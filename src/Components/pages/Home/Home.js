import React , { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'react-bootstrap';
import {MdOutlineRecycling ,MdOutlineBusAlert} from 'react-icons/md';
import {RiExchangeDollarLine , RiPlantLine} from 'react-icons/ri';
import {LinearProgress} from "@material-ui/core";
import Icons from "../Home/icons";
import Progress from "../Home/progress";
import lamp from "../Home/images/lamp.PNG";
import plant from '../Home/images/plant.png'
import recycling from '../Home/images/recycling.png'
import watering from '../Home/images/watering.png'
import Team from './team/Team';
import News from './news/News'
import Card from './Card';
import Footer from "../Footer/Footer";
import ThemesContext  from  '../../themes';

const Home = () => {

    const theme  = useContext(ThemesContext) 

    return (
        <div  style={theme} >
            {/* _______________________ Carouser Section ______________________________ */}
            <section>
                <div className="carousel">
                    <div id="carouselExampleCaptions" className="carousel slide cus-carousel-height" data-bs-interval="false">
                        <div className="carousel-indicators cus-postion">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="cus-shape active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="cus-shape" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="cus-shape" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className="cus-shape" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner cus-full-height">
                            <div className="carousel-item first-slide active cus-full-height">
                
                            <div className="cus-overlay">
                                    <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                                        <h1 className="my-4 h2 animate__animated animate__zoomIn">WELCOME TO THE WORLD</h1>
                                        <p className="mb-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, maiores amet quasi sunt dignissimos totam!
                                        </p>
                                        <div className="my-4 cus-bottons animate__animated animate__fadeInUpBig">
                                            <button type="button" className="btn btn-get-start btn-lg rounded-pill mx-2 cus-befor">Get Start Now</button>
                                            <button type="button" className="btn btn-outline-light btn-lg rounded-pill m-2 cus-befor">Contact Us</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item zero-slide cus-full-height">
                                <div className="cus-overlay">
                                    <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                                        <h1 className="my-4 h2 animate__animated animate__zoomIn">WELCOME TO THE WORLD</h1>
                                        <p className="mb-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, maiores amet quasi sunt dignissimos totam!
                                        </p>
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
                                            <button type="button" className="btn btn-get-start btn-lg rounded-pill mx-2 cus-befor">Get Start Now</button>
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
                                            <button type="button" className="btn btn-get-start btn-lg rounded-pill mx-2 cus-befor">Get Start Now</button>
                                            <button type="button" className="btn btn-outline-light btn-lg rounded-pill m-2 cus-befor">Contact Us</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ______________________ 4 Cards (Working) Section _____________________________*/}
            <section id="homeCard">
                <div className='container py-5 mt-5'>
                    {/* __Title__ */}
                    <div className='mb-5'>
                        <h2 className='green' >2000+Volunter</h2>
                        <h1 id='headers' >People working with us since 1987!!</h1>
                        <p className='size'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam</p>
                    </div>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                    <Card title={"Recycling"}
                          text={"This is a longer card with supporting text below as a natural lead-in to additional content."}
                          imgSrc={require("./images/power.png")}                            
                                                
                    />
                    <Card title={"Water Refine"}
                          text={"This is a longer card with supporting text below as a natural lead-in to additional content."}
                          imgSrc={require("./images/electricity.png")}                            
                                                
                    />
                        
                    <Card title={"Eco system"}
                          text={"This is a longer card with supporting text below as a natural lead-in to additional content."}
                          imgSrc={require("./images/power.png")}                            
                                                
                    />
                    
                    <Card title={"solar system"}
                          text={"This is a longer card with supporting text below as a natural lead-in to additional content."}
                          imgSrc={require("./images/electricity.png")}                            
                                                
                    />
                    </div>
                </div>
            </section>
                
            {/* ______________________ Big Icons Section _____________________________________ */}
            
            <section id='home_icons_data'>
                <div className=" icons d-flex flex-wrap justify-content-evenly justify-content-center my-5 py-5">      
                   
                    <div className="btn" data-bs-toggle="collapse" data-bs-target="#card_data_1"  aria-controls="card_data_1">
                        <Icons icon={<MdOutlineRecycling />} value={"recycling"}  />
                        <div className="collapse multi-collapse" id="card_data_1" >
                            <div className="card card-body "  style={{width:'250px'}}>
                            <span> Recycling is </span> the best way to conserve limited resources by realizing benefits from the used resources and reusing them again,
                            and this is our duty for a better future.
                            </div>
                        </div>
                    </div>

                    <div className="btn" data-bs-toggle="collapse" data-bs-target="#card_data_2"  aria-controls="card_data_2">
                        <Icons icon={<RiPlantLine />} value={"Plant a tree"}  />
                        <div className="collapse multi-collapse" id="card_data_2" >
                            <div className="card card-body "  style={{width:'250px'}}>
                                <span> Volunteer With Us </span> and let us all live in a clean and healthy environment.
                                You can volunteer with us wherever you are by planting a tree in your street, park, or residential area.
                                Make our world clean Make our world green.
                            </div>
                        </div>
                    </div>

                    <div className="btn" data-bs-toggle="collapse" data-bs-target="#card_data_3" aria-controls="card_data_3">
                       <Icons icon={<MdOutlineBusAlert />} value={"connection"}  />
                        <div className="collapse multi-collapse" id="card_data_3" >
                            <div className="card card-body "  style={{width:'250px'}}>
                            <span> Communication </span> is now easier than in the past by selecting your available quantity on the website, 
                            and our employee will contact you within a few days, all with a just One click while you are at home.
                            </div>

                        </div>
                    </div>

                    <div className="btn" data-bs-toggle="collapse" data-bs-target="#card_data_4"  aria-controls="card_data_1">
                         <Icons icon={<RiExchangeDollarLine />} value={"Get Money"}  /> 
                        <div className="collapse multi-collapse" id="card_data_4" >
                            <div className="card card-body "  style={{width:'250px'}}>
                            <span> Get money </span> by selling plastic, aluminum or used papers. The higher the quantity you have,
                            the higher profits and benefits. Improving your financial situation is possible by selling what you do not need from these materials.
                            </div>
                        </div>
                    </div> 
                    
                </div>           
            </section>

            {/* ________________________ Lamp Section ____________________________ */}
            <section className='py-5'>    
                <Container>
                    {/* __Title__ */}
                    <div>
                        <h2 className='green' >2000+Volunter</h2>
                        <h1 id='headers' >People working with us since 1987!!</h1>
                        <p className='size'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam</p>
                    </div>
                    
                    <div className='cont'>
                        <Row>
                            <Col>
                                <div>
                                    <p className='ubuntu'>our mission</p>
                                    <h4 className='h4' >We've <span className='green'> large volunteer</span> community to set environment  </h4><br></br>
                                </div>
                                <div>
                                    <Row>
                                        <Col xs={2} >
                                            <img src={plant} alt="Plant!" width="30" height="30"/>

                                        </Col>
                                        <Col>
                                            <h5 className='ubuntu' >Recycling Rubbish</h5>
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
                    </div>
                </Container>
            </section>

            {/*_______________________ Materials Data Table Section_____________________________*/}
            <section id="reat_section" className=" my-5 p-3 fs-sm-6 fs-md-1">
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
            
            {/* _________________________Team Member Section______________________________ */}
            <Team />


            <News />

            {/* ______________________ Footer ________________________________________________ */}
            <Footer />
      </div>
    )
}
export default Home;