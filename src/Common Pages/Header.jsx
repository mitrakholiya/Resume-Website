import React from 'react'
import NavLink from './NavLink'

const Header = () => {
    return (
        <div className='container-fluid '>
            <div className="container py-[20px]">
                <div className="flex justify-between items-center sm:px-[0px] px-[30px]  ">
                    <li className='list-[square] text-[blue]  font-bold  text-[26px] sm:text-[42px]'>
                        <span className='text-[black] '>Mit Rakholiya</span>
                    </li>

                    {/* NaV ICON */}
                    <NavLink />
                </div>

            </div>
        </div>
    )
}

export default Header
