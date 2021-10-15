import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import "../styles/MyOrder.scss";
import flechita from "@icons/flechita.svg";

const MyOrder = () => {
  const {
    state: { cart },
  } = useContext(AppContext);
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.map((product) => <OrderItem product={product} key={`orderItem-${product.id}`} />)}
        
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
