import React from 'react';

import Header from './componet/Header';
import Division from './componet/Division';
import ServiceAds from './componet/adsSection';

const page = () => {
  return (
    <div>
      <Header></Header>
      <Division></Division>
      <ServiceAds></ServiceAds>
    
    </div>
  );
};

export default page;