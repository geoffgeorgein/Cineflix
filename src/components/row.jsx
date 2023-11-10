import { useEffect, useState } from 'react'
import "./row.css";
import axios from 'axios';


const Row=({title,fetchUrl,isLargeRow=false})=> {

    const [movies,setMovies]=useState([]);
   
    const base_url = 'https://image.tmdb.org/t/p/original/'
  //  https://api.themoviedb.org/3/movie/top_rated?api_key=93fc46dcdcedb28efc872534b7b807bf&language=en-US
    // console.log("fetch",fetchUrl);
    useEffect(()=>{

        async function fetchData(){

            const request=await axios.get('https://api.themoviedb.org/3'+fetchUrl);
            setMovies(request.data.results);

            return request;
        }
        fetchData();
    },[fetchUrl])

  return (
    <div className='row'>
    <h2> {title}</h2>
      <div className='row_posters'>
          {
              movies.map((movie)=>(
                  ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) )&&

                  <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                  src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop}`}
                  alt={movie.name}
                  key={movie.id}


                  />
              ))
          }
      </div>
    
    </div>
  )
}

export default Row;