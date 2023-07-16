import { useState } from "react";
import Backdrop from "../Components/Backdrop";
import Body from "./Body";
import Header from "./Header";

const Main = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <Header showCartHandler={showCartHandler} />
      <Backdrop showCart={showCart} hideCartHandler={hideCartHandler} />
      <Body />
    </>
  );
};

export default Main;
