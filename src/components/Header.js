

import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    console.log(user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');

        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='absolute py-8 px-2  bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
            <img className="w-44" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
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