import React from 'react'

const Box = () => {
    let box = [{
        title: "JUNE-2025",
        Job: "MERN Stack Developer intern",
        name: "Amar Infotech",
        location: "June 2025 - january 2025",
        p1: "Developed full-stack website using MongoDB, Express.js, React, Node.js. Built RESTful APIs and integrated them with frontend React components.Designed responsive and user-friendly UI using CSS, Bootstrap, and Tailwind CSS.Collaborated in a team environment, participated in code reviews, and followed Git/GitHub workflow.",
        p2: ""
    },
    {
    title:"2021-2022",
    job:"Shree Swaminarayan Gurukul-Taravada",
    name:"12th-Commerce",
    location:"Taravada,Amreli",
    p1:"Successfully completed higher secondary education with 89.29%.Gained foundational knowledge in[Account,State].Strengthened skills in critical thinking, time management, and teamwork."

},
    {
        title: "2022-2025",
        Job: "BKNMU",
        name: "BCA",
        location: "Junagadh, Gujarat",
        p1: "I completed my BCA with a focus on full-stack web development. I learned technologies such as JavaScript, React, Node.js, and MongoDB, and built several practical projects, including a portfolio website and CRUD applications.",
        p2: ""
    },
]
    return (
        <>
            {box.map((v, i) => {
                return (<>
                {i==1?( <h3 className='text-[26px] font-bold sm:px-[0px] px-[20px]'>Eduction</h3>):""}
                    <div className='py-[20px] sm:py-[55px] px-[15px] sm:px-[30px] bg-[white] shadow-2xl my-[30px] w-[90%] m-[auto] sm:w-[100%]'>
                        <h4 className='text-[blue] text-[22px] font-bold'>{v.title} </h4>
                        <div className="sm:flex justify-between">
                            <div className='sm:w-[45%]'>
                                <p className='font-medium text-[19px] sm:pt-[0px] pt-[10px]'>{v.Job}</p>
                                <p className='py-[10px] font-light text-[16px]'>{v.name}</p>
                                <p className='font-light text-[16px]'>{v.location}</p>
                            </div>
                            <div className='sm:w-[55%]'>
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
