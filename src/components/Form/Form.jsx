import React from 'react'
import styles from './Form.module.css'
import Validation from './validation'

export default function Form() {

    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    });

    const [error, setError] = React.useState({
        username: "",
        password: ""
    });


    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setError(
            Validation({
                ...userData,
                [e.target.name]: e.target.value
            })
        )
    }
    return (
        <div>
            <form >
                <div className={styles.container}>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={userData.username}
                        onChange={handleInputChange}
                    />
                    <p> {error.username ? error.username: null} </p>

                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                    <p> {error.password ? error.password : null} </p>
                </div>

                <button>LOGIN</button>
            </form>
        </div>
    )
}

//Primero agregaremos una etiqueta <div /> que envolverá a todo el componente. Tiene que haber una etiqueta <label /> y una <input /> tanto para el username como para la password. Por último, agrega una etiqueta <button />.