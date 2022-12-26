import { useState } from 'react';
import styles from './SearchBar.module.css' 

export default function SearchBar(props) {

   function handleSubmit(e) {
      e.preventDefault();
      if(e.keyCode === 13)
      console.log('You clicked submit.');
   }

   const [character,setCharacter] = useState("");

   const handleChange = (e) => {
      const { value } = e.target;
      setCharacter(value);
   }

   return (
      <form className={styles.search} onSubmit={handleSubmit}>
         <input id="text" type='text' onChange={handleChange} placeholder="Numero de personaje.."/>
         <button id='submit' onClick={ () => props.onSearch( character )}>Agregar</button>
      </form>
   );
};