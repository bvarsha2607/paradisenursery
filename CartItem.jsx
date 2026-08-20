import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  // Calculate total quantity
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <h2>Your cart is empty</h2>

        <button onClick={() => window.history.back()}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <p>Total Items: {totalItems}</p>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            width="150"
          />

          <div>
            <h2>{item.name}</h2>

            <p>Price: ${item.price}</p>

            <div>
              <button onClick={() => decreaseQuantity(item)}>
                -
              </button>

              <span> {item.quantity} </span>

              <button onClick={() => increaseQuantity(item)}>
                +
              </button>
            </div>

            <p>
              Item Total: $
              {(item.price * item.quantity).toFixed(2)}
            </p>

            <button onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h2>Total Cost: ${totalPrice.toFixed(2)}</h2>

        <button onClick={() => window.history.back()}>
          Continue Shopping
        </button>

        <button
          onClick={() => alert("Thank you for your purchase!")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;

                <span>{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleIncrement(item)}
