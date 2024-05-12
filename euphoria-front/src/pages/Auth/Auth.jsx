import React from 'react'
import { Outlet } from 'react-router-dom'

export const Auth = () => {
  return (
    <div>
      <h1>Auth</h1> {/* Burada auth navbar olacaq */}
      <Outlet/>
    </div>
  )
}
