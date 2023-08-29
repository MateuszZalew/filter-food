import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

const App = () => {
  const [items, setItems] = useState(data);

  const categories = items.map((item) => item.category);
  const uniqueCategories = new Set(categories);
  uniqueCategories.add("all");
  const [currentCategories, setCategories] = useState(
    Array.from(uniqueCategories)
  );

  const changeCategory = (newValue) => {
    console.log(newValue);
  };

  return (
    <main className="menu">
      <Title />
      <Categories onClick={changeCategory} categories={currentCategories} />
      <Menu items={items} />
    </main>
  );
};
export default App;
