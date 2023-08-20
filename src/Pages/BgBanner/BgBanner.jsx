import React from 'react';
import './BgBanner.css';
import bgImg from '../../assets/lawimg.jpg';
import clpImg from '../../assets/clp.png';

const BgBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px', 
  };

  const clpImageStyle = {
    marginLeft: '200px',
    marginTop: '80px',
  };

  return (
    <div className="bgBanner" style={bannerStyle}>
      <img src={clpImg} alt='clp img' height={'400px'} style={clpImageStyle} />
      <div>
        <h1>Full Service Law Firm in Dhaka, Bangladesh.</h1>
      </div>
    </div>
  );
};

export default BgBanner;
