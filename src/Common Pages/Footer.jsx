import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="flex-col-reverse sm:flex-row items-center flex justify-between py-[30px]">
            <p className='text-[15px] font-light pt-[30px] sm:pt-[0px]'>
              &copy;2025 by Mit Rakholiya <br />
              Powered and secured by...
            </p>
            <div className="flex sm:flex-row flex-col">
              <div className="sm:me-[60px] py-[20px] sm:py-[0px]">
                <h6 className='font-bold text-center text-[16px]'>Write</h6>
                <p>meetrakholiya31@gmail.com</p>
              </div>
              <div className='py-[20px] sm:py-[0px]'>
                <h6 className='font-bold text-center text-[16px]'>Follow</h6>
                <div className="flex justify-center gap-2 text-xl">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="hover:text-blue-600 transition duration-300" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="hover:text-sky-500 transition duration-300" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-700 transition duration-300" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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
