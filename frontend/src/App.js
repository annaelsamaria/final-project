import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { applyMiddleware, compose } from '@reduxjs/toolkit'
import { Home } from 'pages/Home'
import { About } from 'pages/About'
import { Shop } from 'pages/Shop'
import { ProductDetails } from 'pages/ProductDetails'
import { LogIn } from 'pages/LogIn'
import { Cart } from 'pages/Cart'
import { Footer } from 'components/Footer'
import { SignUp } from 'components/SignUp'
import { SignIn } from 'components/SignIn';
import { cart } from 'reducers/cart'
import { user } from 'reducers/user'


const reducer = combineReducers({
  cart: cart.reducer,
  user: user.reducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedStateJSON = localStorage.getItem('products');
console.log(`persistedStateJSON: ${persistedStateJSON}`);
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}
console.log(`persistedState: ${JSON.stringify(persistedState)}`);

// 2. Create the store using the initial state

const store = createStore(reducer, persistedState, composeEnhancer(applyMiddleware(thunk)))

// 3. Store the state in localstorage on ANY redux state change
store.subscribe(() => {
  localStorage.setItem('products', JSON.stringify(store.getState()));
});


// const store = configureStore({ reducer })

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
            <Route path="/login" exact>
              <LogIn />
            </Route>
            <Route path="/checkout" exact>
              <Cart />
            </Route>
            <Route path="/signup" exact>
              <SignUp />
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
