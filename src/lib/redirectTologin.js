import React from 'react'
import { Redirect } from 'react-router-dom'

function RedirectToLogin(props) {
  return (
    <Redirect to="/login" />
  )
}

export default RedirectToLogin
