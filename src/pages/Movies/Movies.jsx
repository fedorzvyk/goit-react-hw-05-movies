// import { SearchBox } from 'components/Searchbox/Searchbox';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { searchMovies } from 'api/api';
import { useEffect, useState } from 'react';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  useEffect(() => {
    const MovieName = searchParams.get('query') ?? '';
    // console.log(queri);
    if (!MovieName) {
      return;
    }
    searchMovies(MovieName).then(({ results }) => {
      setMovies(results);
    });
  }, [searchParams]);

  const handleInput = query => {
    setQuery(query);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
    setMovies([]);
    setQuery('');
  };

  return (
    <main>
      {/* <SearchBox value={MovieName} onChange={updateQueryString} /> */}
      <form state={{ from: location }} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={query}
          onChange={e => handleInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </main>
  );
};

export default Movies;
