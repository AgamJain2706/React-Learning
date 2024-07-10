import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './layout.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User  from './components/User/user.jsx'
import Github from './components/Github/Github.jsx'

//Two ways to set path in URL 
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Layout/>,
//     children : [{
//       path :  "",
//       element : <Home/>
//     },
//     {
//       path :"About",
//       element : <About/>

//     },
//     {
//       path : "Contact",
//       element : <Contact/>
//     }
//   ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
    <Route path='' element = {<Home/>}/>
    <Route path='about' element = {<About/>}/>
    <Route path='Contact' element = {<Contact/>}/>
    <Route path='user/:userid' element = {<User/>}/>
    <Route path='github' element = {<Github/>}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
