import React from 'react'
import styles from './style.module.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'


function Layout() {
  return (
    <div>

<Header/>
<Sidebar/>
<Body/>
    </div>
  )
}

export default Layout