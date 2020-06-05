import React from 'react'
import { Home } from 'pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Nav } from 'components/Nav'
import { About } from 'pages/About'
import { Shop } from 'pages/Shop'
import { Product } from 'pages/Product'
import { SignIn } from 'pages/SignIn'


export const App = () => {
  return (
    <BrowserRouter>
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
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
