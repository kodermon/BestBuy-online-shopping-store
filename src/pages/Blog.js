import { Typography, Stack } from '@mui/material'
import React from 'react'

const Blog = () => {
  return (
    <Stack width='80%' alignItems='center' m='auto' textAlign='justify' p='70px 0'>
        <Typography fontSize='32px' fontWeight='600' mb='20px'>About BestBuy</Typography>
        <Typography fontSize='23px'>
          BestBuy is an imaginary e-commerce web app built with React, Material UI and data from <a href='https://fakestoreapi.com/' target='_blank' className='fake-api-link'>Fake Store API</a>. 
        </Typography>
    </Stack>
  )
}

export default Blog