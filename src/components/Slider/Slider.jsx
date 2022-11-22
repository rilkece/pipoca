//React and Core Components
import { useEffect, useState } from 'react';

//Inbuilt Components
import { img_url } from '../../services/api';

//Third components
import { Link } from 'react-router-dom';

//Styles Components
import './Slider.style.sass';

const Slider = ({slide1, slide2, slide3, section}) => {
  return (
    <div className="wrapper">
        <section id={`${section}1`}>
          <a href={`#${section}3`} className="arrow__btn left-arrow">
            ‹
          </a>
          {slide1.map((movie) => (
            <div className="item" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
                <p className="duration">{movie.release_date.slice(0, 4)}</p>
              </Link>
            </div>
          ))}
          <a href={`#${section}2`} className="arrow__btn right-arrow">
            ›
          </a>
        </section>

        <section id={`${section}2`}>
          <a href={`#${section}1`} className="arrow__btn left-arrow">
            ‹
          </a>
          {slide2.map((movie) => (
            <div className="item" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
                <p className="duration">{movie.release_date.slice(0, 4)}</p>
              </Link>
            </div>
          ))}
          <a href={`#${section}3`} className="arrow__btn right-arrow">
            ›
          </a>
        </section>

        <section id={`${section}3`}>
          <a href={`#${section}2`} className="arrow__btn left-arrow">
            ‹
          </a>
          {slide3.map((movie) => (
            <div className="item" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
                <p className="duration">{movie.release_date.slice(0, 4)}</p>
              </Link>
            </div>
          ))}

          <a href={`#${section}1`} className="arrow__btn right-arrow">
            ›
          </a>
        </section>
      </div>
  )
}

export default Slider