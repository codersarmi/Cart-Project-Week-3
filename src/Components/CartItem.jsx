const CartItem = ({ fruit }) => {
  return (
    <section className="card cart">
      <div className="card__description">
        <p className="card__itemName">{fruit.name}</p>
        <p>{fruit.description}</p>
      </div>

      <div className="card__submit">
        <p>$ {fruit.price}</p>
        <input type="number" min={1} max={5} className="card__submit-number" />
      </div>
    </section>
  );
};

export default CartItem;
