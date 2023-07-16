import { useContext } from "react";
import "./Nav.css";
import { itemContext } from "../Store/itemContext";
const Nav = (props) => {
  const { items } = useContext(itemContext);
  const totalCart = items.reduce((currentVal, item) => {
    return currentVal + item.amount;
  }, 0);
  return (
    <nav className="nav">
      <h1>Shoopy</h1>
      <button onClick={props.showCartHandler}>
        Cart <span>({totalCart})</span>
      </button>
    </nav>
  );
};

export default Nav;
