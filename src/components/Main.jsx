import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import aincrad from '../assets/img/aincrad.jpg'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={aincrad} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start item-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Saya Muhammad Fahli Aziz</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>Saya Adalah
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Programmer',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Gamer',
                        2000,
                        'Data Analist',
                        2000,
                        'Mahasiswa',
                        2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                    repeat={Infinity}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer' size={20}/>
                    <a href="https://github.com/fadli-wq"><FaGithub className='cursor-pointer' size={20}/></a>
                    <FaLinkedin className='cursor-pointer' size={20} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main