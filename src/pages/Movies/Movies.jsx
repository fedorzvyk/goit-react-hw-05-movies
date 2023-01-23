// import { SearchBox } from 'components/Searchbox/Searchbox';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { searchMovies } from 'api/api';
import { useEffect, useState } from 'react';
import { Form } from 'pages/Movies/Movies.styled';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const MovieName = searchParams.get('query') ?? '';
  useEffect(() => {
    
    // console.log(queri);
    if (!MovieName) {
      return;
    }
    searchMovies(MovieName).then(({ results }) => {
      setMovies(results);
    });
  }, [MovieName]);

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
      <Form state={{ from: location }} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={query}
          onChange={e => handleInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </Form>
      <MovieList movies={movies} />
    </main>
  );
};

export default Movies;
