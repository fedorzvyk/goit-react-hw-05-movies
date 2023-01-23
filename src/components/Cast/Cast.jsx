import { getCast } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from 'components/Box';
// import PropTypes from 'prop-types';

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
          {cast.map(({profile_path,id,name}) => (
            <Box width="100px" key={id}>
              <img
                src={`${
                  profile_path
                    ? BASE_POSTER_URL + profile_path
                    : FAKE_PHOTO
                }`}
                alt="actor.name"
              />
              <h3>{name}</h3>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};


// Cast.propTypes = {
//   cast: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       profile_path:PropTypes.string,
//     })
//   ),
// };
