import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';


import ProductCard from '../components/ProductCard';

const Shop = ({ allProducts }) => {
    


  return (
    <Stack
        flexDirection='row'
        flexWrap='wrap'
        gap='25px'
        alignItems='center'
        justifyContent='center'
        mt='60px'
    >
        {allProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />
        })}
    </Stack>
  )
}

export default Shop