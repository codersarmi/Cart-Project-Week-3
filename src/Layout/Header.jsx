import "./Header.css";
import Nav from "../Components/Nav";
import Summary from "../Components/Summary";

const Header = (props) => {
  return (
    <section className="header">
      <Nav showCartHandler={props.showCartHandler} />
      <Summary />
    </section>
  );
};

export default Header;
