
import React, { Component} from 'react';
import Navigation from '../Navigation';
import classes from "./Sidedrawer.module.scss";
import Toggler from './Toggler';


class Sidedrawer extends Component {
    state = {
        open: false,
      }
    

    handleToggleBtn = () => {
        this.setState({
            open: !this.state.open,
        });
       
      }

render() {

    let attachedClasses = "";
if(this.state.open) {
attachedClasses = [classes.Nav];
} else {
attachedClasses = [classes.Closed];
}
    return (  
        <div className={classes.Sidedrawer}>
            <div>
                <Toggler open={this.handleToggleBtn} show={this.state.open} />
            </div>
            <nav className={attachedClasses.join("")}>
                <Navigation/>
            </nav>
        </div>
    );
}
}
 
export default Sidedrawer;