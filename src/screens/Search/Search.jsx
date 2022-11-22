//React and Core Components
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { img_url_card, API_KEY, fetchSearch } from '../../services/api';

//Inbuilt Components
import MovieCard from '../../components/MovieCard/MovieCard'
//Third components

//Styles Components
import './Search.style.sass';

const Search = () => {
  const { query } = useParams();
  const [search, setSearch] = useState([]) ;

  useEffect(() => {
    fetchSearch(query)
      .then((data) => {
        setSearch(data.data.results);
      });    
  }, [query]);

  return (
    <div className="container-search">
      <div className="container--fluid">
        <div className="container__row">
          {search.map((movie) => (
            <div className="container__col-sm-6 container__col-md-4 container__col-lg-3" key={movie.id} >
              <MovieCard iurl={`${img_url_card}/${movie.poster_path}`} movieDetails={movie}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
