import React, { useState, useEffect} from 'react';
import Character from './components/Character'
// import Logo from './assets/logo.png'
import axios from 'axios';
import { CardImg } from 'reactstrap';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.py4e.com/api/people')
      .then(res => {
        console.log(res, 'You Got It');
        setCharacters(res.data.results);
      })
      .catch(error => {
        console.log(error, 'Sorry No Dice');
      });
  }, []);

  return (
    <div className="App">
      <div className="logo"><CardImg></CardImg></div>
      <h1 className="header">Star Wars Folks</h1>
      {characters.map((character) => {
        return (
          <Character
            key ={character.id}
            name={character.name}
            gender={character.gender}
            birth_year={character.birth_year}
            eye_color={character.eye_color}
            hair_color={character.hair_color}
            skin_color={character.skin_color}
            height={character.height}
            mass={character.mass}
           />
        )
      })}
    </div>
  );
}


export default App;
