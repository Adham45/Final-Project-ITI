import React from 'react';
import Page_title from "../../page_title";
import Footer from '../Footer/Footer';
import { GiFeather ,  GiSpotedFlower} from 'react-icons/gi'
import { HiOutlineLightBulb ,HiOutlineSun } from 'react-icons/hi'
import { FaHandHoldingHeart , FaCogs  , FaRegGem} from 'react-icons/fa'

const About = () => {
  const icons = [ { icon : < HiOutlineLightBulb id="1"/> , text : "Dream" , content : "We Dream of a clean world without diseases to live happily ever afte." },
                  { icon : < GiFeather id="2" /> , text : "Vision" , content : "Building the idea of ​​recycling in the minds of future generations because they are Our future. "  },
                  { icon : < HiOutlineSun id="3" /> , text : "Passion" , content : "Passion is the driving force that drives us towards success and creativity." },
                  { icon : < GiSpotedFlower id="4" /> , text : "Know More About Our ..."  },
                  { icon : < FaHandHoldingHeart id="5" /> , text : "Benefit"  , content : "We believe that the relationship between an organization and its customers is the most important benefit to achieving progress" },
                  { icon : < FaCogs id="6" /> , text : "Purpose" , content : "We strive for a better future through better use of resources and preservation of public health."  },
                  { icon : < FaRegGem id="7" /> , text : "Values" , content : "Honesty, sincerity and earning customer satisfaction are the highest values ​​that make our hearts full of love for each other."  }
                ]
            
                
  const show = (e) => {
      let items = document.querySelectorAll(".ico");
      let around_icons = document.querySelectorAll(".circle_icons span");
        if (e.target.id === "4"){
          e.target.style.color = "red";
          
          items.forEach( el => {
            el.style.opacity = 1;
          });

          around_icons.forEach( el => {
            el.style.color = "yellowgreen"
          })

        }
  }

  return (
    <>
    <section id='about'>
        <Page_title title="About Us" description="Who We Are ?" />

        <div className="container d-flex align-items-center gap-5 flex-wrap flex-md-nowrap">
            <div className='about_info'>
                <h2> We Are The Best </h2>
                <p> Our distinguished relationship with our competitors is what distinguishes us from others.
                    Our passion and love for what we do is what keeps us moving forward.
                    Our belief that we always deserve the best is what truly makes us the best.
                    Together, we can protect the environment and achieve mutual benefits.
                    If you want to sell used plastic, aluminum or paper, you are in the right place

                </p>
            </div>
            
            <img className='img-fluid' src="https://image.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865274.jpg" alt="about" />
        </div>

      <div className='container_circle_icons'>
        <div className=' circle_icons text-center'>
          {icons.map ( (opj , i) =>{
            return (
              <div key={i} >
                  <span onClick= {(e) => show (e) }> {opj.icon} </span>
                <p>{opj.text}</p>
                <p className="ico d-none d-sm-block" > {opj.content} </p>
              </div>
            )})}
        </div>       
      </div>

    </section>
    <Footer />
    </>
  );
}
export default About;