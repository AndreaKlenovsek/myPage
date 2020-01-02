import React from 'react';
import classes from './Contact.module.scss';



const Contact = () => {
    return ( 
        <div className={classes.Contact}>
            {/* <img className={classes.Prince} src="img/littlePrince.png" alt="prince" />  */}
            <h1>Get In Touch</h1>
            <div className={classes.ContactInfo}>
            <p>For more information, please contact me at:</p>
            <span><i className="fas fa-phone"></i> +386 04 676 092</span>
            <p>or email me...</p>
            <span><i className="far fa-envelope-open"></i> andrea.klenovsek@gmail.com</span>
            <a className={classes.MailBtn} href="mailto:andrea.klenovsek@gmail.com">Write Now</a>
            </div>
        </div>
       
     );
}
 
export default Contact;