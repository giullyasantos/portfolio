import React from 'react'; 
import '../styles/styles.css'


const NavBar = () => {
  return (
    <div>
      <div className="navBar">
        <button className="menuButton" id="menu">
          <svg viewBox="0 0 48 48" width="48" height="48">
            <circle className="corners" cx="12" cy="12" r="3" ></circle>
            <circle className="corners" cx="36" cy="12" r="3" ></circle>
            <circle className="corners" cx="12" cy="36" r="3" ></circle>
            <circle className="corners" cx="36" cy="36" r="3" ></circle>
            <circle className="circles" cx="24" cy="12" r="3" ></circle>
            <circle className="circles" cx="12" cy="24" r="3" ></circle>
            <circle className="circles" id="middle" cx="24" cy="24" r="3" ></circle>
            <circle className="circles" cx="36" cy="24" r="3" ></circle>
            <circle className="circles" cx="24" cy="36" r="3" ></circle>
          </svg>
        </button>      
      </div>  
    </div>
  );
};


export default NavBar;
