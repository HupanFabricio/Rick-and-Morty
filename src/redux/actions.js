import { ADD_FAVORITES, DELETE_FAVORITES } from "./types";

export function addFavorites(personaje) {
    return {
        type: ADD_FAVORITES,
        payload: personaje
    }
}

export function deleteFavorites(personaje) {
    return {
        type: DELETE_FAVORITES,
        payload: personaje
    }
}