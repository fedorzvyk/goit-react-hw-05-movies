import { Link, useLocation } from 'react-router-dom';
import { Box } from 'components/Box';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300/';
const FAKE_PHOTO = 'https://screench.com/upload/no-poster.jpeg';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <Box display="flex" gridGap={5} flexWrap="wrap">
      {movies.map(movie => (
        <Box width="250px" key={movie.id}>
          <Link
            key={movie.id}
            state={{ from: location }}
            to={`/movies/${movie.id}`}
          >
            <img
              src={`${
                movie.poster_path
                  ? BASE_POSTER_URL + movie.poster_path
                  : FAKE_PHOTO
              }`}
              alt=""
            />

            <h3>{movie.title}</h3>
          </Link>
        </Box>
      ))}
    </Box>
  );
};
