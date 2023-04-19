import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  const cartData=useSelector((state)=>state.reducer)
  const [cartItemCount, setCartItemCount]=useState(0)

  useEffect(()=>{
    setCartItemCount(cartData.length)
  },[cartData])
  return (
    <div>
      {cartItemCount}
    </div>
  )
}

export default Header
