import React from 'react'; 
//Import the style sheet
import './App.css'; 
//Import ContactCard
import ContactCard from './ContactCard';


const App = () => {
  
  const contacts = [
    {
      imageURL:"https://via.placeholder.com/150", 
      name:"Jenny Han", 
      email:"jenny.han@notreal.com", 
      age: 25
    },
    {
      imageURL:"https://via.placeholder.com/150", 
      name:"Paul Rudd", 
      email:"paul.redguy@notreal.com", 
      age: 34
    },
    {
      imageURL:"https://via.placeholder.com/150", 
      name:"Jordy Checo", 
      email:"jcheco623@gmail.com", 
      age: 21
    }
  ];

  return(
      <div>
        {contacts.map((contact, index)=>{
            return(
              <ContactCard 
                key={index}
                imageURL={contact.imageURL} 
                name={contact.name}
                email={contact.email}
                age={contact.age} />
            )
        })}
      </div>
  )
}

export default App;
