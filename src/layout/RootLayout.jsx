import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default RootLayout
