
import { createGlobalStyle } from "styled-components";

 export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
   }



 body {
   margin: 0;
   padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
   min-height: 100vh;
   background:#b1b1b1;

 }



 .canvas {
   display: grid;
   min-height: 67vh;
   grid-auto-flow: row;
   grid-template-row: auto 1fr auto;
   gap: 0.5rem;
   padding: 2rem;
   width: 95vw;
   align-items: center;
   text-align: center;
   box-shadow: 0 0 15px 2px #3b3b3b;
   margin: 2rem 2rem 0 2rem;
   border-top-left-radius: 25%;
   border-top-right-radius: 25%;
   overflow: hidden;
   position: relative;
   background: ${({theme})=>theme.background}; 
   color: ${({theme})=>theme.textColor};
 }

 .canvas::before {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   height: 20px;
   background-size: cover;
 }



 .type-box {
   display: block;
   border: 0 solid #d4d4d7;
   max-width: 1000px;
   height: 150px;
   margin-left: auto;
   margin-right: auto;
   overflow: hidden;
   font-family: 'Merriweather';
   box-shadow: 0 9px 24px rgba(0,0,0,.12), 0 9px 24px rgba(0,0,0,.12);
 }

 .words{
    font-size: 32px;
    display: flex;
    flex-wrap: wrap;
    color: ${({theme})=>theme.typeBoxText};

 }
 .word{
    margin: 5px;
    padding-right: 2px;
 }

 .hidden-input{
    opacity: 0;
 }

 /*below css code will blink the cursor*/

 .current{
    border-left: 1px solid;
    animation: blinking 2s infinite;
    animation-timing-function: ease;
    @keyframes blinking{
       0% {border-left-color: ${({theme})=>theme.textColor};}
       25% {border-left-color: ${({theme})=>theme.background};}
       50% {border-left-color: ${({theme})=>theme.textColor};}
       75% {border-left-color: ${({theme})=>theme.background};}
       100% {border-left-color: ${({theme})=>theme.textColor};}
    }
 }

 .current-right{
    border-right: 1px solid;
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;
    @keyframes blinkingRight{
       0% {border-right-color: ${({theme})=>theme.textColor};}
       25% {border-right-color: ${({theme})=>theme.background};}
       50% {border-right-color: ${({theme})=>theme.textColor};}
       75% {border-right-color: ${({theme})=>theme.background};}
       100% {border-right-color: ${({theme})=>theme.textColor};}
    }
 }
 .correct{
    color: ${({theme})=>theme.textColor};
 }

 .incorrect{
    color: red;
 }

 .upper-menu{
    display: flex;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.35rem;
    justify-content: space-between;
    padding: 0.5rem;
 }
 .counter{
   border: 5px solid ${({theme})=>theme.typeBoxText};
   border-radius: 50px;
   height: 60px;
   width: 60px;
   background-color: ${({theme})=>theme.typeBoxText};


 }
 .countdown-text{
   border: 4px solid ${({theme})=>theme.textColor};
   height: 50px;
   width: 50px;
   text-align: center;
   border-radius: 50px;
   background-color: ${({theme})=>theme.background};
   color: #fff;
   padding-top: 10px;
 }
 /* CSS for Time Modes*/ 

 .modes {
   display: flex;
   gap: 0.6rem;
   margin-bottom: 2rem;
 }

 .time-mode {
   padding: 0.5rem 1rem;
   border-radius: 5px;
   color: white;
   background-color: #333;
   font-size: 1rem;
   cursor: pointer;
   transition: background-color 0.3s, transform 0.2s;
 }

 .time-mode:hover {
   background-color: #555;
 }

 /* Optional: Add a shadow on hover for a more stylish effect */
 .time-mode:hover {
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
 }

 .stats-Box{
    display: flex;
    width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Pangolin';
 }

 .laft-stats{
    width: 30%;
    padding: 30px;

 }

 .right-stats{
    width: 70%;
 }

 .title{
    font-size: 20px;
    color: ${({theme})=>theme.typeBoxText};
 }

 .subtitle{
    font-size: 30px;

   
 }

 .header {
   background-color: #64b4cf;
   padding: 10px;
 
   border-bottom: 2px solid #333;
    height: 90px;
    box-shadow: 0 0 17px 2px #3b3b3b;
 
    display: flex;
   justify-content: space-between;
   align-items: center;
  
 }

 .navbar {
     display: flex;
     justify-content: space-between;

     width: 700px;
     text-align: center;
     float: right;
     margin-right: 3rem;

 }

 .logo  {
   display: flex;
   align-items: center;
   font-size: 24px;
   margin-left: 1rem;
  
   text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3), 4px 4px 10px rgba(0, 0, 0, 0.2);
   font-family: open sans,Arial,sans-serif;

 }

 .logo img{
    height: 70px;
    width: 300px;
 }

 .logo h6{
    width: 250px;
    text-align: center;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
 }



 .user-icon {
   margin-right: 2rem;
 }

 .user-icon svg {
   font-size: 24px;
 }


 .nav-links {
   gap: 2rem;
   margin-right: 3rem;

 }



 .nav-link {
    color: ${({theme})=> theme.typeBoxText};
   text-decoration: none;
   position: relative;
   font-size: 20px;
   padding: 10px;

   font-family: 'Anton', sans-serif;

 }

 .nav-link::before {
   content: '';
   position: absolute;
   bottom: -2px;
   left: 0;
   width: 100%;
   height: 2px;
   background-color: transparent;
   transform: scaleX(0);
   transform-origin: left;
   transition: transform 0.3s ease-in-out;
 }

 .nav-link:hover {
   color: ${({theme})=>theme.textColor};
 }

 .nav-link:hover::before {
   transform: scaleX(1);
   background-color: #ff5555;
 }

 .nav-link.active {
   color: ${({theme})=> theme.background};
   font-weight: white;

 }

 /* Footer container */
 .footer {
   background-color:#282A35;
   padding: 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-family: open sans,Arial,sans-serif;

 
 }
 
  /* Footer logo */
 .footer__logo {
  
    display: flex;
    align-items: center;
   margin-right: 20px;
  

 }

 .footer__logo img{
 
    height: 80px;
    width: 250px;
    cursor: pointer;
 }

 .footer-content {
   display: flex;
   flex-direction: column;
   align-items: center; /* Center the content vertically */
   cursor: pointer;
   color: ${({theme})=>theme.typeBoxText};
   padding: 5px;
   margin-bottom: 1rem;
 }

 .permalinks {
   list-style: none;
   margin: 5px;
   padding: 10px;
   display: flex;
   align-items: center;

 }

 .permalinks li { 
   margin-right: 12px;
   font-size: 1.2rem;
 }

 .permalinks li a{
    color: ${({theme})=>theme.typeBoxText};
   
    text-decoration: none;
 }

 .permalinks li a:hover{
     background: transparent;
     color: ${({theme})=>theme.textColor};
     transition: all 0.3s;

 }

 /* Footer socials */
 .footer__socials {
   display: flex;
   align-items: center;
   gap: 0.5rem;
   margin-left: 20px; /* Add some spacing between the permalinks and socials */
 }

 .footer__socials a {
   font-size: 1.2rem;
   margin-right: 10px;
  /* Change the color as per your design */
     background: white;
     color:${({theme})=>theme.background};

     padding: 0.6rem;
     border-radius: 0.9rem;
     display: flex;
     border: 1px solid transparent;

 }

 .footer__socials a:last-child {
   margin-right: 0; /* Remove margin from the last icon to keep them on the same line */

 }

 .footer__socials a:hover{
     background: transparent;
     color:${({theme})=>theme.typeBoxText};

     border-color: ${({theme})=>theme.background};

 }


 /* Copyright */
 .footer__copyright {
    margin-top: 0.8rem;
   text-align: center;
   margin-left: 8px; /* Add some spacing between the socials and copyright */
   color: ${({theme})=>theme.typeBoxText};

 }

 /* Theme button */
 .theme-wrapper {
   display: flex;
   align-items: center;
 }

 .themeButton {
   margin-left: 20px; /* Add some spacing between the footer content and the theme button */
 }

 .user-profile{
    width: 800px;
    margin: auto;
    display: flex;
    height: 15rem;
    background: ${({theme})=>theme.typeBoxText};
    border-top-left-radius: 80px;
    border-bottom-right-radius: 80px;
    padding: 1rem;
    justify-content: center;
    align-text: center;
    border: 2px solid aqua;
    box-shadow: 0 9px 24px rgba(0,0,0,.12), 0 9px 24px rgba(0,0,0,.12);

 }

 .user{
    width: 70%;
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 1.5rem;
    padding: 1rem;
    border-right: 2px solid;

 }

 .info{
    width: 60%;
    padding: 1rem;
    margin-top: 1rem;
 }
 .picture{
    ${'' /* border: 2px solid aqua; */}
 border-radius: 25%;
 height: 150px;
 width: 150px;
 }
 .joined-at{
    font-family: open sans,Arial,sans-serif;
 }
 .picture{
    width: 40%;
 }

 .total-tests{
    width: 40%;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat Subrayada';
 }

 .table, .graph-user-page{
 margin: auto;
 width: 1000px;
 }

  .center-of-screen{
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;

  
  }

  .user-result{
    display: grid;
   min-height: 67vh;
   grid-auto-flow: row;
   grid-template-row: auto 1fr auto;
   gap: 0.5rem;
   padding: 2rem;
   width: 95vw;
   align-items: center;
   text-align: center;
   box-shadow: 0 0 15px 2px #3b3b3b;
   margin: 2rem 2rem 0 2rem;
   border-top-left-radius: 10%;
   border-top-right-radius: 10%;
   overflow: hidden;
   position: relative;
   background: ${({theme})=>theme.background}; 
   color: ${({theme})=>theme.textColor};
  }

     .links {
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   transition: all 0.3s;
   margin-left: 2rem;
 }

 .links > div {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 1rem;
   cursor: pointer;
   text-decoration: none;
  
   position: relative;
   font-family: open sans,Arial,sans-serif;

 }

 .links > div::after {
   content: '';
   position: absolute;
   bottom: -2px;
   left: 0;
   width: 0;
   height: 2px;
   background-color: yellow;
   transition: width 0.3s ease-in-out;
 }

 .links > div:hover::after {
   width: 100%;
 }

 .links > div span {
   margin-top: 0.5rem;
 }

 .links > div svg {
   font-size: 1.2rem;
 }


  .btn{
    padding: 10px;
    margin: 50px;
  
  }
  .copyright{
    width: 350px;
    padding: 6px;
    text-align: center;
    height: 50px;
    color: #fff;
    margin-top: 2rem;
    font-family: open sans,Arial,sans-serif;
    cursor: pointer;
    transition: all 0.3s;
  }

 .themeButton{
    padding: 0.5rem;
    width: 150px;
   }

 .email{
    font-size: 1.4rem;
    font-family: 'Dancing Script';
    marginBottom: 2px;
    margin-right: 3px;
  
 }

 .signin-signup-box{
    width: 750px;
    height: 600px;
    display: flex;
    justifyContent: space-between;
    background-image: linear-gradient(to top, #d16ba5, #c56db4, #b571c2, #a075cf, #847bd9, #6b8ae7, #4a98f2, #00a5f8, #00bdff, #00d3ff, #00e8f9, #5ffbf1);
 
    border-top-left-radius: 60px;
    border-bottom-right-radius: 60px;
    box-shadow: 0 9px 24px rgba(0,0,0,.12), 0 9px 24px rgba(0,0,0,.12);
   

 }

 .sign-up-btn{
    padding: '8px 16px',
     background: '#333',
     color: '#fff',
     border: 'none',
     borderRadius: '4px',
     cursor: 'pointer',
 }

 .create-your-acnt-title{
    
    text-align: center;
    margin-right: 1rem;
    color: #094e63;
    font-size: 1.5rem;
    font-weight: bold;
    border-bottom: 2px solid #d4d7d3;
    font-family: open sans,Arial,sans-serif;
 }

 .photo-div{
    height: 90px;
    width: 320px;
    margin:1rem;
  }

  .my-logo img{
    height: 90px;
    width: 300px;
  }

 .photo-div h1{
   
    text-align: center;
    margin-right: 1rem;
    color: #094e63;
    font-size: 1rem;
    font-weight: bold;
    ${'' /* border-bottom: 2px solid #d4d7d3; */}
    font-family: open sans,Arial,sans-serif;
    ${'' /* border:1px solid black; */}
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);

 }

 .my-image{
    margin-top: 2rem;
    height: 300px;
    width: 300px;
    background: transparent;
    box-shadow: 0 9px 24px rgba(0,0,0,.12), 0 9px 24px rgba(0,0,0,.12);
 }
 .my-image img{
   height: 300px;
   width: 300px;
 }

 .about{
    display: grid;
   min-height: 50vh;
   grid-auto-flow: row;
   grid-template-row: auto 1fr auto;
   gap: 0.5rem;
   padding: 2rem;
   width: 95vw;
   align-items: center;
   text-align: center;
   box-shadow: 0 0 15px 2px #3b3b3b;
   margin: 2rem 2rem 0 2rem;
   border-top-left-radius: 25%;
   border-top-right-radius: 25%;
   overflow: hidden;
   position: relative;
   background: ${({theme})=>theme.background}; 
   color: ${({theme})=>theme.textColor};
 
 }
 .about-main section p {
   opacity: 0;
   transform: translateY(20px);
   transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
   font-family: 'PT Sans';
   width: 80vw;
   font-size: 20px;
   margin-left: 5rem;
   display: grid;
   align-items: center;
   text-align: center;
   box-shadow: 0 9px 24px rgba(0,0,0,.12), 0 9px 24px rgba(0,0,0,.12);

 }

 .about-main.visible section p {
   opacity: 1;
   transform: translateY(0);
 }

 .about-main.visible section p.step-1 {
   transition-delay: 0.2s;
 }

 .about-main.visible section P.step-2 {
   transition-delay: 0.4s;
 }

 .about-main.visible section P.step-3 {
   transition-delay: 0.6s;
 }

 .about-main.visible section P.step-4 {
   transition-delay: 0.8s;
 }

 .about-main.visible section P.step-5 {
   transition-delay: 1s;
 }

 .about-main.visible section P.step-6 {
   transition-delay: 1.2s;
 }

 .about-main.visible section P.step-7 {
   transition-delay: 1.4s;
 }

 .about-main.visible section P.step-8 {
   transition-delay: 1.6s;
 }

 .tutorial-heading{
    border: 1px soild balck;
    height: 70px;
    width: 900px;
    background-image: linear-gradient(to right bottom, #5c3ac7, #007bfa, #00a7f8, #00c9d1, #00e5a2, #1deb95, #37f186, #4ff774, #0fee98, #00e3b3, #2ad7c2, #5ac9c7);
    text-align: center;
    padding: 10px;
 position: relative;
 left: 190px;
    margin: 15px;
    ${'' /* font-family: open sans,Arial,sans-serif; */}
    font-family: 'Oswald', sans-serif;
    border-top-left-radius: 25%;
   border-top-right-radius: 25%;
   padding: 10px;
   border: 4px solid black;
 }
 .tutorial-container{
    background:black;
 
     margin: 30px 20px 0 20px;
    padding: 10px;
    border-top-left-radius: 5%;
   border-top-right-radius: 5%;
   box-shadow: 0 0 15px 2px #3b3b3b;

   font-family: open sans,Arial,sans-serif;
    background: ${({theme})=>theme.background}; 
   color: ${({theme})=>theme.textColor};
 }
 .left{
    background-image: linear-gradient(to left top, #19132e, #003459, #005878, #007d81, #009f75, #55a654, #8ca831, #c4a416, #e28731, #ef6b56, #e65a7c, #c95a9f);
    margin: 2rem;
    height: 755px;
    width: 700px;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    padding: 5px;
    font-size: 18px;
    border: 1px solid aqua;
    box-shadow: 0 0 15px 2px #3b3b3b;
    color: black;

 }
 .right{
    background-image: linear-gradient(to bottom, #eadce6, #d5b8d3, #bb96c5, #9a77b9, #725baf, #8750ab, #9c42a3, #b02d96, #e93875, #ff684e, #ffa02b, #e1d631);
    margin: 5rem;
    height: 885px;
    width: 700px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    position: relative;
    left: 500px;
    padding: 5px;
    font-size: 18px;
    box-shadow: 0 0 15px 2px #3b3b3b;
    color: black;
    border: 1px solid aqua;
 }
 .step{
    width:200px;
    height:60px;
    background-image: linear-gradient(to left, #840e65, #b72058, #d94b43, #e87c2a, #e3af17, #bec72d, #91db59, #50eb8d, #00e1b7, #00d2d6, #00c1e5, #31aee1);
    border-radius:50%;
    text-align: center;
    box-shadow: 0 0 15px 2px #3b3b3b;

 }

 .hand-position{
    height: 400px;
    width: 400px;
    margin: 1rem;
    border-radius: 20px;
    box-shadow: 0 0 15px 2px #3b3b3b;
    cursor: pointer;
 }
   


 .finger-corelation{
    height: 400px;
    width: 400px;
    margin: 1rem;
    border-radius: 20px;
    box-shadow: 0 0 15px 2px #3b3b3b;
    cursor: pointer;
 }


 .muscle{
    height: 370px;
    width: 370px;
    margin: 1rem;
    border-radius: 20px;
    box-shadow: 0 0 15px 2px #3b3b3b;
    cursor: pointer;
 }


 .speed-up{
    height: 380px;
    width: 380px;
    margin: 0.5rem;
    border-radius: 20px;
    box-shadow: 0 0 15px 2px #3b3b3b;
    cursor: pointer;
 }

 /* animation-styles.css */

 @keyframes fadeIn {
   from {
     opacity: 0;
   }
   to {
     opacity: 1;
   }
 }

 @keyframes slideInRight {
   from {
     transform: translateX(-100%);
   }
   to {
     transform: translateX(0);
   }
 }

 .animated {
   animation-duration: 1s;
   animation-fill-mode: both;
 }

 .tutorial-heading.animated {
   animation-name: fadeIn;
 }

 .left.animated {
   animation-name: slideInRight;
 }

 .right.animated {
  animation-name: slideInRight;
  animation-delay: 0.2s; /* Delay the animation for a smoother effect */
 }

 /* ===========Responsive for All Screen*================/
 
 
 
 

    


`
  