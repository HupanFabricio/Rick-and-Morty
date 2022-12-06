import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const {characters} = props
   let pintarCartas = characters.map((elements, i) => <Card 
      detailId={elements.id}
      key={i}
      name={elements.name}
      species={elements.species}
      gender={elements.gender}
      image={elements.image}
      onClose={() => props.onClose (elements.id)} />)
   return (<div className={styles.container}>
      {pintarCartas}
   </div>);
}
