import React from 'react'
import Header from '../Common Pages/Header'
import Footer from '../Common Pages/Footer'
import Left from './Small/Left'
import Right from './Small/Right'

const About = () => {
    return (
        <div>
            <Header />

            <div className="container-fluid">
                <div className="flex items-center-safe">
                    <div className="w-[40%] bg-[#E6DACE] sm:h-[700px] hidden sm:block">
                        {/* LEFT SIDE FULL BACKGROUND */}
                    </div>
                    {/* THIS BOX GIVEN MARGIN --- */}
                    {/* Left is class for margin -300px */}
                    <div className="max-box bg-[#F4ECE6] left sm:h-[500px]">

                        <div className='flex sm:h-[100%] flex-wrap'>
                            {/* Left */}
                            <Left />

                            {/* Right Box */}
                            <Right/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
