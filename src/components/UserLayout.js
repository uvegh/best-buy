import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navigation from './Navigation'

export default function UserLayout() {
  return (
    <div>

        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>


  )
}
