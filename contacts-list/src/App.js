import React, {useState, useEffect} from 'react'; 
//Import the style sheet
import './App.css'; 
//Import ContactCard
import ContactCard from './ContactCard';


const App = () => {
  
  const [results, setResults] = useState([])

  useEffect(()=> {
    fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setResults(data.results)
    });
  }, [])
  

  return(
      <div>
        {results.map((result, index)=>{
            return(
              <ContactCard 
                key={index}
                imageURL={result.picture.large} 
                name={result.name.first}
                email={result.email}
                age={result.dob.age} />
            )
        })}
      </div>
  )
}

export default App;
