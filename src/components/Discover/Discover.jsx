//React and Core Components
import { useEffect, useState } from 'react';
//Inbuilt Components
import { Discover_URL, fetchTopRatedMovies, API_KEY, BASE_API, } from '../../services/api';
import Slider from '../Slider/Slider';

//Third components
import { Link } from 'react-router-dom';
import { GiPunchBlast, GiBandit, GiAnimalSkull, GiButterfly, GiCannon, GiCharm, GiCastle,GiDramaMasks, GiJesterHat, GiMusicSpell } from 'react-icons/gi';
import {FaChartBar}  from 'react-icons/fa';
//Styles Components
import './Discover.style.sass';

const Discover = () => {
  const [discover1, setDiscover1] = useState([]);
  const [discover2, setDiscover2] = useState([]);
  const [discover3, setDiscover3] = useState([]);
  const [rated1, setRated1] = useState([]);
  const [rated2, setRated2] = useState([]);
  const [rated3, setRated3] = useState([]);
  const [genre, setGenre] = useState([]);
  const [active, setActive] = useState(0);

  const fetchLoadMore = async (genre) => await BASE_API.get(`/movie/top_rated?api_key=${API_KEY}&with_genres=${genre}`).then((response) => {
    setRated1(response.data.results.slice(0, 5));
    setRated2(response.data.results.slice(6, 11));
    setRated3(response.data.results.slice(12, 17));
  });

  useEffect(() => {
    fetch(Discover_URL+'&with_genres='+genre)
      .then((res) => res.json())
      .then((data) => {
        setDiscover1(data.results.slice(0, 5));
        setDiscover2(data.results.slice(6, 11));
        setDiscover3(data.results.slice(12, 17));
      });
      fetchLoadMore(genre);
  }, [genre]);

  const handleGenre = (genreNum, i) => {
    setGenre(genreNum);
    setActive(i);
    };
  return (
    <>
      <div className="genre-bar">
        <a className={active == 0 ? 'active' : ''} href="#" title='action' onClick={()=>handleGenre('', 0)}>
          ALL
        </a>
        <a className={active == 1 ? 'active' : ''} href="#" title='action' onClick={()=>handleGenre(28, 1)}>
          <GiPunchBlast  onClick={()=>handleGenre(28)}/>
        </a>
        <a className={active == 2 ? 'active' : ''} href="#" title='comedy' onClick={()=>handleGenre(35, 2)}>
          <GiJesterHat/>
        </a>
        <a className={active == 3 ? 'active' : ''} href="#" title='Crime' onClick={()=>handleGenre(80, 3)}>
          <GiBandit/>
        </a>
        <a className={active == 4 ? 'active' : ''} href="#" title='Animation' onClick={()=>handleGenre(16, 4)}>
          <GiButterfly/>
        </a>
        <a className={active == 5 ? 'active' : ''} href="#" title='Drama' onClick={()=>handleGenre(18, 5)}>
          <GiDramaMasks/>
        </a>
        <a className={active == 6 ? 'active' : ''} href="#" title='Fantasy' onClick={()=>handleGenre(14, 6)}>
          <GiCastle/>
        </a>
        <a className={active == 7 ? 'active' : ''} href="#" title='Horror' onClick={()=>handleGenre(27, 7)}>
          <GiAnimalSkull/>
        </a>
        <a className={active == 8 ? 'active' : ''} href="#" title='Romance' onClick={()=>handleGenre(10749, 8)}>
          <GiCharm/>
        </a>
        <a className={active == 9 ? 'active' : ''} href="#" title='War' onClick={()=>handleGenre(10752, 9)}>
          <GiCannon/>
        </a>
        <a className={active == 10 ? 'active' : ''} href="#" title='Music' onClick={()=>handleGenre(10402, 10)}>
          <GiMusicSpell/>
        </a>
        
      </div>
      <Slider slide1={discover1} slide2={discover2} slide3={discover3} section="discover" />
      <div className='container-title'>
        <p>TOP RATED</p>
        <Link to='/rated'>
        <button className='top-rated'><FaChartBar/></button>
        </Link>
      </div>
      
      <Slider slide1={rated1} slide2={rated2} slide3={rated3} section="top-rated"/>
    </>
  );
};

export default Discover;
