import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Stack sx={{ flexDirection: { lg: 'row' }}} gap='25px'>
        <Stack>
            <Link>All products</Link>
            <Link>Blog</Link>
            <Link>FAQ</Link>
            <Link>Subscribe</Link>
        </Stack>
    </Stack>
  )
}

export default Footer