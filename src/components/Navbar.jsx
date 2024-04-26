import React from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"


const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigate = useNavigate()
  return (
    <>
        <nav className='bg-[#3d405b] p-4 flex justify-around sticky top-0 z-20 animate__animated animate__fadeInDown max-[600px]:hidden '  >
              <Link to="/">
            <div className=' flex items-center gap-2 animate__animated animate__fadeInLeft'>
                <div  onClick={scrollToTop}><img className='h-[48px] main-logo transition-all' src={logo} alt="logo" /></div>
                <div className='text-white text-center max-[600px]:hidden transition-all'>
                  <p className='text-2xl font-semibold'>Tiya</p>
                  <p className='text-[12px] font-medium'>Golf Club</p>
                </div>
            </div>
              </Link>
            <div className='list-none flex text-white justify-evenly gap-16 items-center font-medium max-[500px]:gap-8 transition-all animate__animated animate__fadeInRight'>
              <li className='hover:text-[#f2cc8f] cursor-pointer transition-all' ><Link to="/" >Home</Link></li>
              <li className='hover:text-[#f2cc8f] cursor-pointer transition-all'><Link to="about">About</Link></li>
              <li className='hover:text-[#f2cc8f] cursor-pointer transition-all' ><Link to="contact">Contact</Link></li>
              <button className='max-[800px]:hidden border-2 p-2 px-5 rounded-full text-[#f2cc8f] border-[#f2cc8f] hover:bg-[#f2cc8f] hover:text-white transition-all'>Member Login</button>
            </div>


            
        </nav>


        <div className="hidden max-[600px]:block">

      <div className="bg-[#3d405b] text-white flex justify-between px-5 p-3 items-center animate__animated animate__fadeInDown">
        <div className=" flex items-center gap-2 animate__animated animate__fadeInLeft">
          <div>
            <img
              className="h-[48px] main-logo transition-all"
              src={logo}
              alt="logo"
            />
          </div>

          <div className="text-white text-center max-[600px]:hidden transition-all">
            <p className="text-2xl font-semibold">Tiya</p>
            <p className="text-[12px] font-medium">Golf Club</p>
          </div>
        </div>

        <div className="animate__animated animate__fadeInRight">
          <Sheet>
            <SheetTrigger><i className="fa-solid fa-bars text-2xl"></i></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                

                <SheetDescription className="flex-col flex w-full">
                <a className="text-2xl mt-5 font-semibold text-center" onClick={()=>{ navigate('/')}}>Home</a>
                <a className="text-2xl mt-5 font-semibold text-center " onClick={()=>{ navigate('about')}}>About</a>
                <a className="text-2xl mt-5 font-semibold text-center " onClick={()=>{ navigate('contact')}}>Contact</a>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar