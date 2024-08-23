import "./App.css";
import Family from "./components/family/family";
import Persons from "./components/persons/persons";
import Products from "./components/products/products";

function App() {
  const products = ["table", "couch", "chair1", "chair2"];
  const names = ["Parker", "Simmons", "Lewis", "Poe"];
  const persons = [
    { name: "Juan", age: 26 },
    { name: "Gabriel", age: 27 },
    { name: "Valentina", age: 22 },
    { name: "Paula", age: 25 },
    { name: "Andrés", age: 20 },
  ];

  return (
    <>
      <Products prs={products} />
      <br />
      <Persons prs={names}></Persons>
      <br />
      <Family prs={persons}></Family>
    </>
  );
}

export default App;
