//React and Core Components
import { useEffect, useState } from 'react';
import { img_url_poster, API_KEY } from '../../services/api';
import { useParams } from 'react-router-dom';

//Inbuilt Components
import Poster from '../../components/Poster';
import Infos from '../../components/Infos';


//Third components

//Styles Components
import './Details.style.sass'

const Details = () => {
  const { moveid } = useParams();
  const [details, setDetails] = useState([]) ;
  const [credits, setCredits] = useState([]) ;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${moveid}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log('details', data);
      });
      fetch(
        `https://api.themoviedb.org/3/movie/${moveid}/credits?api_key=${API_KEY}&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => {
          setCredits(data);
          console.log('credits', data);
        });
  }, [moveid]);

 


  return (
    <div className='container-details'>
    <div className='container-poster'>
      <Poster imgUrl={`${img_url_poster}/${details.poster_path}`} title="title" />
    </div>
    <div className='container-info'>
      <Infos details={details} credits={credits} />
    </div>
    </div>
    
  );
};

export default Details;
