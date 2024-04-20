import { NavLink, Link } from 'react-router-dom'
import { useEffect, useRef, useContext } from 'react'

import logo from '../../assets/images/logo.png'
import userImg from '../../assets/images/avatar-icon.png'
import { BiMenu } from 'react-icons/bi'
import { authContext } from '../../context/authContext'

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
]
const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {user,role,token}= useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()

    return () => window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header className='header flex  items-center  '>
      <div className="container">
        <div className="flex items-center  justify-between">

          {/* ========== LOGO ========= */}
          <div>
            <NavLink to={"/"}>
               <img src={logo} alt="" />
            </NavLink>
          </div>

          {/* ========== MENU ========= */}
          <div className="navigation " ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600] ' : ' text-textColor text-[16px] leading-7 font-[500]'}>{link.display}</NavLink>
                  </li>))
              }
            </ul>
          </div>

          {/* ========== NAV RIGHT ========= */}
          <div className="flex items-center gap-4">
      {            token && user ? (
                <div >
                  <Link to={`${role==='doctor'?'/doctor/profile/me':'/user/profile/me'}`}>
                    <figure className="w-[35] h-[35] rounded-full cursor-pointer">
                      <img src={user?.photo} className="w-full rounded-full" alt="" />
                    </figure>
                  
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44] flex items-center justify-center rounded-[50px]">
                    Login
                  </button>
                </Link>
              )}
            
            

            <span className='md:hidden ' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>

          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
