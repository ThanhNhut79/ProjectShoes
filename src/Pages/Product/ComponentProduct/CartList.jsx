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
    <div className="total">
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id}>
            Tên Sản Phẩm: <span>{item.name}</span> - Giá :
            <span>{item.price}</span> - Số Lượng: {item.quantity} - Tổng: $
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
