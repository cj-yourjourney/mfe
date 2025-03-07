import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MarketingApp from '../components/MarketingApp'
import Header from '../components/Header'

export default () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Hi there! now!!! container-dev branch</h1>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  )
}
