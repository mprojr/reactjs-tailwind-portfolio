import React from 'react'
import App from '../App'

function MainLayout({children}) {
  return (
    <div>
      <App></App>
      <div>{children}</div>
    </div>
  )
}

export default MainLayout
