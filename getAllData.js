export const getData = async () => {
  try {
    const res = await fetch("/api", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("API response not ok");
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    return []; // fallback
  }
};





export const  postData = async()=>{
   try {
    const result = await fetch(`/api/lawyer/${id}`,{
        next: {
            revalidate: 10
        }
    })
    console.log(result)
    if(!result.ok){
        return new Error("newtwork not response");
        
    }
    return result.json()
    
   } catch (error) {
    return console.log(error)
   }
}

