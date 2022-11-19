import { Button, Fab, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AddSharp, AddShoppingCartSharp } from "@mui/icons-material";
import ProductsContext from '../utils/ProductsContext';


const ProductCard = ({ product }) => {
    const { addItem } = useContext(ProductsContext);
    const { id } = product;
    
  return (
    <Stack flexDirection='column' position='relative' m='40px'>
        <Link to={`/products/${id}`} textDecoration='none'>
            <img
                src={product.image}
                alt={product.title}
                width='400px'
                height='400px'
                borderRadius='10px'
                cursor='pointer'
                onTransitionEnd='0.3s'
            />
        </Link>
        <Typography
            textAlign='center'
            fontWeight='700'
            flexWrap='wrap'
            width='300px'
            m='auto'
        >{product.title}</Typography>
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-around'
        >
            <Typography
                backgroundColor='black'
                color='white'
                fontWeight='500'
                padding='8px 8px'
                borderRadius='5px'
            >
                ${product.price}
            </Typography>
            <Button
                onClick={() => addItem(product)}
                className='buy-btn'
                startIcon={<AddShoppingCartSharp />}
                aria-label='add to shopping cart'
                sx={{
                        backgroundColor: 'black',
                        '&:hover': { backgroundColor: 'red' },
                        color: 'white'
                    }}
            >
                add to cart
            </Button>
            <div style={{
                padding: '12px',
                borderRadius: '50%',
                boxShadow: '0px 1px 18px -10px rgba(0, 0, 0, 0.95)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <AddSharp width='23px'/>
            </div>
        </Stack>
    </Stack>
  )
}

export default ProductCard