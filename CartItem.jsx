```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">🌿 Paradise Nursery</Link>
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/cart">🛒 Cart</Link>
        </div>
      </nav>

      {/* Shopping Cart */}
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <Link to="/products">
              <button>Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                {/* Plant Thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                {/* Plant Details */}
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Unit Price: ${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>

                  {/* Total Cost for Individual Plant */}
                  <p>
                    <strong>
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </strong>
                  </p>

                  {/* Delete Button */}
                  <button
                    className="delete-button"
                    onClick={() => handleRemove(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Total */}
            <div className="cart-summary">
              <h2>
                Total Cart Amount: ${totalAmount.toFixed(2)}
              </h2>

              {/* Checkout Button */}
              <button
                className="checkout-button"
                onClick={() => alert("Coming Soon!")}
              >
                Checkout
              </button>

              {/* Continue Shopping */}
              <Link to="/products">
                <button className="continue-button">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
```

                <span>{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleIncrement(item)}
