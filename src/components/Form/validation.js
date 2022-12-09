export default function Validation(imputs) {

    const errors = {};

    const regexEmail = /\S+@\S+\.\S+/
    const regexPassword = new RegExp("[0-9]{0,}")
    //Username:
    if (!regexEmail.test(imputs.username)) {
        errors.username = "* El nombre de usuario tiene que ser un email";
    }

    if (!imputs.username) {
        errors.username = "* El nombre de usuario no puede estar vacío";
    }

    if (imputs.username.length > 35) {
        errors.username = "* El nombre de usuario no puede tener más de 35 caracteres.";
    }
    //Password:
    if (!regexPassword.test(imputs.password)) {
        errors.password = "* La contraseña tiene que tener al menos un número."
    }

    if ((imputs.password.length < 6) || (imputs.password.length > 10)) {
        errors.password = "* La contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
    }

    return errors;
} 