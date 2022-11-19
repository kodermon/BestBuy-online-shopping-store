import React, { useContext } from 'react'
import { Stack, Button, Typography } from '@mui/material'
import { FaSearch, FaRegHeart, FaShoppingCart } from 'react-icons/fa'

import ProductsContext from '../utils/ProductsContext'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    const { items } = useContext(ProductsContext);

  return (
    <Stack
        className='nav'
        direction='row' 
        alignItems='center' 
        justifyContent='center'
        sx={{ gap: { lg: '270px', xs: '13px'}}}
        height='90px'
        boxShadow='0 0 18px rgba(0, 0, 0, 0.7)'
        margin='0px'
        position='sticky'
        top='0px'
        zIndex='99'
        backgroundColor='white'
    >
        <Link to='/'>
            <Typography sx={{ fontSize: { lg: '60px', xs: '25px'}}} fontWeight={750} className='nav-logo'>
                BestBuy
            </Typography>
        </Link>
        <Stack
            direction='row'
            sx={{
                gap: { lg: '50px'}
            }}
        >
            <NavLink to='/'>
                <Button sx={{
                            backgroundColor: 'transparent',
                            '&:hover': { backgroundColor: '#eee', opacity: '0.9' },
                            color: 'black',
                            fontSize: {lg: '22px', xs: '17px'},
                            fontWeight: '600'
                        }}
                >
                    Home
                </Button>
            </NavLink>
            
            <NavLink to='/products'>
                <Button sx={{
                                backgroundColor: 'transparent',
                                '&:hover': { backgroundColor: '#eee', opacity: '0.9' },
                                color: 'black',
                                fontSize: {lg: '22px', xs: '17px'},
                                fontWeight: '600'
                            }}
                    >
                        Shop
                </Button>
            </NavLink>
            <NavLink to='/blog'>
                <Button sx={{
                                backgroundColor: 'transparent',
                                '&:hover': { backgroundColor: '#eee', opacity: '0.9' },
                                color: 'black',
                                fontSize: {lg: '22px', xs: '17px'},
                                fontWeight: '600'
                            }}
                    >
                        Blog
                </Button>
            </NavLink>
        </Stack>
        <Stack direction='row' alignItems='center' gap='10px'>
            <Stack direction='row' position='relative'>
                <input 
                    type='text'
                    className='search-input'
                    style={{ 
                        border: 'none', 
                        borderRadius: '4px', 
                        outline: '1px solid black',
                        background: '#fff',
                        padding: '4px',
                        height: '15px'
                        }}
                    />
                <FaSearch style={{
                    position: 'absolute',
                    right: '6px',
                    transform: 'translateY(20%)'
                }}/>
            </Stack>
            <FaRegHeart />
            <Stack direction='row' alignItems='center' position='relative'>
                <NavLink to='/checkout'>
                    <FaShoppingCart />
                    <Typography sx={{
                            position: 'absolute',
                            right: '-10px',
                            bottom: '2px',
                            fontSize: '12px'
                        }}
                    >
                        {items.length}
                    </Typography>
                </NavLink>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default Navbar




{/* <Button sx={{ 
                        fontSize: {lg: '22px', xs: '17px'},
                        fontWeight: '600'}}>
                    Home
                </Button> */}