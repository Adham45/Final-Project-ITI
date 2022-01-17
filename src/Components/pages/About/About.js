import React from 'react';
import Page_title from "../../page_title";
import Footer from '../Footer/Footer';
import { GiFeather ,  GiSpotedFlower} from 'react-icons/gi'
import { HiOutlineLightBulb ,HiOutlineSun } from 'react-icons/hi'
import { FaHandHoldingHeart , FaCogs  , FaRegGem} from 'react-icons/fa'


const About = () => {
  const icons = [ { icon : < HiOutlineLightBulb /> , text : "Dream" },
                  { icon : < GiFeather /> , text : "Vision" },
                  { icon : < HiOutlineSun /> , text : "Passion" },
                  { icon : < GiSpotedFlower /> , text : "Do You Know" },
                  { icon : < FaHandHoldingHeart /> , text : "Benefit" },
                  { icon : < FaCogs /> , text : "Purpose" },
                  { icon : < FaRegGem /> , text : "Values" }
                ]
            


  return (
    <>
    <section id='about'>
        <Page_title title="About Us" description="Who We Are ?" />

        <div className="container d-flex align-items-center gap-5">
            <div className='about_info'>
                <h1 className='text-danger' >about</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur quam eius esse sequi hic aperiam!
                  Quibusdam ullam quaerat quam. Nam porro tempore aliquid, praesentium quisquam quae quod veniam laborum?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur quam eius esse sequi hic aperiam!
                  Quibusdam ullam quaerat quam. Nam porro tempore aliquid, praesentium quisquam quae quod veniam laborum?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur quam eius esse sequi hic aperiam!
                  Quibusdam ullam quaerat quam. Nam porro tempore aliquid, praesentium quisquam quae quod veniam laborum?
                </p>
            </div>
            <img src="https://image.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865274.jpg" alt="about" />
        </div>

      <div className='container_circle_icons'>
        <div className=' circle_icons text-center'>
          {icons.map ( (opj , i) =>{
            return (
              <div key={i}>
                   {opj.icon}
                <p>{opj.text}</p>
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