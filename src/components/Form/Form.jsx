import React from 'react'
import styles from './Form.module.css'
import Validation from './validation'

export default function Form(props) {

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

    const handleSubmit = () => {
        props.login(userData)
    }
    return (
        <div className={styles.conteiner}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLicplJ5jpsZlMdNE_-RlL1rnR0jgqDc0XSg&usqp=CAU" alt="logo" />
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.div2}>
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

                    <button type="submit">LOGIN</button>  
                </div>
            </form>
        </div>
    )
}

//Primero agregaremos una etiqueta <div /> que envolverá a todo el componente. Tiene que haber una etiqueta <label /> y una <input /> tanto para el username como para la password. Por último, agrega una etiqueta <button />.