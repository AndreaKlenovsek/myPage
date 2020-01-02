import React from 'react';
import classes from "./Profile.module.scss";


const Profile = (props) => {
   
const transfer = () => {
props.history.push('/projects') 
}

return ( 
<div className={classes.Profile}>   
     <p>Hello, I am</p>
     <h1 className={classes.Name}><span className={classes.Andrea}>Andrea</span> <br />
     Klenovšek</h1>
     <p className={classes.Text}>My name is Andrea Klenovšek, I finished marketing master’s degree at the Faculty of Economics and Business in Maribor. Initially, my interest was in digital advertising (social networks and SEA - Google Ads). However, later on, during my work and independent learning, I realized that my so-called "true love" lies in design, more precisely web design. During my studies and work, I used programs such as InDesign, Photoshop, Illustrator, and later on I began learning HTML, CSS, Bootstrap, Sass and JavaScript. My next goals are to improve my knowledge using React and Redux.</p>
     <a className={classes.Projects}onClick={transfer}>Projects</a>
     <div className={classes.Socials}>
          <a href="https://www.facebook.com/andrea.klenovsek" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/andrea_klenovsek/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://github.com/AndreaKlenovsek" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
     </div>
</div>   
);
}
 
export default Profile;