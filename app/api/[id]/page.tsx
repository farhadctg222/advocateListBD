
import connectDB from "../.../connectdb";
 
export default function BlogPostPage({ params } {
  const id  = params.id
 const db = await connectDb()
 const data= db.find(_id===id)
 
  return (
    <div>
      <p>hi Mohammad Farhad Uddin  hello world {data.strinfy.json}</p>
    </div>
 
