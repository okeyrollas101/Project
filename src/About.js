import React from "react";
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h2 className="about__intro">Welcome to our student registration app! Our app is designed to simplify the process of registering for classes and managing your academic schedule.
                Here's a little bit about who we are and what we do:</h2>

            <h3 className="about__format">Our Mission:</h3>
            <p className="about__para">We believe that managing your academic schedule should be simple and stress-free. That's why we've designed our app to be user-friendly and intuitive,
               so that you can easily find the classes you need, register for them, and keep track of your schedule all in one place.</p>

            
            <h3 className="about__format">Who We Are:</h3>
            <p className="about__para">We are a team of developers and designers who are passionate about creating technology that makes people's lives easier. 
               We've worked hard to create an app that is not only functional, but also aesthetically pleasing and enjoyable to use.</p>

            <h3 className="about__format">What We Offer:</h3>
            <p className="about__para">Our student registration app offers a variety of features to help you manage your academic schedule, including:</p>
            <ul>
                <li className="about__para">An easy-to-use registration system that allows you to quickly sign up for classes</li>
                <li className="about__para">A personalized schedule that shows all of your classes and important dates</li>
                <li className="about__para">Integration with your school's academic calendar, so you never miss an important deadline</li>
            </ul>

            <h4 className="about__foot">We are constantly working to improve and update our app to meet the needs of our users. If you have any feedback or suggestions, 
               please don't hesitate to reach out to us. We are committed to providing the best possible experience for our users, and we appreciate your support.</h4>
        </div>
    );
}
 
export default About;