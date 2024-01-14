import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
const CartList = ({
  cart,
  handleIncrementQuantity,
  handleDecrementQuantity,
  handleRemoveFromCart,
  calculateTotalCost,
}) => (
  <div>
    <div>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} - Quantity: {item.quantity} - Total: $
            {item.price * item.quantity}
            <button onClick={() => handleIncrementQuantity(item.id)}>
              <IoMdAdd />
            </button>
            <button onClick={() => handleDecrementQuantity(item.id)}>
              <FaMinus />
            </button>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              <MdOutlineDelete />
            </button>
          </li>
        ))}
        <li>Total Cost: ${calculateTotalCost()}</li>
      </ul>
    </div>
  </div>
);

export default CartList;
