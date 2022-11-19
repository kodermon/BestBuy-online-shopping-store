import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import { ProductsProvider } from './utils/ProductsContext';
import Details from './pages/Details';
import Blog from './pages/Blog';
// import { FaShoppingCart } from 'react-icons/fa';
// import { Details } from '@mui/icons-material';


function App() {
  const [allProducts, setAllProducts] = useState([]);

    const fetchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setAllProducts(data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchData();
    }, [])


  return (
    <ProductsProvider>
      <Box className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/products' element={<Shop allProducts={allProducts} />}>Shop</Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/products/:id' element={<Details />}></Route>
        </Routes>
      </Box>
    </ProductsProvider>
  );
}

export default App;
