import React from 'react'; 
//Import the style sheet
import './App.css'; 
//Import ContactCard
import ContactCard from './ContactCard';


const App = () => {
  return(
      <div>
        <ContactCard/>
        <ContactCard/>
        <ContactCard/>
      </div>
  )
}

export default App;




/*
const App = () => {

  const title = "Hello React!"
  
  return(
    //The two below statements are equivalent: 

    //<div>This is my first react component!</div>
    //React.createElement("div", null, "This is my first react component!")

    <div>
      <h1>{title}</h1>
      <h2 onClick={()=> alert("you clicked the text!")}> This is my first react component, its dynamic</h2> 

    </div>


  )
}
*/