import { Typography, Stack } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import heroBanner from '../assets/herobanner1.jpg'

const Hero = () => {
  return (
    <Box sx={{
        pt: { lg: '120px', xs: '60px'},
        pb: { lg: '120px', xs: '60px'},
    }}>
        <Stack sx={{
                flexDirection: { lg: 'row'},
                gap: { lg: '100px', xs: '45px'}
            }}
            alignItems='center'
            justifyContent='center'
        >
            <Stack>
                <Typography fontSize='34px' fontWeight='600' mb='20px'>
                    BestBuy offers you<br/>
                    the best prices
                </Typography>
                <Typography variant='h5'>
                    The largest and most popular on online shopping store
                </Typography>
            </Stack>
            <img src={heroBanner} alt='banner' className='hero-banner'/>
            
        </Stack>
        
    </Box>
  )
}

export default Hero