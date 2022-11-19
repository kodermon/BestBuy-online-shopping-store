import { Stack } from '@mui/system';
import React, { useContext } from 'react';

import ProductsContext from '../utils/ProductsContext';
import CheckoutCard from '../components/CheckoutCard';


const Checkout = () => {
  const { items, removeItem } = useContext(ProductsContext)
  //console.log(items)

  return (
    <Stack>
      {items.map((item, index) => {
        return <CheckoutCard key={index} item={item} />
      })}
    </Stack>
  )
}

export default Checkout