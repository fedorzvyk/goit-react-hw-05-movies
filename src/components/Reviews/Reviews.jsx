import { getReviews } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(id).then(({ results }) => {
      setReviews(results);
    });
  }, [id]);

  return (
    <>
      {reviews.length !==0 ? (
        <>
          {reviews.map(review => (
            <div key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </div>
          ))}
        </>
      ): <h3>No reviews</h3> }
    </>
  );
};
