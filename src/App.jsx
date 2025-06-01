import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import Pricing from './components/Pricing'
import Signup from './components/Signup'

function App() {

  return (
        <div className='max-w-full min-h-screen bg-white px-6 py-8 ring shadow-xl ring-gray-900/5'>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/products' element={<Products/>} />
              <Route path='/pricing' element={<Pricing/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route />
            </Routes>
          </BrowserRouter>
        </div>
  )
}

export default App
