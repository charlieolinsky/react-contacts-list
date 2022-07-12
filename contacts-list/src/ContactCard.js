import React, {useState} from 'react';

const ContactCard = (props) => {

    const [showAge, setShowAge] = useState(false); //[state, method to change state]
    
    return(
        <div className="contact-card">
            <img src= {props.imageURL} alt="profile"></img>

            <div className='user-details'>
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={()=> setShowAge(!showAge) }>Toggle Age</button>
                {showAge ? <p>Age: {props.age}</p> : null}
            </div>
        </div>
    )
}

export default ContactCard