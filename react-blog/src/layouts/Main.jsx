import React from 'react'
import NavBar from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  return (
    <>
      <NavBar/>
      <ToastContainer />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Main