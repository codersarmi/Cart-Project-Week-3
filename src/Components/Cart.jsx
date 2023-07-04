import "./Cart.css";
import CartItem from "./CartItem";

const fruits = [
  {
    id: 1,
    name: "Apple",
    price: 2.98,
    description: "Fresh apple fruit from Myanmar",
    quantity: 2,
  },
  {
    id: 2,
    name: "Banana",
    price: 3.45,
    description: "Fresh banana fruit from Myanmar",
    quantity: 2,
  },
  {
    id: 3,
    name: "Coconut",
    price: 5.78,
    description: "Fresh coconut fruit from Myanmar",
    quantity: 2,
  },
];

const Cart = () => {
  return (
    <section className="cartbox">
      <h2>Carts</h2>
      {fruits.map((fruit) => (
        <CartItem key={fruit.id} fruit={fruit} />
      ))}
      <hr />
      <div className="cart-total-price">
        <h3>Total Price</h3>
        <p>$ 3,000.00</p>
      </div>
      <div className="cart-btns">
        <button className="close-btn">Close</button>
        <button className="order-btn">Order</button>
      </div>
    </section>
  );
};

export default Cart;
