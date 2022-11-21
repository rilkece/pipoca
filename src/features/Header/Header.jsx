//React and Core Components

//Inbuilt Components
import logo from './logo.png';

//Third components
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';

//Styles Components
import './Header.style.sass';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo">
          <img className="logo" src={logo} alt="logo" />
          PIPOCA
        </Link>
        <form action="" className="header__search-bar">
          <input type="text" name="search" placeholder="Search" />
          <button type="submit">
            <FiSearch />
          </button>
        </form>
        <div className="header__extras">
          <button className="header__extras__login">
            <BsFillPersonFill />
          </button>
        </div>
        <div className="break"></div>
      </div>
    </header>
  );
};

export default Header;
