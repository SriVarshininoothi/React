import React, { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";

const ProductCards = () => {
  // States
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 1. Loading State
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Atom
          color="#32cd32"
          size="medium"
          text="Loading..."
          textColor="#32cd32"
        />
      </div>
    );
  }

  // 2. Error State
  if (error) {
    return <h2 className="text-center text-danger mt-5">{error}</h2>;
  }

  // 3. Render Cards
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product Listing</h2>

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5>{product.title}</h5>
                  <p className="mb-1">
                    Price: <strong>₹ {product.price}</strong>
                  </p>
                  <p>
                    Rating: <strong>⭐ {product.rating}</strong>
                  </p>
                </div>
                <button className="btn btn-primary w-100 mt-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;