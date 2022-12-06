import { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { Routes, Route } from 'react-router-dom'
import About  from './components/About/About.jsx'
import Detail from './components/Detail/Detail';


function App () {

  const [characters,setCharacters]= useState([]);
  
  function onSearch(character) {

    
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
          let aux = false; 
          characters.forEach(cards => {
            if(cards.id===data.id){
             aux=true;
            }
          });
          if (aux) {
            window.alert("Ya se encuentra este personaje!")
          }else if(data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            // console.log(data.id)
            console.log(characters)
          } else {
             window.alert('No hay personajes con ese ID');
          }
        });
  }

  const onClose = (id) => {
    // console.log (id); 
    // console.log(characters);
    // const newCharacters = characters.filter((char) => char.id !== );
    setCharacters(characters.filter(char => char.id !== id));
  }
 
 return (
   <div className='App'>
      
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/' element={<Cards onClose={onClose} characters={characters} />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
  
    </div>
  )
}

export default App
