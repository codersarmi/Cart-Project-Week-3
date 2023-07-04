import Card from "../Components/Card";

const fruits = [
  {
    id: 1,
    name: "Apple",
    price: 2.98,
    description: "Fresh apple fruit from Myanmar",
  },
  {
    id: 2,
    name: "Banana",
    price: 3.45,
    description: "Fresh banana fruit from Myanmar",
  },
  {
    id: 3,
    name: "Coconut",
    price: 5.78,
    description: "Fresh coconut fruit from Myanmar",
  },
  {
    id: 4,
    name: "Pineapple",
    price: 2.0,
    description: "Fresh pineapple fruit from Myanmar",
  },
  {
    id: 5,
    name: "Mango",
    price: 5.5,
    description: "Fresh mango fruit from Myanmar",
  },
];

const Body = () => {
  return (
    <section className="body">
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruit} />
      ))}
    </section>
  );
};

export default Body;
