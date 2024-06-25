

import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, USER_AVATAR } from '../utils/constants';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;

                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: USER_AVATAR }))
                // // ...
                navigate('/browse');
            } else {
                // User is signed out
                // 
                dispatch(removeUser());
                navigate('/');

            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate('/');

        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='absolute py-8 px-2  bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
            <img className="w-44" src={NETFLIX_LOGO}
                alt='netflix-logo' />

            {user && <div className='flex p-2'>
                <img className='w-[50px] h-[50px] py-auto m-4' src={user.photoURL}
                    alt='userlogo' />
                <button className="font-bold text-white m-4"
                    onClick={handleSignOut}>Sign Out</button>
            </div>}
        </div>
    )
}

export default Header