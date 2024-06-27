import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NETFLIX_BG_LOGO } from '../utils/constants'

const GptSearch = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img src={NETFLIX_BG_LOGO}
                    alt="bglogo" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />

        </div>
    )
}

export default GptSearch