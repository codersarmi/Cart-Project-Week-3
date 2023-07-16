import { useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { itemContext } from "../Store/itemContext";

const Cart = (props) => {
  const { items, totalAmount } = useContext(itemContext);
  const totalPrice = `$ ${totalAmount.toFixed(2)}`;
  return (
    <section className="cartbox">
      <h1 className="cartbox_title">Your Cart Summary</h1>
      <section className="cartbox-ctr">
        {items.length < 1 ? (
          <h3 className="cartbox_noItem">No Item in Your Cart</h3>
        ) : (
          <>
            {items.map((fruit) => (
              <CartItem key={fruit.id} fruit={fruit} />
            ))}
          </>
        )}
      </section>
      <hr />
      <div className="cart-total-price">
        <h3>Total Price</h3>
        <p>{totalPrice}</p>
      </div>
      <div className="cart-btns">
        <button className="close-btn" onClick={props.hideCartHandler}>
          Close
        </button>
        {items.length < 1 ? (
          <></>
        ) : (
          <button className="order-btn" onClick={() => alert("Ordered !!")}>
            Order
          </button>
        )}
      </div>
    </section>
  );
};

export default Cart;
