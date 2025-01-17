import './styles/App.css'
import React from 'react'
import movieArray from './data/movies.json'
import Movie from './components/Movie';



const App = () => {
  return (
    <div className="App">
      <div className="title">
        <h1>Movie List</h1>
      </div>
      <div className="movies">
        {movieArray.map((movie) => (
          <Movie key={movie.id} 
          poster={movie.poster_path} 
          title={movie.original_title} 
          release_date={movie.release_date} 
          overview={movie.overview} 
          genre={movie.genres}
          />
        ))}
      </div>
    </div>
  )
};

export default App;