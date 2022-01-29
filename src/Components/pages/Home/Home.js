import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineRecycling, MdOutlineBusAlert } from "react-icons/md";
import { RiExchangeDollarLine, RiPlantLine } from "react-icons/ri";
import { LinearProgress } from "@material-ui/core";
import Icons from "../Home/icons";
import Progress from "../Home/progress";
import lamp from "../Home/images/lamp.PNG";
import plant from "../Home/images/plant.png";
import recycling from "../Home/images/recycling.png";
import electricity from "./images/electricity.png";
import power from "./images/power.png";
import watering from "../Home/images/watering.png";
import Team from "./team/Team";
import News from "./news/News";
import Card from "./Card";
import Popup from "./Popup";
import Footer from "../Footer/Footer";

<<<<<<< HEAD


=======
>>>>>>> 352aa7b36abc46bd85ececc9cefa25ed39715263
const Home = () => {
  return (
    <>
      {/* _______________________ Carouser Section ______________________________ */}
      <section>
        <div className="carousel">
          <div
            id="carouselExampleCaptions"
            className="carousel slide cus-carousel-height"
            data-bs-interval="false"
          >
            <div className="carousel-indicators cus-postion">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="cus-shape active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                className="cus-shape"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                className="cus-shape"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                className="cus-shape"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner cus-full-height">
              <div className="carousel-item first-slide active cus-full-height">
                <div className="cus-overlay">
                  <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                    <h1 className="my-4 h2 animate__animated animate__zoomIn">
                      WELCOME TO THE WORLD
                    </h1>
                    <p className="mb-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, maiores amet quasi sunt dignissimos totam!
                    </p>
                    <div className="my-4 cus-bottons animate__animated animate__fadeInUpBig">
                      <button
                        type="button"
                        className="btn btn-get-start btn-lg rounded-pill mx-2 cus-befor"
                      >
                        Get Start Now
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item zero-slide cus-full-height">
                <div className="cus-overlay">
                  <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                    <h1 className="my-4 h2 animate__animated animate__zoomIn">
                      WELCOME TO THE WORLD
                    </h1>
                    <p className="mb-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, maiores amet quasi sunt dignissimos totam!
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item second-slide cus-full-height">
                <div className="cus-overlay">
                  <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                    <h1 className="my-4 h2 animate__animated animate__zoomIn">
                      What Do You Do Today For Peaples 2
                    </h1>
                    <p className="mb-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, maiores amet quasi sunt dignissimos totam!
                    </p>
                    <div className="cus-bottons my-4 animate__animated animate__fadeInUpBig">
                      <button
                        type="button"
                        className="btn btn-get-start btn-lg rounded-pill mx-2 cus-befor"
                      >
                        Get Start Now
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                      >
                        Contact Us
                      </button>
                    </div>
<<<<<<< HEAD
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                    <Card title="Recycling"
                          text="We concentrate on solving the problems of collection and recycling garbage."
                          imgSrc={power}
                          modelId="staticBackdrop"

                                                
                    />
                    <Popup content={`1-The large amount of garbage scattered everywhere:Collect and recycle garbage in a correct manner instead of wrong
                                    manner that can cause environmental and health disasters.2- Diseases that spread reason of spread of garbage:Invest in the resources and helping solve the economic crisis by
                                    making better use of resources and reuse it again.\n3- Limited economic resource and the economic crisis:Communication between the public and the recycling companies become
                                    easier and organized.\n4- Low knowledge of the importance of recycling:Everyone can improve their income by selling plastic, aluminum, and
                                    papers used by them, and providing job opportunities with a fixed income
                                    for garbage collectors.\n5- Disposing of garbage the wrong way:make sorting garbage easier and thus decrease sorting costs for
                                    businesses.\n6- The risk of global warming has increased in recent years:Preserving the environment and decrease global warming impact.`}
                           modelId="staticBackdrop"/>

                    <Card title="Our dream"
                          text="We Dream of a clean world without diseases and health problems to live happily ever after."
                          imgSrc={electricity}
                          modelId="staticBackdrop2"                         
  
                                                
                    />
                    <Popup content={` we can achieve this through various methods:\n
                                    1-Collecting the garbage continously and recycling it play an important role for a clean world\n
                                    2-Reducing pollution of every kind:Pollution prevention reduces environmental costs (health problems and environmental damage)`}                            
                           modelId="staticBackdrop2"   />

                        
                    <Card title="Our vision"
                          text="Building the idea of ​​recycling in the minds of upcoming generations because they are our future."
                          imgSrc={power}
                          modelId="staticBackdrop3"
                          
                          />
                    <Popup content={`No doubts that recycling has many advantages to our health and environment,so we seek to encourage all people to apply this concepts in their daily life.\n
                                    We can achieve this through:
                                    1-Talks that concentrtate on impportance and advantages of recycling.
                                    2-Involving people in recycling process through collecting all recyclable materials like plastics from them with a fixed price.\n
                                    3-Putting baskets for each recyclable materials in streets to increase the hygienic part of people besides involving them in recycling process.`}                            
                           modelId="staticBackdrop3"   />
                                                   

                    
                    <Card title="Customization"
                          text="The relationship between organization and customers is the most important benefit for progress. "
                          imgSrc={electricity} 
                          modelId="staticBackdrop4"                          
 
                                                
                    />
                    <Popup content={`Our relationship with all people and users is based on Honesty, sincerity,Respect, and earning customer satisfaction which are the highest values ​​that make our hearts full of love for each other.\n
                                    we can achieve customization through involving all customers and all people in recycling process regardless of their social status.\n
                                    1-The rich can share by collecting all unused materials and send them to the our organization representitve as well as the normal level people,they can take a fixed price as each kilogram for these unused materials.\n
                                    2-The working and struggling class with a low social level can involve in this process and benefit from,they can earn a higher price per kilogram of collection as an appreciation to their contribution ,their social status ,and their work nature.`}                            
                           modelId="staticBackdrop4" />
=======
                  </div>
                </div>
              </div>
              <div className="carousel-item third-slide cus-full-height">
                <div className="cus-overlay">
                  <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center cus-full-height">
                    <h1 className="my-4 h2 animate__animated animate__zoomIn">
                      What Do You Do Today For Peaples 1
                    </h1>
                    <p className="my-0 col-8-md col-lg-7 fs-5 d-none d-md-block animate__animated animate__zoomIn">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, maiores amet quasi sunt dignissimos totam!
                    </p>
                    <div className="my-4 cus-bottons animate__animated animate__fadeInUpBig">
                      <button
                        type="button"
                        className="btn btn-get-start btn-lg rounded-pill mx-2 cus-befor"
                      >
                        Get Start Now
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-light btn-lg rounded-pill m-2 cus-befor"
                      >
                        Contact Us
                      </button>
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
        <div className="container py-5 mt-5">
          {/* __Title__ */}
          <div className="mb-5">
            <h2 className="green">2000+Volunter</h2>
            <h1 id="headers">People working with us since 1987!!</h1>
            <p className="size">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <Card
              title="Recycling"
              text="This is a longer card with supporting text below as a natural lead-in to additional content."
              imgSrc={power}
              modelId="staticBackdrop"
            />
            <Popup content="hello1" modelId="staticBackdrop" />

            <Card
              title="Water Refine"
              text="This is a longer card with supporting text below as a natural lead-in to additional content."
              imgSrc={electricity}
              modelId="staticBackdrop2"
            />
            <Popup content="hello2" modelId="staticBackdrop2" />

            <Card
              title="Eco system"
              text="This is a longer card with supporting text below as a natural lead-in to additional content."
              imgSrc={power}
              modelId="staticBackdrop3"
            />
            <Popup content="hello3" modelId="staticBackdrop3" />
>>>>>>> 352aa7b36abc46bd85ececc9cefa25ed39715263

            <Card
              title="solar system"
              text="This is a longer card with supporting text below as a natural lead-in to additional content."
              imgSrc={electricity}
              modelId="staticBackdrop4"
            />
            <Popup content="hello4" modelId="staticBackdrop4" />
          </div>
        </div>
      </section>

      {/* ______________________ Big Icons Section _____________________________________ */}
      <section>
        <div className=" icons d-flex flex-wrap justify-content-evenly justify-content-center my-5 py-5">
          <Icons icon={<MdOutlineRecycling />} value={"recycling"} />
          <Icons icon={<RiPlantLine />} value={"Plant a tree"} />
          <Icons icon={<MdOutlineBusAlert />} value={"Connecting"} />
          <Icons icon={<RiExchangeDollarLine />} value={"Get Money"} />
        </div>
      </section>

      {/* ________________________ Lamp Section ____________________________ */}
      <section className="py-5">
        <Container>
          {/* __Title__ */}
          <div>
            <h2 className="green">2000+Volunter</h2>
            <h1 id="headers">People working with us since 1987!!</h1>
            <p className="size">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam
            </p>
          </div>

          <div className="cont">
            <Row>
              <Col>
                <div>
                  <p className="ubuntu">our mission</p>
                  <h4 className="h4">
                    We've <span className="green"> large volunteer</span>{" "}
                    community to set environment{" "}
                  </h4>
                  <br></br>
                </div>
                <div>
                  <Row>
                    <Col xs={3} sm={3} lg={2}>
                      <img src={plant} alt="Plant!" width="40" height="40" />
                    </Col>
                    <Col>
                      <h5 className="ubuntu">Recycling Rubbish</h5>
                      <p className="ubuntu">Lorem ipsum dolor sit amet</p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col xs={3} sm={3} lg={2}>
                      <img
                        src={recycling}
                        alt="Plant!"
                        width="40"
                        height="40"
                      />
                    </Col>
                    <Col>
                      <h5 className="ubuntu">Plant Ecology</h5>
                      <p className="ubuntu">Lorem ipsum dolor sit amet</p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col xs={3} sm={3} lg={2}>
                      <img src={watering} alt="Plant!" width="40" height="40" />
                    </Col>
                    <Col>
                      <h5 className="ubuntu">Recycling Rubbish</h5>
                      <p className="ubuntu">Lorem ipsum dolor sit amet</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col>
                <img
                  src={lamp}
                  alt="Tree inside lamp!"
                  width="200"
                  height="300"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/*_______________________ Materials Data Table Section_____________________________*/}
      <section id="reat_section" className=" my-5 p-3 fs-sm-6 fs-md-1">
        <table className="table table-borderless text-center">
          <thead className="">
            <tr className=" row align-items-center">
              <th className="col-3 d-none d-sm-block ">material</th>
              <th className="col-4 col-sm-3">
                annual <br /> production
              </th>
              <th className="col-4 col-sm-3">
                Annual <br /> consumption
              </th>
              <th className="col-4 col-sm-3">recycling</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" row justify-content-between align-items-centermt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0">plastic</td>
              <td className="col-4 col-sm-3">
                <Progress value={50} /> <span>50%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={80} />
                <span>80%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={93} />
                <span>93%</span>
              </td>
            </tr>
            <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0">
                Cardboard and papers
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={45} />
                <span>45%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={30} />
                <span>30%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={80} />
                <span>80%</span>
              </td>
            </tr>
            <tr className=" row justify-content-between align-items-center mt-5 mt-md-2">
              <td className="col-12 col-sm-3 mb-3 mb-sm-0">Aluminum</td>
              <td className="col-4 col-sm-3">
                <Progress value={70} />
                <span>70%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={80} />
                <span>80%</span>
              </td>
              <td className="col-4 col-sm-3">
                <Progress value={90} />
                <span>90%</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className="ssss">
                <h6>environmental conservation rate</h6>
                <LinearProgress
                  className="env_rate"
                  variant="determinate"
                  value={80}
                />
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
    </>
  );
};
export default Home;
