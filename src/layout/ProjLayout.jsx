import React from 'react'
import App from '../App'

function ProjLayout({children}) {
  return (
    <div>
      <App></App>
      <div>{children}</div>
    </div>
  )
}

export default ProjLayout
