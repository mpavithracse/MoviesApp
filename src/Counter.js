import { useState } from "react";

export function Counter()
{
  const [likes,setlikes]=useState(0);
  const [dislikes, setDislikes] = useState(0);
  return(
  <div>
  <button className= "likes-dislikes" onClick = {()=>setlikes(likes+1)}> 👍 {likes}</button>
  <button className= "likes-dislikes" onClick = {()=>setDislikes(dislikes+1)}> 👎 {dislikes}</button>
  </div>
  )
}
