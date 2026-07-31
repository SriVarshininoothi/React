import React from "react";
import { useParams } from "react-router-dom";
import products from "../Components/product";


const ProductDetails = () => {

    const {id} = useParams();

    const product = products.find(

        (item) => item.id === Number(id));

    return(

        <div>

            <h2>Product name : {product.name}</h2>
            <p>Price: {product.price} </p>
            <p>Product Id: {product.id} </p>
            

        </div>
    )
}

export default ProductDetails;