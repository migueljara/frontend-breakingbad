import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import background from "../../assets/img/bg.jpg";

import Header from '../header/Header'
import Footer from '../footer/Footer'

import Home from '../../pages/home/Home'
import Deaths from '../../pages/deaths/Deaths'
import NotFound from '../../pages/notFound/NotFound'
import Characters from '../../pages/characters/Characters'
import Episodes from '../../pages/episodes/Episodes'
import Quotes from '../../pages/quotes/Quotes'

export default function Body() {
  return (
    <BrowserRouter>
        <Header />
        <main style={{ backgroundImage: `url(${background})`, backgroundRepeat: `no-repeat`, backgroundAttachment: `fixed`, backgroundSize: `cover` }}>
          <Routes>
              <Route path='/frontend-breakingbad/personajes' element={<Characters />} />
              <Route path='/frontend-breakingbad/episodios' element={<Episodes />} />
              <Route path='/frontend-breakingbad/citas' element={<Quotes />} />
              <Route path='/frontend-breakingbad/muertes' element={<Deaths />} />
              <Route path='/frontend-breakingbad/' element={<Home />} />
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}
