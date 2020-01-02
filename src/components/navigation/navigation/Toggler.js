import React from 'react';
import classes from './Toggler.module.scss';


const Toggler = (props) => {
    
   let modifiedClasses = [classes.Hamburger];
    if(!props.show) {
        modifiedClasses = [classes.Hamburger, classes.Open];
    }

    return ( 
        <div className={classes.Toggler} onClick={props.open}>
      <div className={modifiedClasses.join(" ")}>
            <div></div>
            <div></div>
            <div></div>
        </div> 
        </div>
     );
}
 
export default Toggler;