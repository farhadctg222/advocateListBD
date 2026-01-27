
import React, { Suspense } from 'react';
import Division from './componet/Division';
import Headers from './componet/Header';
import ServiceAds from './componet/adsSection';
import CoordinatorMessage from './componet/CoordinatorMessage';

const page = () => {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      
     <Headers></Headers>
     <Division></Division>
     <ServiceAds></ServiceAds>

     <CoordinatorMessage></CoordinatorMessage>
     </Suspense>
    </div>
  );
};

export default page;
