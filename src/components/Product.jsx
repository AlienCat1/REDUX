import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './redux/action'



const Product = () => {

  const products = [
    {
      name: 'Samsung',
      color: 'White',
      price: 799,
      image: './images/logo.png'
    },
    {
      name: 'Xiaomi',
      color: 'Grey',
      price: 599,
      image: './images/logo.png'
    },
    {
      name: 'Apple',
      color: 'Gold',
      price: 999,
      image: './images/logo.png'
    }
  ]

  const cartItemList = useSelector((state) => state.reducer)

  const dispatch = useDispatch()

  const handleAdd = (item) => {
    dispatch(addToCart(item))
  }

  const handleRemove = (item) => {
    dispatch(removeFromCart(item))
  }

  return (
    <div>
      {
        products.map((item) => {

          const [inCart, setInCart] = useState(false)

          useEffect(() => {
            let result = cartItemList.filter((element) => {
              return element.name === item.name
            })
            if (result.length) {
              setInCart(true)
            } else {
              setInCart(false)
            }
          }, [cartItemList, item])

          return <>
            <img src={item.image} /> <br />
            <>{item.name}</> <br />
            <>{item.color}</> <br />
            <>{item.price}</> <br />
            {
              inCart ?
                <button onClick={() => handleRemove(item)}>Remove From Cart</button>
                :
                <button onClick={() => handleAdd(item)}>Add To Cart</button>
            }
            <br />
          </>
        })
      }
    </div>
  )
}

export default Product
