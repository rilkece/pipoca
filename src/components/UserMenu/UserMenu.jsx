//React and Core Components
import { useRef, useState, useEffect } from 'react';

//Inbuilt Components

//Third components

//Styles Components
import './UserMenu.style.sass';
import { GiPopcorn } from 'react-icons/gi';
import avatar from '../../assets/img/avatar.png';

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userRef = useRef(null);
  const show = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="menu-container">
      <button className="menu-trigger" onClick={show} >
        <span>Erickle</span>
        <img src={avatar} alt="avatar" />
      </button>
      <nav ref={userRef} className={`menu ${showMenu ? 'show' : ''}`}>
        <ul>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserMenu;
