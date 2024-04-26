import React from 'react'
import man from '../assets/man.jpg'
import women from '../assets/women.jpg'


const About = () => {
  return (
    <>
    <div className='h-full pt-8'>
      <p className='text-center font-semibold text-4xl text-black animate__animated animate__fadeInDown' >About Tiya</p>


      <div className='flex justify-around flex-wrap mt-20 transition-all'>

        <div className='text-black mb-5 max-[600px]:mx-5 animate__animated animate__fadeInLeftBig'>
          <h3 className='text-3xl mb-4 font-medium'>Tiya Club History</h3>
          <p className='text-[#717275] mb-4 text-lg font-medium'><span className='font-bold'>Since 1984</span>, Tiya is ranked #8 in the top 10 golf <br /> courses in the world. Tiya is Bootstrap 5 HTML CSS <br /> template for golf clubs. Anyone can modify and use <br /> this layout for commercial purposes.</p>
          <p className='text-[#717275] text-lg font-medium'>Tiya Golf Club is 100% free CSS template provided by <br /> TemplateMo website. Please tell your friends about <br /> our website. Thank you for visiting.</p>
        </div>


        <div className='flex gap-6 flex-wrap justify-center mb-4 max-[600px]:mx-5'>
          <div className=' animate__animated animate__fadeInTopLeft'>
            <div className='image-container rounded-3xl h-[30vh] max-[600px]:h-auto'>
            <img className='h-[30vh] max-[600px]:h-auto' src={man} alt="man" />
            </div>
              <div className='flex justify-between mt-2 px-3 items-end'>
                <h3 className='text-2xl text-black'>Michael</h3>
                <h4 className='text-xl text-[#717275]'>Founder</h4>
              </div>
          </div>

          <div className='animate__animated animate__fadeInTopLeft'>
          <div className='image-container rounded-3xl h-[30vh] max-[600px]:h-auto'>
            <img className='h-[30vh] max-[600px]:h-auto' src={women} alt="man" />
            </div>
              <div className='flex justify-between mt-2 px-3 items-end' >
                 <h3 className='text-2xl text-black'>Sandy</h3>
                  <h4 className='text-xl text-[#717275]'>Co-Founder</h4>
              </div>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default About