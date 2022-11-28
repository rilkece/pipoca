//React and Core Components
import { Link } from 'react-router-dom';

//Inbuilt Components
import Rating from '../Rating';

//Third components

//Styles Components
import './MovieCard.style.sass';
import NoImage from '../../assets/img/no-image.png'

const MovieCard = ({ iurl, movieDetails }) => {
  const addDefaultSrc = (ev)=>{
    ev.onerror = null;
    ev.src = NoImage;
  }

  return (
    <Link to={`/movie/${movieDetails.id}`} className="movie-card" key={movieDetails.id} >
      <div className="card-movie">
        <div className="card-movie__flipper">
          <div className="card-movie__front">
            <img src={iurl} className="card-movie__image" alt="Card Image" onError={(e)=>addDefaultSrc(e.currentTarget)}/>
          </div>

          <div className="card-movie__back">
            <div className="card-movie__content">
              <div className="card-movie__overview">
                {movieDetails.overview}
              </div>
              <div className="card-movie__release">
                Release Date: {movieDetails.release_date}
              </div>
              <Rating rate={movieDetails.vote_average / 2} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
