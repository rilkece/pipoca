//React and Core Components
import { useEffect, useState } from 'react';
//Inbuilt Components
import { Discover_URL, img_url } from '../../services/api';

//Third components
import { Link } from 'react-router-dom';
import { GiPunchBlast, GiBandit, GiAnimalSkull, GiButterfly, GiCannon, GiCharm, GiCastle,GiDramaMasks, GiJesterHat, GiMusicSpell } from 'react-icons/gi';

//Styles Components
import './Discover.style.sass';

const Discover = () => {
  const [discover1, setDiscover1] = useState([]);
  const [discover2, setDiscover2] = useState([]);
  const [discover3, setDiscover3] = useState([]);
  const [genre, setGenre] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    fetch(Discover_URL+'&with_genres='+genre)
      .then((res) => res.json())
      .then((data) => {
        setDiscover1(data.results.slice(0, 5));
        setDiscover2(data.results.slice(6, 11));
        setDiscover3(data.results.slice(12, 17));
      });
  }, [genre]);

  const handleGenre = (genreNum, i) => {
    setGenre(genreNum);
    setActive(i);
    console.log('genNum', genreNum);
    };
  console.log(discover1);
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
     
      
      <div className="wrapper">
        <section id="section1">
          <a href="#section3" className="arrow__btn left-arrow">
            ‹
          </a>
          {discover1.map((movie) => (
            <div className="item" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
                <p className="duration">{movie.release_date.slice(0, 4)}</p>
              </Link>
            </div>
          ))}
          <a href="#section2" className="arrow__btn right-arrow">
            ›
          </a>
        </section>

        <section id="section2">
          <a href="#section1" className="arrow__btn left-arrow">
            ‹
          </a>
          {discover2.map((movie) => (
            <div className="item" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
                <p className="duration">{movie.release_date.slice(0, 4)}</p>
              </Link>
            </div>
          ))}
          <a href="#section3" className="arrow__btn right-arrow">
            ›
          </a>
        </section>

        <section id="section3">
          <a href="#section2" className="arrow__btn left-arrow">
            ‹
          </a>
          {discover3.map((movie) => (
            <div className="item" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
                <p className="duration">{movie.release_date.slice(0, 4)}</p>
              </Link>
            </div>
          ))}

          <a href="#section1" className="arrow__btn right-arrow">
            ›
          </a>
        </section>
      </div>
    </>
  );
};

export default Discover;
