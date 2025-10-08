import React from 'react'
import Header from '../Common Pages/Header'
import Footer from '../Common Pages/Footer'
import { webTemp } from './Small/ProjectData'


const Project = () => {

    let data = webTemp

    return (

        <>
            <Header />
            <div className="container-fluid bg-[#E6DACE] pb-[100px]">
                <div className="container-small">
                    <div className="pt-[70px]  flex justify-center items-center">
                        <li className=' list-[square] text-[blue] text-[54px]'></li>
                        <span className='text-black font-bold text-[38px]'>Project</span>
                    </div>
                    <div className="py-[40px] flex justify-center items-center">
                        <span className='text-black font-light text-[16px] text-center px-[20px] sm:px-[0px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.t</span>
                    </div>
                </div>

                <div className="container-small">
                    {data.map((v, i) => {
                        return (<>
                            <div className="flex flex-col sm:flex-row bg-[white] shadow-2xl sm:h-[400px] my-[60px]">
                                {/* left box */}
                                <div className="sm:w-[60%]">

                                    <p className='py-[40px]'>
                                        <div className='b1 px-[40px]'>
                                            <span className='text-[blue] text-[26px] font-bold'>{v.name}</span>
                                            <br />
                                            <span>{v.role}</span>
                                        </div>
                                    </p>

                                    <p className='pb-[60px] px-[40px]'>{v.para}I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </div>
                                {/* right Box */}
                                <div className="sm:w-[40%] h-[300px]  sm:h-[100%] overflow-y-scroll scrollbar-hide">
                                    <img src={v.url} alt="" className='w-[100%] ' />
                                </div>
                            </div>
                        </>)
                    })}
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Project
