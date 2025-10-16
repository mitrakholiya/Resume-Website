import React from 'react'

const LastBox = () => {
    return (
        <div className='w-[90%] sm:w-[100%] m-[auto]'>
            <div className='sm:py-[55px] py-[20px] px-[20px] sm:px-[50px] bg-[white] shadow-2xl my-[30px]'>
                <h2 className='text-[26px] font-bold'>Skills</h2>
                <ul className='list-[square] columns-2 ps-[20px] py-[20px] font-light text-[14px]'>
                    <li className='marker:text-blue-800'>HTML</li>
                    <li className='marker:text-blue-800'>CSS</li>
                    <li className='marker:text-blue-800'>Bootstrap</li>
                    <li className='marker:text-blue-800'>TailWindCSS</li>
                    <li className='marker:text-blue-800'>JavaScript</li>
                    <li className='marker:text-blue-800'>Jquery</li>
                    <li className='marker:text-blue-800'>React.JS</li>
                    <li className='marker:text-blue-800'>Node.JS</li>
                    <li className='marker:text-blue-800'>Express.JS</li>
                    <li className='marker:text-blue-800'>MongoDB</li>
                </ul>

                <h2 className='text-[26px] font-bold'>Soft Skills</h2>
                <ul className='list-[square] columns-2 ps-[20px] py-[20px] font-light text-[14px]'>
                    <li className='marker:text-blue-800'>Communication Skill</li>
                    <li className='marker:text-blue-800'>TeamWork</li>
                    <li className='marker:text-blue-800'>Quick Learning</li>
                    <li className='marker:text-blue-800'>Time Management</li>
                </ul>
            </div>
        </div>
    )
}

export default LastBox
