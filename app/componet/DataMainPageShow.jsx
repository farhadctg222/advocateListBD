// 'use client'
// import React from 'react';

// import './Division.css'


// const data = async () => {

//     const res = await fetch('http://localhost:3000/api')

//     const datres = await res.services.json()
//     return datres

// }

// const DataMainPageShow = async () => {
//     const lawdata = await data()
//     console.log(lawdata)




//     return (
//         <div>
//   <h1>All Post</h1>

//   <div>
//     {lawdata?.map((post) => (
//       <div className='ProfileCard'>
//             <h1 className="headerProfile"style={{border:'1px solid black'}}>
//             <title>{post.name} <br />{post.Education} <br />{post.Desination}</title>  
//               <a href=""><title>{post.ChamberName} <br />{post.workPlace}</title></a>
//             <div className="image">
//                 <img src={post.image} alt="image" />
//                </div>
//                <div className="nameHeader">
//                <h3 style={{color:'#2a7fba',}} >{post.name}</h3>
//                 <h5 >{post.Education}</h5>
//                 <h6 style={{color:'red',fontFamily:'robute,sans-serif'}}>{post.Specialist}</h6>
//                 <h5 >{Desination}</h5>
//                 <h5 className='desination' >{workPlace}</h5>
     
//                 <Link to={`/${space}`} style={{textDecoration:'none',color:'white'}}>  <button className='seeChamber' style={{textDecoration:'none',color:'white'}}  >See Chamber</button> </Link>
//                </div></h1>
              
              
             
             
            
//         </div>
//     ))}
//   </div>
// </div>





                        
//     );
// };

// export default DataMainPageShow;

import Link from "next/link";
import './Division.css'

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api`,
    {
      cache: "no-store",
      next: { revalidate: 10 }, // Next.js App Router way
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};


const DataMainPageShow = async () => {
  const lawdata = await getData();
  const services = lawdata?.services || [];

  return (
    <div>
    

      <div>
        {services.length === 0 && <p>No data available.</p> }
        {services.map((post, index) => {
          const slug = post.name
            .replace(/\s+/g, "-")
            .toLowerCase();

          return (
            <div className="ProfileCard" style={{border:'1px solid black', textAlign:'center', backgroundColor:'#f0f0f0'}} key={index}>
              <div className="image">
                <img src={post.image} alt={post.name} />
              </div>

              <div className="nameHeader">
                <h1 style={{ color: "#2a7fba", fontWeight: "bold" }}>{post.name}</h1>
                <h5>{post.Education}</h5>
                <h6 style={{ color: "red" }}>{post.Specialist}</h6>
                <h5>{post.Desination}</h5>
                <h5 className="desination">{post.workPlace}</h5>

                <Link href={`/${slug}`}>
                  <button className="seeChamber">
                    See Chamber
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataMainPageShow;
