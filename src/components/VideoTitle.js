
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold' >{title}</h1>
            <p className='py-6 text-lg w-2/4'> {overview} </p>
            <div className='flex items-center'>

                <button className='p-4 px-16  rounded-lg bg-white text-black flex items-center text-lg hover:bg-opacity-80'>
                    <FaPlay className='mr-2' /> <span>Play</span>
                </button>
                <button className='p-4 px-16 mx-3  rounded-lg bg-gray-500 text-white flex items-center text-lg hover:bg-opacity-80'>
                    <GoInfo className='mr-2' />  <span>More Info</span>
                </button>
            </div>
        </div>
    )
}

export default VideoTitle