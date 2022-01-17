import React from 'react';
import "./Contact.css";
import Footer from "../Footer/Footer";
import Page_title from "../../page_title"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';
import { useState } from 'react';
import { send } from 'emailjs-com';
const Contact = () => {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    subject: '',
    smth: '',
  });
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_im3cydd',
      'template_tzrgfr3',
      toSend,
      'user_Fdk2Jpf4uA0qLtPf9PvIH'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <>
    <Page_title title="CONTACT US" description="Home / contact" />
    <section id="contact" className="contact">
            <div className="container">
              <div className="row mt-2">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-box">
                    <i className="bx bx-map"></i>
                    <h3><b>Our Address</b></h3>
                    <p>Hussien AbdEl'al Street, Beni-Suef, Egypt</p>
                  </div>
                </div>
        
                <div className="col-md-6 mt-4 mt-md-0 d-flex justify-content-center">
                  <div className="info-box">
                    <i className="bx bx-share-alt"></i>
                    <h3>Social Profiles</h3>
                    <div className="social-links">
                      <a href="https://twitter.com/AdhamAtefDemo" className="twitter"><i class='bx bxl-twitter' ></i></a>
                      <a href="https://www.facebook.com/adham.atef8585/" className="facebook"><i class='bx bxl-facebook-circle'></i></a>
                      <a href="https://www.instagram.com/adham_atef_demo/" className="instagram"><i class='bx bxl-instagram' ></i></a>
                      <a href="https://www.linkedin.com/in/adham-atef/" className="linkedin"><i class='bx bxl-linkedin-square' ></i></a>
                    </div>
                  </div>
                </div>
        
                <div className="col-md-6 mt-4 d-flex align-items-stretch">
                  <div className="info-box">
                    <i className="bx bx-envelope"></i>
                    <h3><b>Email Us</b></h3>
                    <p>adham.atef45@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-6 mt-4 d-flex align-items-stretch">
                  <div className="info-box">
                    <i className="bx bx-phone-call"></i>
                    <h3><b>Call Us</b></h3>
                    <p>+20 109 881 5199</p>
                  </div>
                </div>
              </div><br></br><br></br>
              <div className='form-title'>
                <h1><b>Send Us Message</b></h1>
              </div>
        
              <form action="#" role="form" className="email-form mt-4" onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input onChange={handleChange} value={toSend.name} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input onChange={handleChange} value={toSend.email} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  </div>
                </div>
                <div className="form-group">
                  <input onChange={handleChange} value={toSend.subject} type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                </div>
                <div className="form-group">
                  <textarea onChange={handleChange} value={toSend.smth} className="form-control" name="smth" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                </div>
                <div className="text-center"><button type="submit">Send</button></div>
              </form>
            </div>
          </section><br></br>
          <div className='maps'>
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.9)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.013831396725!2d30.730240585299416!3d28.12873809271241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b2552474cdc59%3A0xd9d57bc4a705a4ae!2sITI%20-%20Information%20Technology%20Institute%20(AlMinya)!5e0!3m2!1sen!2seg!4v1642383049533!5m2!1sen!2seg"
          />
          </div>
    <Footer />
    </>
  )
}
export default Contact;

