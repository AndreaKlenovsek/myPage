import React, { Component,  Suspense} from 'react';
import classes from "./CvContainer.module.scss";

import {Route, Switch, withRouter} from "react-router-dom";
import Profile from '../components/profile/Profile';


// import Project from '../components/projects/Project';
// import Contact from '../components/contact/Contact';
import Navigation from '../components/navigation/Navigation';
import Sidedrawer from '../components/navigation/navigation/Sidedrawer';
import Logo from '../components/navigation/Logo';
const Project = React.lazy(() => import('../components/projects/Project'));
const Contact = React.lazy(() => import('../components/contact/Contact'));
class CvContainer extends Component {
    state = {
        open: false,
      }
    

    handleToggleBtn = () => {
        this.setState({
            open: !this.state.open,
        });
       
      }



    render() { 
    
        let img = <img className={classes.Prince} src="img/mali princ.png" alt="prince" /> 
        if(this.props.location.pathname === "/contact") {
        img = <img className={classes.Prince} src="img/littlePrince.png" alt="prince" /> ;
        }
  console.log(this.props);
        return ( 
            
            <div className={classes.CvContainer}>
               {img}
              
            <header>
            <Logo />
            <Navigation />
            <Sidedrawer open={this.handleToggleBtn} show={this.state.open} />
            </header>
            <Switch>
          
            <Route path="/projects" render={() => <Suspense fallback={<div>Loading...</div>}><Project /></Suspense>}  />
            <Route path="/contact" render={() => <Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
            <Route path="/" exact component={Profile} />
            
            </Switch>
            </div>
           
         );
    }
}
 
export default withRouter(CvContainer);