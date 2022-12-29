import { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useEffect } from 'react';
import Favorites from './components/Favorites/Favorites';



function App() {

  //Variabes:
  const username = 'ejemplo@gmail.com';
  const password = '1password';
  const navigate = useNavigate();
  const location = useLocation();

  //States:
  const [access, setAccess] = useState(false)
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  //Functions:

  const login = (userData) => {
    if ((username === userData.username) && (password === userData.password)) {
      setAccess(true);
      navigate('/home');
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        let aux = false;
        characters.forEach(cards => {
          if (cards.id === data.id) {
            aux = true;
          }
        });
        if (aux) {
          window.alert("Ya se encuentra este personaje!")
        } else if (data.name) {
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

      {location.pathname !== "/" && <Nav onSearch={onSearch}  />}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards onClose={onClose} characters={characters} location={ location.pathname } />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites characters={characters} />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>

    </div>
  )
}

export default App
