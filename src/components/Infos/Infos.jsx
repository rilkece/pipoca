//React and Core Components

//Inbuilt Components
import Rating from './Rating';

//Third components

//Styles Components
import './Infos.style.sass'


const Infos = ({details, credits}) => {
  console.log('details-infos', details);
  console.log('credits-infos', credits);
  return (
    <div>
      <h1>{details.title}</h1>
      <Rating rate={details.vote_average/2} />
      <p>{details.overview}</p>
      <h5>{details.release_date}</h5> 
      <h4>Genres: {details.genres?.map(
        (genre) => <badge>{genre.name}</badge>
      )}</h4>
      

    </div>
  )
}

export default Infos