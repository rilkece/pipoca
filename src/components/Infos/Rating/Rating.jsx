//React and Core Components

//Inbuilt Components

//Third components


//Styles Components
import './Rating.style.sass'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"


const Rating = ({rate}) => {
    const stars = rate;
  return (
    <div className='rating'>
        <span>
            {stars >= 1 ? <FaStar /> : stars >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
            {stars >= 2 ? <FaStar /> : stars >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
            {stars >= 3 ? <FaStar /> : stars >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}

        </span>
        <span>
            {stars >= 4 ? <FaStar /> : stars >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
            {stars >= 5 ? <FaStar /> : stars >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>        
    </div>
  )
}

export default Rating