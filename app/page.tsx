
import React, { Suspense } from 'react';
import Division from './component/Division';
import Headers from './component/Header';
import CoordinatorMessage from './component/CoordinatorMessage';
import ServiceAds from './component/ServiceAds';
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
