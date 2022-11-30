import styles from './Styles/SearchBar.module.css' 

export default function SearchBar(props) {
   return (
      <div className={styles.search}>
         <input type='search' />
      <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
};