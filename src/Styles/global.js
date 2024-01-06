
import { createGlobalStyle } from "styled-components";

// Define global styles using styled-components
 export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
   }

/* styles for the body */

 body {
   margin: 0;
   padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
   min-height: 100vh;
   background:#b1b1b1;

 }

  /* Styles for the main canvas */

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

 /* Styles for the type box */

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

 /* Styling for individual words */
 .word{
    margin: 5px;
    padding-right: 2px;
 }
 /* Styling for the hidden input (used for typing) */
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


 .permalinks li a {
    color: ${({ theme }) => theme.typeBoxText};
    text-decoration: none;
    position: relative;
    display: inline-block;
    padding: 2px 5px;
    border-radius: 6px;
    overflow: hidden;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.permalinks li a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.textColor};
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s;
}

.permalinks li a:hover {
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.backgroundColor};
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.permalinks li a:hover::before {
    opacity: 0.3;
}





 /* Footer socials */
 .footer__socials {
   display: flex;
   align-items: center;
   gap: 0.5rem;
   margin-left: 20px; /* Add some spacing between the permalinks and socials */
 }

 .footer__socials span {
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

 .footer__socials span:last-child {
   margin-right: 0; /* Remove margin from the last icon to keep them on the same line */

 }

 .footer__socials span:hover{
     background: transparent;
     color:${({theme})=>theme.typeBoxText};
     border: 1px solid blue;

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
   border-top-left-radius: 5%;
   border-top-right-radius: 5%;
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
 

 .email{
     font-size: 1.4rem;
    font-family: 'Dancing Script';
    marginBottom: 2px;
    margin-right: 3px;
  
 }


 .signin-signup-box {
    width: 750px;
    height: 600px;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to top, #d16ba5, #c56db4, #b571c2, #a075cf, #847bd9, #6b8ae7, #4a98f2, #00a5f8, #00bdff, #00d3ff, #00e8f9, #5ffbf1);
    border-top-left-radius: 60px;
    border-bottom-right-radius: 60px;
    box-shadow: 0 9px 24px rgba(0, 0, 0, .12), 0 9px 24px rgba(0, 0, 0, .12);
}

.signin-signup-box .sign-up-btn {
    padding: 8px 16px;
    background: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.signin-signup-box .create-your-acnt-title {
    text-align: center;
    margin-right: 1rem;
    color: #094e63;
    font-size: 1.5rem;
    font-weight: bold;
    border-bottom: 2px solid #d4d7d3;
    font-family: 'Open Sans', Arial, sans-serif;
    margin-bottom: 2rem; /* Adjust margin to separate the title from the image */
}

.signin-signup-box .photo-div {
    margin: 1rem;
    flex: 1; /* Allow the photo-div to grow and take remaining space */
}

.signin-signup-box .photo-div h1{
  font-family: 'Open Sans', Arial, sans-serif;
  background-image: linear-gradient(to right bottom, #5c3ac7, #007bfa, #00a7f8, #00c9d1, #00e5a2, #1deb95, #37f186, #4ff774, #0fee98, #00e3b3, #2ad7c2, #5ac9c7);
  text-align: center;
  border-top-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  font-size: 20px;
}

.signin-signup-box .my-logo img {
    width: 100%; /* Allow the logo image to take the full available width */
    height: auto; /* Automatically adjust the height to maintain the original aspect ratio */
}

.signin-signup-box .my-image {
    margin-top: 2rem;
    width: 100%; /* Allow the my-image container to take the full available width */
    height: 300px; /* Set a fixed height for the my-image container */
    background: transparent;
    box-shadow: 0 9px 24px rgba(0, 0, 0, .12), 0 9px 24px rgba(0, 0, 0, .12);
    display: flex;
    align-items: center;
    justify-content: center;
}

.signin-signup-box .my-image img {
    max-width: 100%; /* Allow the image to take the full available width inside the container */
    height: auto; /* Automatically adjust the height to maintain the image's aspect ratio */
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

 /* CSS FOR TUTORIAL PAGE*/

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




 /* TUTORIAL PAGE animation-styles.css */

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


 @media (max-width: 768px) {

    /*  styles for mobile devices here */

    /* for header*/ 

    .header {
      padding: 5px;
      height: auto;
   }
   .navbar {
      width: 100%;
      float: none;
      margin-right: 0;
      flex-direction: column;
   }
   .logo {
      font-size: 20px;
      margin-left: 0;
      margin-bottom: 1rem;
   }
   .logo img {
      height: 50px;
      width: 200px;
   }
   .logo h6 {
      width: 100%;
      border-radius: 0;
   }
   .user-icon {
      margin-right: 1rem;
   }

  
   /* for canvas*/

   .canvas {
      padding: 1rem;
      margin: 1rem 1rem 0 1rem;
      border-top-left-radius: 10%;
      border-top-right-radius: 10%;
   }
  /* for Type box*/

  .type-box {
      max-width: 95%;
   }

   .words {
      font-size: 24px;
   }

   .word {
      margin: 3px;
      padding-right: 1px;
   }

   /*for upper menu*/
   .upper-menu {
        width: 95%;
        font-size: 1.2rem;
        padding: 1.2rem;
    }

    .counter {
        height: 40px;
        width: 40px;
        border-width: 3px;
    }

    .countdown-text {
        height: 35px;
        width: 35px;
        font-size: 0.9rem;
        padding-top: 6px;
    }

    /* for Time Mode*/
    .time-mode {
      font-size: 0.9rem;
      padding: 0.4rem 0.8rem;
   }

   /*footer*/
   .footer {
      padding: 10px 5px; /* Reduce padding for smaller screens */
   }

   .footer__logo img {
      height: 60px;
      width: 180px;
   }

   .permalinks li {
      font-size: 1rem;
   }

   .footer__socials span {
      font-size: 1rem;
      padding: 0.5rem;
   }
   
   .footer__socials span:last-child {
      margin-right: 5px; /* Adjust spacing for the last icon on mobile */
   }

   .footer__copyright {
      margin-top: 0.5rem;
   }

    /* For Login-Signup page */
    .signin-signup-box {
        width: 90%;
        height: auto;
        flex-direction: column; /* Stack elements vertically on smaller screens */
    }

    .signin-signup-box .create-your-acnt-title {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    .signin-signup-box .sign-up-btn {
        font-size: 1rem;
        font-family: 
    }

    .signin-signup-box .photo-div,
    .signin-signup-box .my-image {
        width: 100%; /* Allow both divs to take the full available width */
        max-width: 300px; /* Set a maximum width to maintain the original size */
        margin: 1rem auto; /* Center both divs horizontally */
    }
    .signin-signup-box .my-logo img {
        max-width: 100%; /* Allow the logo image to take the full available width */
    }

    .signin-signup-box .my-image img {
        max-width: 100%; /* Allow the image to take the full available width inside the container */
        height: auto; /* Automatically adjust the height to maintain the image's aspect ratio */
    }

    /*FOR ABOUT PAGE*/
    .about {
        width: 90%;
        margin: 2rem auto 0 auto;
        border-radius: 0; /* Remove border radius for smaller screens */
    }

    .about-main section p {
        font-size: 16px;
        margin-left: 0; /* Center the paragraph horizontally on smaller screens */
    }

    /*for TUTORIAL PAGE*/

    .tutorial-heading {
        width: 90%;
        max-width: 500px;
        left: 0;
        right: 0;
        margin: 15px auto;
        font-size: 22px;
    }

    .tutorial-container {
        width: 90%;
        margin: 20px auto 0 auto;
    }

   
    .left,
    .right {
        width: 98%;
        max-width: 550px;
        left: 0;
        right: 0;
        margin: 1rem auto;
        
    }

    .right {
        left: 0;
        right: 0;
        margin: 5rem auto;
    }
    .step {
        width: 100px;
        height: 100px;
        font-size: 20px;
      
    }

    
   
    .hand-position,
    .finger-corelation,
    .muscle,
    .speed-up {
        width: 100%;
        max-width: 260px;
        height: 260px;
        margin: 1rem auto;
    }

    /*FOR USER RESULT PAGE*/
    .user-profile {
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        margin: 0;
        width: 640px;
        height: 16rem;
        padding: 5px;
    }
    .user-result{
      border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: 1rem auto;
    }
    .user {
        font-size: 1rem;
        flex-direction: column;
        align-items: flex-start;
    }

    .picture {
        margin: 0.5rem auto;
        height: 100px;
        width: 100px;
    }

    .total-tests {
        font-size: 1.2rem;
    }

    .stats-Box {
    flex-direction: column;
    width: 95vw;
    padding: 20px;
  }

  .laft-stats {
    width: 100%;
    padding: 20px;
  }

  .right-stats {
    width: 100%;
    margin-top: 20px;
    padding: 20px;
  }

  .title {
    font-size: 18px;
  }
}


/* Media query for max-width 1024px (Tablets and larger mobile devices) */
@media (max-width: 1024px) {

  .navbar {
    width: 600px;
    margin-right: 2rem;
  }

  .logo img {
    height: 60px;
    width: 250px;
  }

  .logo h6 {
    width: 200px;
    font-size: 14px;
  }

  .nav-link {
    font-size: 18px;
   
   
  }
    .user-profile {
        border-top-left-radius: 40px;
        border-bottom-right-radius: 40px;
    }

    .user {
        font-size: 1rem;
    }

    .picture {
        height: 100px;
        width: 100px;
    }

    .total-tests {
        font-size: 1.8rem;
    }

    .table,
    .graph-user-page {
        width: 95%;
    }

    .stats-Box {
    flex-direction: column;
    width: 90vw;
    padding: 15px;
  }

  .laft-stats {
    width: 100%;
    padding: 15px;
  }

  .right-stats {
    width: 100%;
    margin-top: 15px;
    padding: 15px;
  }

  .title {
    font-size: 16px;
  }

  .modes{
    width: 650px;
  }
  .type-box{
    width: 750px; 
  }
  /* Media query for max-width 1024px (Tablets and smaller devices) */

}
  /* Media query for screen width between 769px and 853px */
@media (min-width: 769px) and (max-width: 853px) {
  .navbar {
    width: 400px;
    margin-right: 1rem;
  }

  .logo img {
    height: 50px;
    width: 180px;
  }

  .logo h6 {
    width: 130px;
    font-size: 12px;
  }

  .nav-link {
    font-size: 14px;
    
  }
  .canvas{
    padding: 20px;
    margin: 1rem 1rem 0 1rem;
  }
  .type-box{
    height:  300px;
    margin: 4rem;
   
  }
  .words{
    font-size: 12px;
    
    
  }
  .upper-menu{
    margin: 4rem;
    width: 650px;
  }
  .modes{
    margin-right: 5rem;
  }
 
}
/* Media query for screen width between 614px and 713px */
@media (min-width: 614px)and(max-width: 713px) {
  .navbar {
    width: 400px;
    margin-right: 1rem;
    
  }

  .logo img {
    height: 40px;
    width: 150px;
  }

  .logo h6 {
    width: 300px;
    font-size: 20px;
  }

  .nav-link {
    font-size: 40px;
    padding: 5px;
   
  }

  .user-icon svg {
    font-size: 25px;
  }
}
/* Media query for max-width 520px */
@media (max-width: 600px) {
  .header {
    height: 75px;
    padding: 10px;
  }

  .navbar {
    width: 200px;
    margin-right: 1rem;
  }

  .logo img {
    height: 40px;
    width: 120px;
  }

  .logo h6 {
    width: 100px;
    font-size: 10px;
  }

  .user-icon {
    margin-right: 1rem;
    
  }

  .user-icon svg {
    font-size: 15px;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-right: 1rem;
    text-align: center;
  }

  .nav-link {
    font-size: 12px;
    padding: 2px;
  }
  .canvas{
    
  }
  .type-box{
    
   
  }
  .words{
    width: 500px;
    padding: 5px;
    font-size: 20px;
   
  }
  
}

/* Media query for max-width 520px */
@media (max-width: 514px) {
  .header {
    height: 70px;
    padding: 5px;
    width: 550px;
  }

  .navbar {
    width: 200px;
    margin-right: 1rem;
  }
 
  .logo img {
    height: 40px;
    width: 120px;
  }

  .logo h6 {
    width: 100px;
    font-size: 10px;
  }


  .user-icon {
    margin-right: 1rem;
  }

  .user-icon svg {
    font-size: 18px;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-right: 1rem;
    text-align: center;
  }

  .nav-link {
    font-size: 10px;
    padding: 5px;
  }
  .footer{
    width: 550px;
  }
  .canvas{
    width: 520px;
  }
}
@media (max-width: 484px){
  .header {
    height: 100px;
   
  }
  .canvas{
   height: 600px;
   
  }


  .type-box{
    margin: 2rem;
  }
  .words{
   padding: 5px;
    font-size: 10px;
  }
}
@media (max-width: 365px){
  .header {
    height: 200px;
   
  }
  .canvas{
    margin-top: 5rem;
   height: 800px;
  }
  .footer{
    height: 500px;
  }
}

@media (max-width: 210px){
  .header {
    height: 350px;
   
  }
  .canvas{
    margin-top: 5rem;
   height: 1500px;
  }
  .footer{
    height: 500px;
  }
}

@media (max-width: 1075px){
  .canvas{
    padding: 20px;
  }
  .type-box{
    width: 870px;
    height:  300px;
    margin: 3rem; 
    padding: 10px;
  }
  .words{
    font-size: 20px;
     
    
  }
  .upper-menu{
    margin: 2rem;
  }
  .modes{
    margin-right: 5rem;
  }
}
@media(min-width: 1025px)and (max-width: 1070px){
.upper-menu{
  margin: 2rem;
}
.modes{
  width: 400px;
  margin: 2rem;
}

}
`
  
