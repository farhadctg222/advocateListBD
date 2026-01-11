import React from 'react';
import Header from './componet/Header';
import Division from './componet/Division';
import CoordinatorMessage from './componet/CoordinatorMessage';
import ServiceAds from './componet/adsSection';
const page = () => {
  return (
    <div>
     <Header></Header>
     <Division></Division>
     <ServiceAds></ServiceAds>
     
     <CoordinatorMessage></CoordinatorMessage>
     
    </div>
  );
};

export default page;
