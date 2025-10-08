import React from 'react'

const Right = () => {
    return (
        <>
            <div className="w-[55%] bg-white sm:ps-[30px] h-[500px] sm11">
                <div className="flex flex-col sm:h-[100%] justify-between">
                    <div className=" text-[90px] font-bold">
                        Hello
                    </div>
                    <div className='text-[30px] pt-[10px]'>
                        Here's who I am & what I do
                    </div>
                    <div className='flex py-[20px] sm:py-[40px]'>
                        <button className='btn1 me-[10px]'>RESUME</button>
                        <button className='btn2'>PROJECTS</button>
                    </div>
                    <p className='font-light text-[14px] sm:text-[17px]'>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    </p>
                    <p className='font-light text-[14px] sm:text-[17px]'>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
            </div>
        </>
    )
}

export default Right
