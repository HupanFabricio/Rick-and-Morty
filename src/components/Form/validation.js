export default function Validation(inputs) {

    const errors = {};

    const regexEmail = /\S+@\S+\.\S+/
    // const regexPassword = new RegExp("[0-9]{0,}")
    const regexPassword = /\d/g
    //Username:
    if (!inputs.username) {errors.username = "* Completar campo"}

    else if (!regexEmail.test(inputs.username)) { errors.username = "* No es un email" }

    else if (inputs.username.length > 35 ) {errors.username = "* Sobrepaso los 35 caracteres permitidos"} 
    //Password:
    if (!regexPassword.test(inputs.password)) { errors.password = "* Debe tener almenos 1 digito" }

    if((6 > inputs.password.length) || (10 < inputs.password.length))  { errors.password = "* Debe estar entre los 6 a 10 caracteres" }

    return errors;
} 