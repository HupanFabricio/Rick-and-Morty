import { connect } from "react-redux"
import Card from "../Card/Card"
import styles from "./favorites.module.css"
import { deleteFavorites } from "../../redux/actions";

export function Favorites({ myFavorites, deleteFavorites }) {
  console.log(myFavorites)
  return (
    <div className={styles.contenedor}>
      {myFavorites.length? myFavorites.map((carta, index) =>
        <Card
          key={index}
          detailId={index}
          name={carta.name}
          species={carta.species}
          gender={carta.gender}
          image={carta.image}
          onClose={() => deleteFavorites(carta)}
        />

      ) : null}
    </div>
  )
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  }
}

export function mapDispatchToProps(dispach) {
  return {
     deleteFavorites: function (personaje) {
        dispach(deleteFavorites(personaje))
     }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)