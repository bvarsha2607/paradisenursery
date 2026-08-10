```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb4",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "Money Plant",
    price: 20,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1614594575920-a1e8d1c7c7f3",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 22,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 28,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1632207691144-8e9a9c5f6f8f",
  },
  {
    id: 6,
    name: "Aloe Vera",
    price: 18,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8a44b8a",
  },

  // Flowering Plants
  {
    id: 7,
    name: "Rose Plant",
    price: 35,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
  },
  {
    id: 8,
    name: "Jasmine Plant",
    price: 32,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
  },
  {
    id: 9,
    name: "Hibiscus",
    price: 30,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1597848212624-e19e7b2b6b8b",
  },
  {
    id: 10,
    name: "Orchid",
    price: 40,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1567225591450-06036b3392a6",
  },
  {
    id: 11,
    name: "Marigold",
    price: 20,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1509223197845-458d87318791",
  },
  {
    id: 12,
    name: "Bougainvillea",
    price: 38,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a",
  },

  // Outdoor Plants
  {
    id: 13,
    name: "Areca Palm",
    price: 45,
    category: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
  },
  {
    id: 14,
    name: "Bamboo Palm",
    price: 42,
    category: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1597055181300-d9d8e7e2b1d0",
  },
  {
    id: 15,
    name: "Fiddle Leaf Fig",
    price: 50,
    category: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 16,
    name: "Croton",
    price: 35,
    category: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683",
  },
  {
    id: 17,
    name: "Rubber Plant",
    price: 40,
    category: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1601985705806-5b5a71de600f",
  },
  {
    id: 18,
    name: "Boston Fern",
    price: 30,
    category: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1596724878582-76c0a8b6a9e4",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">🌿 Paradise Nursery</Link>
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart">
            🛒 Cart ({totalQuantity})
          </Link>
        </div>
      </nav>

      {/* Product Listing */}
      <div className="product-container">
        <h1>Paradise Nursery</h1>
        <p>Choose beautiful plants for your home and garden.</p>

        {categories.map((category) => (
          <section key={category} className="category-section">
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <h3>{plant.name}</h3>

                    <p className="plant-price">
                      ${plant.price}
                    </p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
```

  );
}

export default ProductList;
