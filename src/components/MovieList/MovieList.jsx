import { Link, useLocation } from 'react-router-dom';
import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import {Wraper, Title} from './MovieList.styled'



const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300/';
const FAKE_PHOTO = 'https://screench.com/upload/no-poster.jpeg';

export const MovieList = ({ movies }) => {
  // console.log(movies);
  const location = useLocation();

  return (
    <Box display="flex" gridGap={5} flexWrap="wrap">
      {movies.map(({poster_path, id, title}) => (
        <Wraper  key={id}>
          <Link
            key={id}
            state={{ from: location }}
            to={`/movies/${id}`}
          >
            <img
              src={`${
                poster_path
                  ? BASE_POSTER_URL + poster_path
                  : FAKE_PHOTO
              }`}
              alt={title}
            />

            <Title>{title}</Title>
          </Link>
        </Wraper>
      ))}
    </Box>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path:PropTypes.string,
      overview:PropTypes.string
    })
  ),
};
