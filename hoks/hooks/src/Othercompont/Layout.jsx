import React from 'react'
import Header from '../Othercompont/Header/Header'

function Layout({Children}) {
  return (
    <div>
        <Header/>

      {Children}
    </div>
  )
}

export default Layout
