import React from 'react'
import './About.css'
import back from '../Assets/back.png'
import about from '../Assets/back2.png'

const About = () => {
  return (
    <>
    <div className="headabout">
    <h1>About Us</h1>
    </div>
    
      <section className="about-us">
    <div className="row">
        <div className="about-col">
            <h1>We are the valley's best repair hub</h1>
            <p>
                Welcome to Valley Repair Hub, your trusted partner 
                in electrical appliance repair and maintenance. 
                We specialize in providing high-quality service 
                for refrigerators, washing machines, microwave 
                ovens, and more. Our team of experienced and 
                certified technicians is dedicated to ensuring 
                your appliances operate smoothly and efficiently, 
                extending their lifespan and improving their 
                performance.
                <h4>Our Mission</h4>
                <p>
                Our mission is to deliver exceptional repair 
                and maintenance services that exceed customer 
                expectations. We aim to build long-lasting 
                relationships with our clients by offering 
                reliable, timely, and cost-effective solutions 
                for all their appliance needs.
               </p> 
               <h4>Our Values</h4>
               <p>

               <b>Quality Service:</b> We take pride in our work and 
               are committed to delivering top-notch service every time.<br/>

               <b>Customer Satisfaction:</b>Your satisfaction is our priority. 
               We listen to your concerns and provide tailored 
               solutions to meet your needs. <br/>

               <b>Integrity:</b>We believe in honest and transparent dealings.
              You can trust us to provide accurate diagnoses and fair pricing. <br/>

               <b>Expertise: </b>Our technicians are highly 
               skilled and continuously trained to stay updated 
               with the latest technologies and repair techniques.
               </p>
               <h4>Why Choose Us?</h4>
               <p>
                <b>Experienced Technicians:</b> Our team comprises 
                certified professionals with years of experience in 
                appliance repair and maintenance. <br/>
                <b>Prompt Response:</b> We understand the 
                inconvenience of malfunctioning appliances 
                and strive to provide quick and efficient service. <br/>
                <b>Affordable Rates:</b>We offer competitive 
                pricing without compromising on quality. <br/>
                <b>Customer-Centric Approach:</b>Customer-Centric Approach: We focus on building strong relationships with our clients through exceptional service and support.
               </p>

               <p>
                At Valley Repair Hub, we are committed to 
                keeping your home running smoothly. 
                Whether you need a quick fix, routine 
                maintenance, or expert advice, we are here 
                to help. Thank you for choosing us as your
                 trusted appliance repair and maintenance provider.
               </p>
                
               </p>
                <a href="" className="hero-btn red-btn">EXPLORE NOW</a>
            </div>
            <div className="about-col">
                <img src={about}/>
            </div>
            </div>
    
</section>

    </>
  )
}

export default About
