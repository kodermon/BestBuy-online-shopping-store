import { createContext, useState } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    
    const addItem = (product) => {
        setItems(prevItem => [...prevItem, {product}])
    }

    const removeItem = (id) => {
        setItems(prevItems => prevItems.filter((product) => id !== product.id))
    } 

    return (
        <ProductsContext.Provider value={{ items, addItem, removeItem }}>
            { children }
        </ProductsContext.Provider>
    )
}

export default ProductsContext