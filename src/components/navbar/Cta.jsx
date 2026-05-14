import React from 'react'
import Cart from '../Cart'
import Auth from '../Auth'

const Cta = () => {
  return (
    <div className="flex items-center gap-4 z-[120]">
        <Auth />
        <Cart />
        
    </div>
  )
}

export default Cta