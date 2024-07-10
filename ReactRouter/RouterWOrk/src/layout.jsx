import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default layout