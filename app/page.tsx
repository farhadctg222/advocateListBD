
import React, { Suspense } from 'react';
import Division from './component/Division';
import Headers from './component/Header';
import CoordinatorMessage from './component/CoordinatorMessage';
import ServiceAds from './component/ServiceAds';
import Loading from './component/loading';
const page = () => {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      
     <Headers></Headers>
     <Division></Division>
    
     <CoordinatorMessage></CoordinatorMessage>
     </Suspense>
     <Suspense fallback={<Loading></Loading>}>
     <ServiceAds></ServiceAds>
     
     </Suspense>
    

    </div>
  );
};

export default page;
