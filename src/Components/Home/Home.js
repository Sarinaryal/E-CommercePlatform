import React from "react";
import './Home.css'
import back from '../Assets/back.png'
import washing from '../Assets/washing.png'
import fridge from '../Assets/fridge.png'
import oven from '../Assets/oven.png'
import BookNow from "../BookNow/BookNow";

const Home = () => {
  return (
    <>
    <section className="header">
      <div className="text-box">
      <h1>VALLEY REPAIR HUB</h1>
        <p>From refrigerators and washing machines to ovens and air conditioners, 
            we offer a comprehensive range of repair and maintenance services. 
            Whether it's a minor fix or a major overhaul, we’ve got you covered
        </p>
        <a href="" class="hero-btn">Get Services</a>
    </div>
    </section>

      
      <section className="course">
        <h1>Services we offer</h1>
        <p>With over a decade of experience, we are dedicated to providing top-notch repair 
            and maintenance services for all major household appliances. Our team of certified technicians is 
            committed to delivering exceptional customer service and quality workmanship.</p>
        <div className="row">
            <div className="course-col">
                <h3>Washing Machine</h3>
                <img src= {washing}/>
                <p>
                    Ensure your washing machine operates smoothly with our
                     top-notch repair and maintenance services. From resolving
                      drainage problems and spin cycle issues to regular servicing,
                       our skilled professionals are dedicated to 
                    maintaining your machine’s efficiency and longevity.
                </p>
            </div>
            <div className="course-col">
                <h3>Refrigerator</h3>
              <img src={fridge}/>
                <p>
                    Keep your refrigerator running efficiently
                     with our expert repair and maintenance services.
                      Whether it's cooling issues, unusual noises, 
                      or routine upkeep, our experienced technicians 
                      provide reliable solutions to extend the life of your 
                    appliance and ensure optimal performance.
                </p>
            </div>
            <div className="course-col">
                <h3>Microwave Oven</h3>
                <img src={oven}/>
                <p>
                    Experience hassle-free cooking with our 
                    microwave oven repair and maintenance services.
                     Whether it's a malfunctioning keypad, 
                     inconsistent heating, or preventive care,
                      our trained technicians offer prompt and 
                      effective solutions to keep your microwave oven
                       in perfect working condition.

                </p>
            </div>
            <div className="course-col">
                <h3>Microwave Oven</h3>
                <img src={oven}/>
                <p>
                    Experience hassle-free cooking with our 
                    microwave oven repair and maintenance services.
                     Whether it's a malfunctioning keypad, 
                     inconsistent heating, or preventive care,
                      our trained technicians offer prompt and 
                      effective solutions to keep your microwave oven
                       in perfect working condition.

                </p>
            </div>
            
            
            {/* 
            
            <div className="course-col">
                <h3>Microwave Oven</h3>
                <img src="image/oven.png">
                <p>
                    Experience hassle-free cooking with our 
                    microwave oven repair and maintenance services.
                     Whether it's a malfunctioning keypad, 
                     inconsistent heating, or preventive care,
                      our trained technicians offer prompt and 
                      effective solutions to keep your microwave oven
                       in perfect working condition.

                </p>
            </div>

            <div className="course-col">
                <h3>Microwave Oven</h3>
                <img src="image/oven.png">
                <p>
                    Experience hassle-free cooking with our 
                    microwave oven repair and maintenance services.
                     Whether it's a malfunctioning keypad, 
                     inconsistent heating, or preventive care,
                      our trained technicians offer prompt and 
                      effective solutions to keep your microwave oven
                       in perfect working condition.

                </p>
            </div>
            <div className="course-col">
                <h3>Microwave Oven</h3>
                <img src="image/oven.png">
                <p>
                    Experience hassle-free cooking with our 
                    microwave oven repair and maintenance services.
                     Whether it's a malfunctioning keypad, 
                     inconsistent heating, or preventive care,
                      our trained technicians offer prompt and 
                      effective solutions to keep your microwave oven
                       in perfect working condition.

                </p>
            </div>
        </div> */}
        </div>

    </section>
    <BookNow/>

      
    </>
  );
};

export default Home;
