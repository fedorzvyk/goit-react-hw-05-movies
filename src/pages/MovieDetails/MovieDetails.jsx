import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieById } from 'api/api';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Box } from 'components/Box';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieById(id).then(data => {
      return setMovie(data);
    });
  }, [id]);

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  return (
    <main>
      <button onClick={handleGoBack}>Go back</button>
      {movie && (
        <div>
          <Box width="300px">
            <img src={`${BASE_POSTER_URL}${movie.poster_path}`} alt="" />
            <h2>{movie.title}</h2>
          </Box>
          <p>{movie.overview}</p>
          <div>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </main>
  );
};
