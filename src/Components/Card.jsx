import { useContext, useState } from "react";
import "./Card.css";
import { itemContext } from "../Store/itemContext";

const Card = ({ fruit }) => {
  const { id, name, description, price } = fruit;
  const { addItem } = useContext(itemContext);
  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;
  const addToCartHandler = () => {
    if (currentAmountNumber < 1 || currentAmountNumber > 5) {
      alert("Please enter a valid amount between 1 and 5 !!");
      return;
    }
    addItem({
      id,
      name,
      price,
      amount: currentAmountNumber,
    });
  };
  return (
    <section className="card">
      <div className="card__description">
        <p className="card__itemName">{name}</p>
        <p>{description}</p>
        <p>$ {price}</p>
      </div>

      <div className="card__submit">
        <input
          type="number"
          min={1}
          max={5}
          className="card__submit-number"
          onChange={(e) => {
            setCurrentAmount(e.target.value);
          }}
        />
        <button className="card__submit-btn" onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default Card;
