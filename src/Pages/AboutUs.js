import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
    <Header/>
    <div className='about'>
    <h1 style={{fontFamily: 'Oswald'}}>About Us</h1>
    <div className={`about-main ${isVisible ? 'visible' : ''}`}>
   

      <section>
        
        <p className="step-1">
          At <b><span style={{color: 'yellow'}}>TY<span style={{color: 'red'}}>PING<span style={{color: 'black'}}>PRO</span></span></span></b> we understand the importance of typing skills in today's fast-paced digital world. Whether you're a student, a professional, or simply looking to enhance your typing abilities, our platform is designed to provide you with an engaging and effective typing practice experience.
        </p>
        <p className="step-2">
          Our interactive typing tests are meticulously crafted to offer a variety of texts, including common words, phrases, and even specific industry-related content. By challenging yourself with our diverse range of typing exercises, you can not only increase your words per minute (WPM) but also enhance your typing precision and error-free accuracy.
        </p>
        <p className="step-3">
          What sets us apart is our user-friendly interface and real-time performance feedback. As you take our typing tests, you'll receive instant results and detailed insights into your typing speed, accuracy, and any areas that may require improvement. Our goal is to help you track your progress and motivate you to achieve new typing milestones.
        </p>
        <p className="step-4">
          We value the importance of practice, so we provide a range of customizable options to tailor your typing experience. Whether you prefer timed tests, specific text lengths, or specialized typing exercises, our platform allows you to personalize your practice sessions according to your preferences and goals.
        </p>
        <p className="step-5">
          At <b><span style={{color: 'yellow'}}>TY<span style={{color: 'red'}}>PING<span style={{color: 'black'}}>PRO</span></span></span></b> we are committed to creating a supportive community of typists. Connect with fellow users through our forums, share your achievements, and participate in friendly typing competitions to challenge yourself further. Our community is here to inspire and encourage you on your journey to becoming a proficient typist.
        </p>
        <p className="step-6">
          We appreciate your visit to <b><span style={{color: 'yellow'}}>TY<span style={{color: 'red'}}>PING<span style={{color: 'black'}}>PRO</span></span></span></b> and the opportunity to be a part of your typing improvement journey. Start practicing with our typing tests today and witness the progress you can achieve. Join thousands of satisfied typists who have already improved their skills with our platform.
        </p>
        <p className="step-7">
          For any inquiries, feedback, or suggestions, please don't hesitate to reach out to our dedicated support team. We are here to assist you and ensure you have the best possible experience on our website.
        </p>
        <p className="step-8">
          Happy typing and best of luck on your journey to becoming a faster and more accurate typist!
        </p>
      </section>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
