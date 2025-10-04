// src/components/Layout.jsx
import React from 'react'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
      {/* You can add Footer here later */}
    </div>
  )
}

export default Layout