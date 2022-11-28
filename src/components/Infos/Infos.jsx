//React and Core Components
import { useContext, useState } from 'react';


//Inbuilt Components
import Rating from '../Rating';

//Third components

//Styles Components
import './Infos.style.sass';

//Contexts & Services
import { RatingContext } from '../../contexts/RatingContext.jsx';

const Infos = ({ details, credits }) => {
  const { state, dispatch: ratingDispatch } = useContext(RatingContext);
  const { rating } = state;
  const addToRatingHandler = (rating) => {
    const movieRate = {}
    ratingDispatch({ type: 'SET_RATING', payload: {[details.id]: rating} });
    localStorage.setItem('rating', rating);
  };

  return (
    <div>
      <h1>{details.title}</h1>
      <Rating rate={details.vote_average / 2} />
      <p>{details.overview}</p>
      <h5>{details.release_date}</h5>
      <h4>
        Genres:{' '}
        {details.genres?.map((genre) => (
          <div className="badge" key={genre.id}>
            {genre.name}
          </div>
        ))}
      </h4>
      <br />
      <form className="rating-form">
        <label htmlFor="rating">What did you think?</label>
        <select
          name="rating"
          id="rating"
          value={rating?rating[details.id]?rating[details.id]:'':''}
          onChange={(e) => addToRatingHandler(e.target.value)}
        >
          <option value="">You've watched?</option>
          <option value="1">Useless</option>
          <option value="2">Poor</option>
          <option value="3">Ok</option>
          <option value="4">Good</option>
          <option value="5">Excellent</option>
        </select>
      </form>
    </div>
  );
};

export default Infos;
