
//form validation(sign up/sign in) logic will be written here

export const checkValidData = (email, password) => {

    const isEmailValid = /[A-Za-z0-9\\._%+\\-]+@[A-Za-z0-9\\.\\-]+\.[A-Za-z]{2,}/.test(email);
    const isPassowrdValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid)
        return "Email is not valid";
    if (!isPassowrdValid)
        return "Password is not vaild";

    return null;

}