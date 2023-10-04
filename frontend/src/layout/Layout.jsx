import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'


export default function Layout() {
  return (
    <>
    <Header />
    <main>
        <Routers />
    </main>
    <Footer />
    </>
  )
}

