import React from 'react';

const ContactCard = () => {


    return(
        <div className="contact-card">
            <img 
            src="https://via.placeholder.com/150" 
            alt="profile">
            </img>

            <div className='user-details'></div>
            <p>Name: Jenny Han</p>
            <p>Email: jenny.han@notreal.com</p>
            <p>Age: 25</p>
        </div>
    )
}

export default ContactCard