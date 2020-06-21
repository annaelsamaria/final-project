import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    errorMessage: null,
    loginMessage: null,
    loggedoutMessage: null,
  },
}

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      state.login.accessToken = accessToken
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      state.login.userId = userId
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload
      state.login.errorMessage = errorMessage
    },
    setLoginMessage: (state, action) => {
      const { loginMessage } = action.payload
      state.login.loginMessage = loginMessage
    },
    setLoggedoutMessage: (state, action) => {
      const { loggedoutMessage } = action.payload;
      state.login.loggedoutMessage = loggedoutMessage
    },
  },
})

export const login = (email, password) => {
  const LOGIN_URL = 'http://localhost:8080/sessions'
  return (dispatch) => {
    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw 'Please, try again'
      })
      .then((json) => {
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken,
          })
        )
        dispatch(user.actions.setUserId({ userId: json.userId }))
      })
      .catch((err) => {
        dispatch(user.actions.logout());
        dispatch(user.actions.setErrorMessage({ errorMessage: err }))
      })
  }
}

export const getLoginMessage = () => {
  const USERS_URL = 'http://localhost:8080/users'
  return (dispatch, getState) => {
    const accessToken = getState().user.login.accessToken;
    const userId = getState().user.login.userId
    fetch(`${USERS_URL}/${userId}`, {
      method: 'GET',
      headers: { Authorization: accessToken },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw 'Please, try again.'
      })
      .then((json) => {
        dispatch(
          user.actions.setLoginMessage({ loginMessage: JSON.stringify(json) })
        )
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }))
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(user.actions.setLoginMessage({ LogInMessage: null }));
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setUserId({ userId: 0 }));
    dispatch(user.actions.setLoggedoutMessage({ loggedoutMessage: true }));
  };
};