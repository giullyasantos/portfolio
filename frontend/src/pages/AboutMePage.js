import React from 'react'; 
import '../styles/styles.css'


const AboutMePage = () => {
  return (
    <div>
      <header className="navBar">
        <button className="menuButton">
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
      </header>
      <div id="aboutM" className="aboutMe">
	    <div className="profilePicture">S</div>
        <p>My name is Giullya Santos, I was born and raised in Brazil and currently am a third year 
        at University of Central Florida majoring in Computer Science. My passion for computers and 
        websites have always been part of me. Since I was a kid, I remember trying to build websites
        on Wix and they didn't turn to be so bad. My focus in on clean, animated and sophisticated 	front-end development that is user-friendly and eye-catching. On my free time, I love 	hanging out with my friends, hugging babies, going to church, reading the Bible and talking 	to God. 

	Below is my current top 5 songs on spotify:

	Check me out on social media!</p>
        <nav id="navItems">
          <div className="background"></div>
          <div className= "navContainer">
            <a className="underlineAnimation" href="#">Home</a>
            <a className="underlineAnimation" href="#">Projects</a>
            <a className="underlineAnimation" href="#">About</a>
            <a className="underlineAnimation" href="#">Contact</a>
          </div>
     	 </nav>
      </div>
    </div>
  );
};


export default AboutMePage;
