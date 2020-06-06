import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Home } from 'pages/Home'
import { About } from 'pages/About'
import { Shop } from 'pages/Shop'
import { ProductDetails } from 'pages/ProductDetails'
import { SignIn } from 'pages/SignIn'
import { Nav } from 'components/Nav'
import { Footer } from 'components/footer'

import { cart } from 'reducers/cart'
import { products } from 'reducers/products'

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Nav />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/shop" exact>
              <Shop />
            </Route>
            <Route path="/product/:id" exact>
              <ProductDetails />
            </Route>
            <Route path="/signin" exact>
              <SignIn />
            </Route>
          </Switch>
          <Footer />
        </main>
      </Provider>
    </BrowserRouter>
  )
}
