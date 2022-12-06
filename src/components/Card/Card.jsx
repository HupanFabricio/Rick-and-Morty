import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div className={styles.container}>

         <div className={styles.butonConteiner}>
            <button onClick={props.onClose}>X</button>
         </div>

         <div className={styles.poss}>
            <Link to={`/detail/${props.detailId}`}>
               <img src={props.image} alt={props.name}/> 
               <h2>{props.name}</h2>
            </Link>
         </div>
         
         <div className={styles.data}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>

      </div>
   );
}