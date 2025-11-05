import React from 'react'
import Header from '../Common Pages/Header'
import Footer from '../Common Pages/Footer'
import Box from './Small/Box'
import LastBox from './Small/LastBox'
const Resume = () => {
    return (

        <>
            <Header />
            <div className="container-fluid bg-[#E6DACE] pb-[100px]">
                <div className="container-small">
                    <div className="py-[60px] flex justify-center items-center">
                        <li className=' list-[square] text-[blue] text-[54px]'></li>
                        <span className='text-black font-bold text-[38px]'>Resume</span>
                    </div>
                    <div className="flex justify-between pb-[50px] sm:px-[0px] px-[20px] ">
                        <h3 className='text-[26px] font-bold'>Experience</h3>
                        <button className='btn1'><a
                            href="/Resume.pdf"
                            download="Mit Rakholiya Resume.pdf"> DOWNLOAD CV</a>
                            </button>
                    </div>
                    <Box />
                    <LastBox />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Resume