import { useContext } from "react";
import "./CartItem.css";
import { itemContext } from "../Store/itemContext";
const CartItem = ({ fruit }) => {
  const { addItem, removeItem } = useContext(itemContext);
  const addItemHandler = () => {
    addItem({ ...fruit, amount: 1 });
  };
  const removeItemHandler = () => {
    removeItem(fruit.id);
  };
  return (
    <section className="card cart">
      <div className="card__description">
        <p className="card__itemName">{fruit.name}</p>
        <p className="card__itemprice">$ {fruit.price}</p>
      </div>

      <div className="card__submit">
        <p className="card_quantity">
          x<span>{fruit.amount}</span>
        </p>
        <div className="card_qty_ctr">
          <button className="card_qty_btn" onClick={addItemHandler}>
            +
          </button>
          <button className="card_qty_btn" onClick={removeItemHandler}>
            -
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
