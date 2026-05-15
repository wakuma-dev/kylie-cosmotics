import React from 'react'
import Cart from '../Cart'
import Auth from '../Auth'
import Search from '../Search'

const Cta = () => {
  return (
    <div className="flex items-center gap-4 z-[170]">
       <Search />
        <Auth />
        <Cart />
        
    </div>
  )
}

export default Cta