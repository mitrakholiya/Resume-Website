import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="flex-col-reverse sm:flex-row items-center flex justify-between py-[30px]">
            <p className='text-[15px] font-light pt-[10px] sm:pt-[0px] text-center'>
              &copy;2025 by Mit Rakholiya <br />
              Powered and secured by Mit Rakholiya
            </p>
            <div className="flex sm:flex-row flex-col">
              <div className="sm:me-[60px] py-[10px] sm:py-[0px]">
                <h6 className='font-bold text-center text-[16px]'>Write</h6>
                <p>meetrakholiya31@gmail.com</p>
              </div>
              <div className='py-[10px] sm:py-[0px]'>
                <h6 className='font-bold text-center text-[16px]'>Follow</h6>
                <div className="flex justify-center gap-2 text-xl">
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
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer
