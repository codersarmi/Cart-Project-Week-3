import "./Header.css";
import Nav from "../Components/Nav";
import Summary from "../Components/Summary";

const Header = () => {
  return (
    <section className="header">
      <Nav />
      <Summary />
    </section>
  );
};

export default Header;
