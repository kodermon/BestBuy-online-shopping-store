import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsContext from '../utils/ProductsContext';
import { AddShoppingCartSharp } from "@mui/icons-material";

const Details = () => {
    const [singleProduct, setSingleProduct] = useState({})
    const { id } = useParams()
    const { addItem } = useContext(ProductsContext)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setSingleProduct(data))
            .catch(err => console.log(err))

            //console.log(singleProduct)
    }, [id])

  return (
    <Stack sx={{
        flexDirection: { lg: 'row' },
        width: { lg: '800px'},
        gap: '50px'
    }} p='80px' alignItems='center'>
        <img 
            src={singleProduct.image} 
            alt={singleProduct.title}
            width='300px' 
        />
        <Stack>
            <Typography variant='h3'>{singleProduct.title}</Typography>
            <Typography fontWeight='550' mt='15px'>{singleProduct.description}</Typography>
            <Typography fontWeight='600' textAlign='center' mt='20px' mb='20px'>${singleProduct.price}</Typography>
            <Button
                onClick={() => addItem(singleProduct)}
                className='buy-btn'
                startIcon={<AddShoppingCartSharp />}
                aria-label='add to shopping cart'
                sx={{
                        backgroundColor: 'black',
                        '&:hover': { backgroundColor: 'red' },
                        color: 'white'
                    }}
            >
                Buy
            </Button>
        </Stack>
    </Stack>
  )
}

export default Details