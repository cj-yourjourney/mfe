import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MarketingApp from '../components/MarketingApp'
import Header from '../components/Header'
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'


const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})


export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <h1>Hi there! now!!!</h1>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}
