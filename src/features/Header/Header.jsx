//React and Core Components
import { useState } from 'react';
import { Link } from 'react-router-dom';

//Inbuilt Components
import logo from './logo.png';
import UserMenu from '../../components/UserMenu';

//Third components
import { FiSearch } from 'react-icons/fi';

//Styles Components
import './Header.style.sass';

const Header = () => {
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo">
          <img className="logo" src={logo} alt="logo" />
          PIPOCA
        </Link>
        <form action="" className="header__search-bar">
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleQuery}
          />
          <Link to={query !== '' ? `/search/${query}` : ''} >
            <button type="submit">
              <FiSearch />
            </button>
          </Link>
        </form>
        <div className="header__extras">
          <UserMenu />
        </div>
        <div className="break"></div>
      </div>
    </header>
  );
};

export default Header;
