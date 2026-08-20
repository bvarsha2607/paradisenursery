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
    description: "A low-maintenance plant perfect for your home."
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    category: "Flowering Plants",
    image: "/images/peace-lily.jpg",
    description: "A beautiful flowering plant for indoor decoration."
  },
  {
    id: 4,
    name: "Money Plant",
    price: 12,
    category: "Indoor Plants",
    image: "/images/money-plant.jpg",
    description: "An attractive and easy-to-grow indoor plant."
  },
  {
    id: 5,
    name: "Rose Plant",
    price: 25,
    category: "Flowering Plants",
    image: "/images/rose.jpg",
    description: "A beautiful plant that produces colorful roses."
  },
  {
    id: 6,
    name: "Cactus",
    price: 10,
    category: "Succulents",
    image: "/images/cactus.jpg",
    description: "A low-maintenance plant that requires little water."
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const categories = [
    ...new Set(products.map((product) => product.category))
  ];

  return (
    <div className="product-list">

      <h1>Paradise Nursery</h1>
      <h2>Our Plants</h2>

      {categories.map((category) => (
        <div className="category-section" key={category}>

          <h2>{category}</h2>

          <div className="product-container">

            {products
              .filter((product) => product.category === category)
              .map((product) => (

                <div className="product-card" key={product.id}>

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <p>
                    <strong>
                      ${product.price.toFixed(2)}
                    </strong>
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
