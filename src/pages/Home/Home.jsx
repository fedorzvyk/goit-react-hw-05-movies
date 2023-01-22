import { MovieList } from 'components/MovieList/MovieList';
import { getMovies } from 'api/api';
import { useState, useEffect } from 'react';
// import { Box } from 'BaseStyles/Box';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(1).then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
