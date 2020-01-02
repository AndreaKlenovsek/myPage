import React from 'react';
import classes from "./Button.module.scss";


const Button = (props) => {
let modifiedBtn = [classes.Button];
if(props.id === props.curId) {    
modifiedBtn = [classes.Button, classes.White];
}

return ( 
        <button className={modifiedBtn.join(" ")} data-page={props.id} onClick={props.clicked}>{props.children}</button>
     );
}
 
export default Button;