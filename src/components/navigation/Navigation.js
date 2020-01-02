import React from 'react';
import NavigationItem from './navigation/NavigationItem';
import classes from "./Navigation.module.scss";
const Navigation = (props) => {
    
    return ( 
        <ul className={classes.Navigation}>
            <NavigationItem link="/" exact>Profile</NavigationItem>
            <NavigationItem link="/projects">Projects</NavigationItem>
            <NavigationItem link="/contact">Contact</NavigationItem>
        </ul>
     );
}
 
export default Navigation;