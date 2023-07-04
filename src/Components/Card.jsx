import "./Card.css";

const Card = ({ fruit }) => {
  return (
    <section className="card">
      <div className="card__description">
        <p className="card__itemName">{fruit.name}</p>
        <p>{fruit.description}</p>
        <p>$ {fruit.price}</p>
      </div>

      <div className="card__submit">
        <input type="number" min={1} max={5} className="card__submit-number" />
        <button className="card__submit-btn">Add to Cart</button>
      </div>
    </section>
  );
};

export default Card;
