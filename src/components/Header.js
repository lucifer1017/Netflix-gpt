

import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
    const showGptSearch = useSelector(store => store?.gpt?.showGptSearch);
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

    const handleGptButtonClick = () => {
        dispatch(toggleGptSearchView());
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate('/');

        }).catch((error) => {
            // An error happened.
        });
    }
    const handleLanguageChange = (e) => {
        // console.log(e.target);
        dispatch(changeLanguage(e.target.value));

    }
    return (
        <div className='absolute py-4 px-2  bg-gradient-to-b from-black z-20 w-screen flex justify-between'>
            <img className="w-44" src={NETFLIX_LOGO}
                alt='netflix-logo' />

            {user && <div className='flex p-2'>

                {showGptSearch && <select className='px-4 my-4 mx-2 bg-black text-white border border-white'
                    onChange={handleLanguageChange}>

                    {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier}
                        value={lang.identifier}>
                        {lang.name}
                    </option>)}

                </select>}
                {/* {!showGptSearch && <button className='bg-purple-700 text-white rounded-lg my-4 mx-2 px-4'
                    onClick={handleGptButtonClick}
                >GPT Search🎇</button>
                } */}
                <button className='bg-purple-800 text-white rounded-lg my-4 mx-2 px-4'
                    onClick={handleGptButtonClick}
                >{!showGptSearch ? 'GPT Search🎇' : 'Homepage'}</button>

                <img className='w-[50px] h-[50px] py-auto m-4' src={user.photoURL}
                    alt='userlogo' />
                <button className="font-bold text-white py-1 pr-2 m-4"
                    onClick={handleSignOut}>Sign Out</button>
            </div>}
        </div>
    )
}

export default Header