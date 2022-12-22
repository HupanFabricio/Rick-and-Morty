import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

export function Card(props) {

   const [isFav, setIsFav] = useState(false);
   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.detailId === props.detailId) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false)
         props.deleteFavorites(props)
      } else {
         setIsFav(true)
         props.addFavorites(props)
      }
   }

   return (
      <div className={styles.container}>

         <div className={styles.butonConteiner}>
            {
               isFav ?
                  (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)
            }
            <button onClick={props.onClose}>X</button>
         </div>

         <div className={styles.poss}>
            <Link to={`/detail/${props.detailId}`}>
               <img src={props.image} alt={props.name} />
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

export function mapDispatchToProps(dispach) {
   return {
      addFavorites: function (personaje) {
         dispach(addFavorites(personaje))
      },
      deleteFavorites: function (personaje) {
         dispach(deleteFavorites(personaje))
      }
   }
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)