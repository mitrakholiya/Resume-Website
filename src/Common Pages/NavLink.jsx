import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {

    let [change, setChange] = useState()
    let [open, setOpen] = useState(false)

    return (
        <div className='sm:w-[34%]'>
            <div className='sm:block hidden'>
                <ul className='flex justify-between text-[18px] font-light '>
                    <li>
                        <Link to="/" onClick={() => setChange("about")} className={change === "about" ? "text-[blue]" : "text-[black]"}>ABOUT ME</Link>
                    </li>
                    <li>
                        <Link to="/resume" onClick={() => setChange("resume")} className={change === "resume" ? "text-[blue]" : "text-[black]"}>RESUME</Link>
                    </li>
                    <li>
                        <Link to="/project" onClick={() => setChange("project")} className={change === "project" ? "text-[blue]" : "text-[black]"}>PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setChange("contact")} className={change === "contact" ? "text-[blue]" : "text-[black]"}>CONTACT</Link>
                    </li>
                </ul>
            </div>

            <div className='sm:hidden flex w-[max-content]'>
                <button onClick={() => setOpen(!open)} className='text-[20px] font-bold'>☰</button>
                {open ? (<>
                    <div className="fixed inset-0 bg-[#f4ece6] z-30 ">
                        <div className='flex flex-col items-center  gap-8 mt-[30px] justify-center'>

                            <button onClick={() => setOpen(!open)} className='text-[26px] font-extrabold'> ✕</button>
                            <ul className='text-[28px] flex flex-col gap-8 font-bold   '>
                                <li>
                                    <Link to="/" onClick={() => setChange("about")} className={change === "about" ? "text-[blue]" : "text-[black]"}>ABOUT ME</Link>
                                </li>
                                <li>
                                    <Link to="/resume" onClick={() => setChange("resume")} className={change === "resume" ? "text-[blue]" : "text-[black]"}>RESUME</Link>
                                </li>
                                <li>
                                    <Link to="/project" onClick={() => setChange("project")} className={change === "project" ? "text-[blue]" : "text-[black]"}>PROJECTS</Link>
                                </li>
                                <li>
                                    <Link to="/contact" onClick={() => setChange("contact")} className={change === "contact" ? "text-[blue]" : "text-[black]"}>CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>) : '  '

                }
            </div>

        </div>
    )
}

export default NavLink
