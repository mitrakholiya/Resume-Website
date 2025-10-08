import React from 'react'

const Box = () => {
    let box = [{
        title: "JUNE-2025",
        Job: "INTERN",
        name: "EXCEL PTP",
        location: "Navrangpura, Ahmedabad",
        p1: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
        p2: "I’m a great place for you to tell a story and let your users know a little more about you."
    },
    {
        title: "2022-2025",
        Job: "BKNMU",
        name: "BCA",
        location: "Junagadh",
        p1: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
        p2: "I’m a great place for you to tell a story and let your users know a little more about you."
    }]
    return (
        <>
            {box.map((v, i) => {
                return (<>
                {i==1?( <h3 className='text-[26px] font-bold sm:px-[0px] px-[20px]'>Eduction</h3>):""}
                    <div className='py-[55px] px-[20px] sm:px-[50px] bg-[white] shadow-2xl my-[30px] w-[90%] m-[auto] sm:w-[100%]'>
                        <h4 className='text-[blue] text-[20px] font-bold'>{v.title} </h4>
                        <div className="sm:flex justify-between">
                            <div className='sm:w-[40%]'>
                                <p className='font-light text-[21px]'>{v.Job}</p>
                                <p className='py-[10px] font-light text-[16px]'>{v.name}</p>
                                <p className='font-light text-[16px]'>{v.location}</p>
                            </div>
                            <div className='sm:w-[50%]'>
                                <p className='font-light'>{v.p1}</p>
                                <br />
                                <p className='font-light'>{v.p2}</p>
                            </div>
                        </div>
                    </div>
                </>)
            })}

        </>
    )
}

export default Box
