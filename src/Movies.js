import { useState } from "react"
import { Counter } from "./Counter"

export function Movies({name,poster,rating,summary })
{

  const [show, setShow] = useState(true)
  const styles = {display : show ? "block": "none"}
  return(<div className = "Movie-Container">
    <img src = {poster} className = "Movie-Poster"/>
    <div className = "Movie-header">
    <h1 className="Movie-name">{name}</h1>
    <p className= "Movie-rating">{rating}</p>
    </div>
    <button onClick = {()=>setShow(!show)}>{show ? "Hide" : "Show"} description</button>
    <p style = {styles} className = "Movie-Summary">{summary}</p>
    <Counter/>
  </div>)
}
