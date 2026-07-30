import React from "react"
import products from "../Components/product"
import { Link } from "react-router-dom"

const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>

      {
         products.map((item) => 
          
            <div key={item.id}>

                <h3>{item.name }</h3>
                <p>{item.price}</p>
                

            </div>
        )
      }
    </div>
  )
}

export default Products