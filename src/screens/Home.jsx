import React from 'react'
import garden from '../assets/garden.jpg'
import ticket2 from '../assets/ticket2.jpg'
import ticket1 from '../assets/ticket1.jpg'
import Navbar2 from '@/components/Navbar2'


const Home = () => {
  return (
    <>
    <div  className='h-[90vh] relative overflow-hidden'>
        <img className=' bg-img absolute top-[-30vh]  max-[800px]:hidden max-[1200px]:top-0' src={garden} alt="bg-img" />
    </div>
      
        <div className='relative mt-[-65vh] ml-[25vh] max-[800px]:ml-[6vh] transition-all max-[800px]:mt-[-75vh]  ' >
          <div className='text-white max-[800px]:text-black font-semibold text-5xl big-text leading-[10vh] max-[800px]:text-2xl max-[1000px]:text-3xl animate__animated animate__rotateInDownLeft'>Welcome to the club <br /> Tiya is <span className='text-[#f2cc8f]'>Modern</span></div>
          <div className='text-white text-md font-semibold mt-8 flex gap-5 items-center' >
            <button className='p-2 px-5 bg-[#f2cc8f] rounded-full hover:bg-[#e07a5f] transition-all animate__animated animate__rotateInUpLeft'>Our Story</button>
            <p className='hover:text-[#f2cc8f] transition-all cursor-pointer max-[800px]:text-black animate__animated animate__rotateInUpRight'>Became a member</p>
          </div>
       
        </div>




        <div className='mt-[20vh] pt-[20vh] max-[800px]:mt-[15vh] max-[800px]:pt-[10vh] max-[600px]:text-center  max-[1300px]:mt-[15vh] transition-all bg-[#f4f1de]'>
          <p className=' font-semibold text-4xl text-black relative mb-8 ml-[7vw] max-[600px]:ml-0'>Upcoming Events</p>




          <div className='flex justify-center'>
        <div className=' w-[82%] mb-10 py-8 rounded-3xl flex justify-evenly flex-wrap px-5'>

          <div className='flex gap-6 items-start flex-wrap max-[700px]:mx-5 max-[700px]:justify-center  max-[700px]:flex-col-reverse'>
            <div className='p-6 px-10 bg-[#81b29a] text-center rounded-3xl max-[700px]:w-full max-[700px]:flex  max-[700px]:mb-5  items-center gap-5'>
              <p className='text-4xl font-semibold'>24</p>
              <p className='text-lg font-semibold text-white '>Feb 2048</p>
            </div>

            <div className='image-container rounded-3xl h-[35vh] max-[700px]:h-auto mx-4 mb-5'>
                <img className='h-[35vh] max-[700px]:h-auto max-[700px]:max-w-full ' src={ticket1} alt="man" />
            </div>
          </div>

          <div className='max-[650px]:mx-5'>
              <p className='cursor-pointer text-3xl font-medium text-[#3d405b] hover:text-[#f2cc8f] transition-all'>Private activities</p>
              <p className='text-xl text-[#3d405b] mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua.</p>

              <hr  className='mt-6'/>

              <div className='flex justify-between items-center flex-wrap gap-5 max-[600px]:justify-center'>
                <div className='mt-6'>
                  <p className='font-medium text-lg text-[#3d405b]'>Location: <span className='font-normal ml-10'>National Center, NYC</span></p>
                  <p className='font-medium text-lg text-[#3d405b] mt-3'>Ticket: <span className='font-normal ml-16'>$250</span></p>
                </div>
                <button className='font-medium text-white bg-[#f2cc8f] p-2 px-5 rounded-full transition-all hover:bg-[#e07a5f]'>Buy Ticket</button>
              </div>

          </div>
        </div>
      </div>


      <div className='flex justify-center'>
        <div className='bg-white w-[82%] mb-16 py-8 rounded-3xl flex justify-evenly flex-wrap px-5'>

          <div className='flex gap-6 items-start flex-wrap max-[700px]:mx-5 max-[700px]:justify-center  max-[700px]:flex-col-reverse'>
            <div className='p-6 px-10 bg-[#81b29a] text-center rounded-3xl max-[700px]:w-full max-[700px]:flex  max-[700px]:mb-5  items-center gap-5 transition-all'>
              <p className='text-4xl font-semibold'>28</p>
              <p className='text-lg font-semibold text-white '>Feb 2048</p>
            </div>

            <div className='image-container rounded-3xl h-[35vh] max-[700px]:h-auto mx-4 mb-5'>
                <img className='h-[35vh] max-[700px]:h-auto max-[700px]:max-w-full transition-all' src={ticket2} alt="man" />
            </div>
          </div>

          <div className='max-[650px]:mx-5'>
              <p className='cursor-pointer text-3xl font-medium text-[#3d405b] hover:text-[#f2cc8f] transition-all'>Group tournament activities</p>
              <p className='text-xl text-[#3d405b] mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua.</p>

              <hr  className='mt-6'/>

              <div className='flex justify-between items-center flex-wrap gap-5 max-[600px]:justify-center'>
                <div className='mt-6'>
                  <p className='font-medium text-lg text-[#3d405b]'>Location: <span className='font-normal ml-10'>National Center, NYC</span></p>
                  <p className='font-medium text-lg text-[#3d405b] mt-3'>Ticket: <span className='font-normal ml-16'>$350</span></p>
                </div>
                <button className='font-medium text-white bg-[#f2cc8f] p-2 px-5 rounded-full transition-all hover:bg-[#e07a5f]'>Buy Ticket</button>
              </div>

          </div>
        </div>
      </div>






        </div>



    </>
  )
}

export default Home