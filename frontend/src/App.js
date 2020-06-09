import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Home } from 'pages/Home'
import { About } from 'pages/About'
import { Shop } from 'pages/Shop'
import { ProductDetails } from 'pages/ProductDetails'
import { SignIn } from 'pages/SignIn'
import { Cart } from 'pages/Cart'
import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import { cart } from 'reducers/cart'

const reducer = combineReducers({
  cart: cart.reducer
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
            <Route path="/shop/product/:productId">
              <ProductDetails />
            </Route>
            <Route path="/signin" exact>
              <SignIn />
            </Route>
            <Route path="/checkout" exact>
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </main>
      </Provider>
    </BrowserRouter>
  )
}
