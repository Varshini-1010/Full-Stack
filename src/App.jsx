import React, { createContext, useState } from 'react'
import User from './components/User'
import State from './hooks/State'
import Form from './hooks/Form'
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/home"
import Contact from "./pages/contact"
import Services from "./pages/services"
import About from "./pages/about"
import Navbar from './components/navbar'
import ProductDetails from './pages/productDetails'
// import { createContext } from "react"  

export const userContext = createContext()
const App = () => {

  const [name,setName] = useState("context name")
  return (
  <>
  <Navbar/>
  <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
       <Route path="/products/:id" element={<ProductDetails />} />
      
  </Routes>
<userContext.Provider value={name}>
  <Home/>
  <State/>
  <Contact/>
</userContext.Provider>
   {/* <Form/> */}
  {/* <State/>
  <User name ="first" age={22} skills={["Html","css","Mern","Java"]}/>
    <div>App</div>
     */}
    </>
  )
}

export default App