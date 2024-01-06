import React from 'react';
import Header from '../Components/Header';
import TypingBox from '../Components/TypingBox';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <div>
      {/* Header component for the top section of the page */}
      <div>
        <Header />
      </div>
      
      {/* Main content area for the TypingBox */}
      <div className="canvas">
        <TypingBox />
      </div>

      {/* Footer component for the bottom section of the page */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
