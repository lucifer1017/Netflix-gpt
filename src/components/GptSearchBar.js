
import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
    const langIdentifier = useSelector(store => store.config.lang);
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className=' flex w-3/4 bg-black '>
                <input type='text'
                    placeholder={lang[langIdentifier].gptSearchPlaceholder}
                    className='p-4 m-4 w-3/4'
                    autoFocus />
                <button className='bg-red-600 m-4 text-white py-2 px-2 rounded-lg w-1/4'>
                    {lang[langIdentifier].search}
                </button>

            </form>

        </div>
    )
}

export default GptSearchBar