import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function AdminLayout() {
  return (
    <div><Outlet/>
    <Footer/>
    </div>
  )
}
