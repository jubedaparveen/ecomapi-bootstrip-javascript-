import React, { createContext, useState } from 'react'

export const myContext = createContext()

function UserContext({children}) {

  const [Wishlist,setWishlist] = useState([]);
  const [Cart,setCart] = useState([])

  return (
    <myContext.Provider value={{Wishlist,setWishlist,Cart,setCart}}>
        {children}
    </myContext.Provider>
  )
}

export default UserContext