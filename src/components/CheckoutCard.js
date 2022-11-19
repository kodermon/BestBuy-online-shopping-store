import { Stack, Typography, Button } from '@mui/material'
import { RemoveSharp } from '@mui/icons-material'
import { useContext } from 'react'
import ProductsContext from '../utils/ProductsContext'

const CheckoutCard = ({ item }) => {
    //console.log(item)
    const { removeItem } = useContext(ProductsContext)

  return (
    <Stack 
        direction='row' 
        alignItems='center' 
        justifyContent='center'
        gap='100px'
    >
        <Stack>
            <img 
                src={item.product.image}
                alt={item.title}
                height='250px'
                width='200px'
            />
            <Typography
                textAlign='left'
                fontWeight='500'
                flexWrap='wrap'
                width='200px'
                m='auto'
            >{item.product.title}</Typography>
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='space-around'
            >
                <Button
                    onClick={() => removeItem(item.product.id)}
                    startIcon={<RemoveSharp />}
                    aria-label='remove from shopping cart'
                    sx={{
                            backgroundColor: 'black',
                            '&:hover': { backgroundColor: 'red' },
                            color: 'white'
                        }}
                >
                    remove
                </Button>
                <input type='number' className='number-of-items'/>
            </Stack>
        </Stack>
        <Typography
            fontWeight='700'
            fontSize='19px'
        >${item.product.price}</Typography>
    </Stack>
  )
}

export default CheckoutCard