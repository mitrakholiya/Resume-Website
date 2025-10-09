import React from 'react'
import mit from '../../assets/04.jpg'
import { FaFacebook, FaLinkedin, FaInstagram,FaGithub } from "react-icons/fa";

const Left = () => {
    return (
        <>
            <div className='w-[45%] shadow-[-4px_0_10px_rgba(0,0,0,0.3)] sm11'>
                <div className=" flex flex-col items-center justify-evenly h-[440px]">
                    <img src={mit} alt="" style={{ width: "200px", height: "200px", borderRadius: "50%", backgroundColor: "pink" }} />
                    <h2 className='text-[31px] font-bold text-center'>Mit <br />Rakholiya</h2>
                    <hr className='w-[20%] h-[2px] bg-[blue]' />
                    <h3 className='text-[18px] font-light'>MARN Stack Devloper</h3>
                </div>
                <div className='bg-[white] w-[100%] h-[60px]'>
                    <div className="flex gap-2 text-2xl justify-center h-full items-center">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="hover:text-blue-600 transition duration-300" />
                    </a>
                    <a href="https://github.com/mitrakholiya" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-gray-800 transition duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/mit-rakholiya-42357735b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-blue-700 transition duration-300" />
                    </a>
                    <a href="https://instagram.com/mitrakholiya_?igsh=MXZkdnjvbXQ3emZpZQ==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="hover:text-pink-500 transition duration-300" />
                    </a>
                </div>
                </div>
            </div>

        </>
    )
}

export default Left
