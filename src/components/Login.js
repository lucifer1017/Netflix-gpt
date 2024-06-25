
import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { NETFLIX_BG_LOGO, USER_AVATAR } from '../utils/constants';
const Login = () => {

    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    // const repassword = useRef(null);


    const handleButtonClick = () => {
        //Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR

                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;

                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))

                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
    }
    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={NETFLIX_BG_LOGO}
                    alt="bglogo" />
            </div>
            <form className=' text-white absolute p-12 bg-black w-3/12  my-40 mx-auto right-0 left-0 rounded-md bg-opacity-80'
                onSubmit={(e) => e.preventDefault()}>
                <h1 className=' text-3xl font-bold py-4 my-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input
                    ref={name}
                    type="text"
                    placeholder='Full Name'
                    className='p-2 my-4 w-full rounded-md bg-gray-700' />}
                <input type="text"
                    ref={email}
                    placeholder='Email Address'
                    className='p-2 my-4 w-full rounded-md bg-gray-700' />

                <input type="password"
                    ref={password}
                    placeholder='Enter Password'
                    className='p-2 my-4 w-full rounded-md bg-gray-700' />

                {/* {!isSignInForm && <input type="password"
                ref={repassword} 
                placeholder='Re-Enter Password' 
                className='p-2 my-4 w-full rounded-md bg-gray-700' />} */}
                <p className='text-lg font-bold text-red-400'> {errorMessage} </p>
                <button className=' p-4 my-6 bg-red-700 rounded-md w-full'
                    onClick={handleButtonClick}

                >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignIn}>
                    {isSignInForm ? "New to Netflix? Sign up now. " : "Already a user? Sign in."}</p>
            </form>
        </div>
    )
}

export default Login