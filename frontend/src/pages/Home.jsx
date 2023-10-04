import React from 'react'
import { Link } from 'react-router-dom'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'

import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import { BsArrowRight } from 'react-icons/bs'

export default function Home() {
  return (
    <>

      {/* ======= HERO SECTION START========= */}
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

              {/* ======= HERO CONTENT START ========= */}
              <div>
                <div className="lg:w-[570px] ">

                  <h1 className='text-[36px]  leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] '>
                    We help patients live a healthy, longer life .
                  </h1>

                  <p className='text__para '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus numquam ipsum repellat voluptatibus nemo sed, enim architecto delectus incidunt!
                  </p>

                  <button className='btn'> Request an Appointment</button>

                </div>

                {/* ======= HERO COUNTER ========= */}
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row      lg:items-center gap-5 lg:gap-[30px] '>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>30+
                    </h2>
                    <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] '></span>
                    <p className='text__para '> Years of Experience</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>15+
                    </h2>
                    <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] '></span>
                    <p className='text__para '> Clinic Locations</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>100%
                    </h2>
                    <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] '></span>
                    <p className='text__para '>Customer Satisfaction</p>
                  </div>

                </div>
              </div>
              {/* ======= HERO CONTENT END ========= */}

              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full " src={heroImg01} alt="" />
                </div>
                <div className="mt-[30px] ">
                  <img className='w-full mb-[30px] ' src={heroImg02} alt="" />
                  <img className='w-full ' src={heroImg03} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======= HERO SECTION END========= */}

        <section>
          <div className="container">
            <div className='lg:w-[470px] mx-auto'>
              <h2 className='heading text-center '>Providing the Medical Services
              </h2>
              <p className='text__para text-center'>World-class care for everyone. One health System offers unmatched, expert health care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center  '>
                    Find a Doctor
                  </h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center '>
                    World class care for everyone. Our health System offers unmatched, experts health care. From the lab to clinic.
                  </p>

                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className="group-hover:text-white w-6 h-5  " />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center  '>
                    Find a Location
                  </h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center '>
                    World class care for everyone. Our health System offers unmatched, experts health care. From the lab to clinic.
                  </p>

                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className="group-hover:text-white w-6 h-5  " />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center  '>
                    Book Appointment
                  </h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center '>
                    World class care for everyone. Our health System offers unmatched, experts health care. From the lab to clinic.
                  </p>

                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className="group-hover:text-white w-6 h-5  " />
                  </Link>
                </div>
              </div>


            </div>



          </div>
        </section>

        {/* ======= ABOUT SECTION START========= */}
        <About />
        {/* ======= ABOUT SECTION END========= */}

        {/* ======= SERVICES SECTION START========= */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className='heading text-center'>Our Medical Services</h2>
              <p className='text__para text-center'>World class care for everyone . Our health system offers unmatched , expert health care
              </p>
            </div>

            <ServiceList />

          </div>
        </section>
        {/* ======= SERVICES SECTION END========= */}


        {/* ======= FEATURE SECTION START========= */}
        <section>
          <div className="container">
            <div className='flex items-center justify-between flex-col lg:flex-row'>

              {/* ======= FEATURE CONTENT========= */}
              <div className="xl:w-[670px]">
                <h2 className="heading">Get Virtual Treatment <br /> Anytime.</h2>

                <ul className="pl-4">
                  <li className='text__para'> 1. Schedule the appointment directly.</li>
                  <li className='text__para'> 2. Search for your physician here, and contact their office.</li>
                  <li className='text__para'> 3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time. </li>
                </ul>

                <Link to='/'><button className='btn'>Learn More</button></Link>

                {/* ======= FEATURE IMAGE========= */}
                <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                  <img src={featureImg} className='w-3/4' alt="" />

                  <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                    <div className="flex items-center justify-between ">
                      <div className='flex items-center gap-[6px] lg:gap-3'>
                        <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600] '>Tue, 24</p>
                        <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400] '>10:00 AM</p>
                      </div>
                      <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] '>
                        <img src={videoIcon} alt="" />

                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ======= FEATURE SECTION END========= */}



      </>

    </>
  )
}
