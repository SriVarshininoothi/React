import React from "react";
import ProductCard from "./ProductCard";

const Product = () => {
    
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: "45000",
            rating: "4.5",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 2,
            name: "Mobile",
            price: "25000",
            rating: "4.3",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 3,
            name: "Wireless Headphones",
            price: "3500",
            rating: "4.6",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 4,
            name: "Smartwatch",
            price: "5000",
            rating: "4.2",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 5,
            name: "Bluetooth Speaker",
            price: "2200",
            rating: "4.4",
            image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 6,
            name: "Tablet",
            price: "30000",
            rating: "4.1",
            image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 7,
            name: "Mechanical Keyboard",
            price: "4500",
            rating: "4.7",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60"
        },
        {
            id: 8,
            name: "Gaming Mouse",
            price: "1800",
            rating: "4.5",
            image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60"
        }
    ];

    return (
        <div className="container my-4">
            <h1 style={{color:"green"}}>Product Cards</h1>

            <div className="d-flex flex-wrap gap-3">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default Product;