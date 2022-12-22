import { connect } from "react-redux"
import Card from "../Card/Card"
import styles from "./favorites.module.css"

export function Favorites({ myFavorites }) {
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

export default connect(mapStateToProps, null)(Favorites)