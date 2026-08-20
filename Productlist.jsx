import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    category: "Indoor Plants",
    image: "/images/aloe-vera.jpg",
    description: "A beautiful and easy-to-care-for indoor plant."
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    category: "Indoor Plants",
    image: "/images/snake-plant.jpg",
    description: "A low-maintenance plant that improves indoor air quality."
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    category: "Flowering Plants",
    image: "/images/peace-lily.jpg",
    description: "A lovely flowering plant perfect for home decoration."
  },
  {
    id: 4,
    name: "Money Plant",
    price: 12,
    category: "Indoor Plants",
    image: "/images/money-plant.jpg",
    description: "A popular indoor plant that is easy to grow."
  },
  {
    id: 5,
    name: "Rose Plant",
    price: 25,
    category: "Flowering Plants",
    image: "/images/rose.jpg",
    description: "A beautiful flowering plant with attractive roses."
  },
  {
    id: 6,
    name: "Cactus",
    price: 10,
    category: "Succulents",
    image: "/images/cactus.jpg",
    description: "A small, attractive plant requiring very little water."
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="product-list">
      <h1>Paradise Nursery</h1>
      <h2>Our Plants</h2>

      {categories.map((category) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>

          <div className="product-container">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div className="product-card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    width="200"
                  />

                  <h4>{product.name}</h4>

                  <p>{product.description}</p>

                  <p>
                    <strong>${product.price}</strong>
                  </p>

                  <button
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
