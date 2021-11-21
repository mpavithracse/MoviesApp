import './App.css';
import { MoviesList } from './MoviesList';
import { AddColor } from './AddColor';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {
  const [movies, setMovies] = useState( [
    {
      id:'100',
      name: "Avengers",
      poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
      rating: "8.5",
      summary: "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
      trailer : ""
    },
    {
      id:'101',
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: "8",
      summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      trailer : ""
    },
    {
      id:'102',
      name: "Geetha Govindham",
      poster: "https://www.filmibeat.com/img/popcorn/movie_posters/geetha-govindam-20180625103412-17251.jpg",
      rating: "7.5",
      summary: "A young lecturer falls for an independent level-headed woman but unfortunately for him, things begin on the wrong foot and he has to try his best to clear the misunderstandings and convince her.",
      trailer : ""
    },
    {
      id:'103',
      name: "Titanic",
      poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      rating: "8.5",
      summary: "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
      trailer : ""
    },
    {
      id:'104',
      name: "Master",
      poster: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Master_2021_poster.jpg/220px-Master_2021_poster.jpg",
      rating: "7",
      summary: "Troubled alcoholic teacher JD is sent to teach at a juvenile reform school. But when he realises a dangerous criminal is using his students to cover up his crimes, JD sets out to stop him. Strong violence, drug misuse.",
      trailer : ""
    }
  ]);
  const [name,setName] = useState("");
  const [poster,setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const addMovie = () =>{
   const newMovie = {
     name:name,
     poster:poster,
     summary:summary,
     rating:rating
   };
   setMovies([...movies,newMovie])
   clearForm();
  }

  const clearForm =()=>{
    setName("");
    setPoster("");
    setSummary("");
    setRating("");

  }
  return(
    <div>
       <TextField id="filled-basic" label="Filled" variant="filled" 
        placeholder= "Movie name" value ={name}
        onChange={(event) => setName(event.target.value)} />
        <TextField id="filled-basic" label="Filled" variant="filled" 
        value = {poster} placeholder= "Poster URL"
        onChange={(event) => setPoster(event.target.value)} />
        <TextField id="filled-basic" label="Filled" variant="filled" 
         value = {summary} placeholder= "Summary"
        onChange={(event) => setSummary(event.target.value)} />
        <TextField id="filled-basic" label="Filled" variant="filled" 
         value = {rating} placeholder= "Rating"
        onChange={(event) => setRating(event.target.value)} />
      {/* <AddColor/> */}
      <Button variant="text"  onClick={() => addMovie()}>AddMovie</Button> 
      <MoviesList movies = {movies}/>
    </div>
  )
}

export default App;
