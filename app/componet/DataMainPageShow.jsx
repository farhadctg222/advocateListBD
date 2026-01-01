

import Link from "next/link";
import  './Division.css'

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
  // const services = lawdata
  // const revised = [...services].reverse();
  // const data = revised.slice(0, 10);
  const data = [...(lawdata || [])].reverse().slice(0, 10);


  

  return (
    <div>
    

      <div>
        {data.length === 0 && <p>No data available.</p> }
        {data.map((post, index) => {
        
          const slug = `${post._id}`;


          return (
            <div className="ProfileCard" style={{border:'1px solid black',margin:'3px', textAlign:'center', backgroundColor:'#f0f0f0'}} key={post._id || slug}>
              <div className="image">
                <img src={post.image} alt={post.name} />
              </div>

              <div className="nameHeader">
                <h1 style={{ color: "#2a7fba", fontWeight: "bold" }}>{post.name}</h1>
                <h5>{post.Education}</h5>
                <h6 style={{ color: "red" }}>{post.Specialist}</h6>
                <h5>{post.Desination}</h5>
                <h5 className="font-bold ">{post.workPlace}</h5>

                <Link href={`api/${slug}`}>
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
