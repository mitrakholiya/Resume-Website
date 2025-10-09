import React from 'react'
import { Link } from 'react-router-dom'

const Right = () => {
    return (
        <>
            <div className="w-[55%] bg-white sm:ps-[30px] pe-[10px] h-[500px] sm11">
                <div className="flex flex-col sm:h-[100%] justify-between">
                    <div className=" text-[90px] font-bold">
                        Hello
                    </div>
                    <div className='text-[30px] pt-[10px]'>
                        Here's who I am & what I do
                    </div>
                    <div className='flex sm:py-[10px] py-[20px]'>
                        <Link to={"/resume"}>
                            <button className='btn1 me-[10px]'>RESUME</button>
                        </Link>
                        <Link to={"/project"}>
                            <button className='btn2'>PROJECTS</button>
                        </Link>
                    </div>
                    <p className='font-light text-[14px] sm:text-[15px] '>
                        I'm a passionate MERN Stack Developer with a strong focus on building responsive, user-friendly, and high-performance web applications. I enjoy turning complex problems into simple, beautiful solutions through clean code and modern design. My goal is to create digital experiences that are both functional and engaging.</p>
                    <p className='font-light text-[14px] sm:text-[15px] py-[10px]'>I’m driven by curiosity, creativity, and a love for technology. I aim to build web solutions that are simple, scalable, and make life easier for users..</p>
                </div>
            </div>
        </>
    )
}

export default Right
