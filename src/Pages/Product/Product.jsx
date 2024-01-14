import React, { useState, useEffect } from "react";
import axios from "axios";
import CartList from "./ComponentProduct/CartList";
import FilterList from "./ComponentProduct/FilterList";
import ProductList from "./ComponentProduct/ProductList";
import "./Product.css";
import { Breadcrumb } from "antd";
const Product = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  //  Gọi Api
  const getAllProductApi = async () => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product?limit=6",
      method: "GET",
    });
    setArrProduct(res.data.content);
  };
  useEffect(() => {
    getAllProductApi();
  }, []);
  // Tìm kiếm sản phẩm
  const handleSearch = () => {
    const filteredProducts = arrProduct.filter((prod) =>
      prod.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setArrProduct(filteredProducts);
  };
  // Lọc Giá
  const handleFilterByPrice = () => {
    const filteredProducts = arrProduct.filter((prod) => {
      const productPrice = parseFloat(prod.price);
      const min = minPrice ? parseFloat(minPrice) : Number.NEGATIVE_INFINITY;
      const max = maxPrice ? parseFloat(maxPrice) : Number.POSITIVE_INFINITY;
      return productPrice >= min && productPrice <= max;
    });
    setArrProduct(filteredProducts);
  };
  const handleResetFilters = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    getAllProductApi();
  };
  // Giỏ Hàng
  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  // Logic tính toán
  // +1 sản phẩm
  const handleIncrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };
  // -1 sản phẩm
  const handleDecrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };
  //Xóa sản phẩm
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  // Tính tổng tiền sản phẩm
  const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  // Ẩn hiện sản phẩm
  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="introduce">
      <div className="wrap_background_aside margin-bottom-40 container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div>
              <Breadcrumb
                items={[
                  {
                    href: "/",
                    title: "Trang chủ",
                  },

                  {
                    title: "Sản Phẩm",
                  },
                ]}
              />
            </div>
            <div className="product-list-container">
              <h1>Product List</h1>
              <FilterList
                searchTerm={searchTerm}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setSearchTerm={setSearchTerm}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                handleSearch={handleSearch}
                handleFilterByPrice={handleFilterByPrice}
                handleResetFilters={handleResetFilters}
              />
              <div className="cart-container">
                <div onClick={handleToggleCart} className="cart-icon">
                  Cart ({cart.length})
                </div>
                {showCart && (
                  <CartList
                    cart={cart}
                    handleIncrementQuantity={handleIncrementQuantity}
                    handleDecrementQuantity={handleDecrementQuantity}
                    handleRemoveFromCart={handleRemoveFromCart}
                    calculateTotalCost={calculateTotalCost}
                  />
                )}
              </div>
              <ProductList
                arrProduct={arrProduct}
                handleAddToCart={handleAddToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
