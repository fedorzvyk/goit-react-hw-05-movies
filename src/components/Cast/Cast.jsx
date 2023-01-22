import { getCast } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from 'components/Box';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
const FAKE_PHOTO =
  'https://restorixhealth.com/wp-content/uploads/2018/08/No-Image.png';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(id).then(({ cast }) => {
      setCast(cast);
    });
  }, [id]);

  return (
    <Box display="flex" gridGap={5} flexWrap="wrap">
      {cast && (
        <>
          {cast.map(actor => (
            <Box width="100px" key={actor.id}>
              <img
                src={`${
                  actor.profile_path
                    ? BASE_POSTER_URL + actor.profile_path
                    : FAKE_PHOTO
                }`}
                alt="actor.name"
              />
              <h3>{actor.name}</h3>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};
