import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

const App = () => {
  const [items, setItems] = useState(data);

  const categories = items.map((item) => item.category);
  const temporarySet = new Set(categories);
  const uniqueCategories = ["all", ...temporarySet];
  const [currentCategories, setCategories] = useState(
    Array.from(uniqueCategories)
  );

  const changeCategory = (newValue) => {
    setItems(() => {
      if (newValue === "all") {
        return data;
      } else {
        const newArray = data.filter((item) => item.category === newValue);
        return newArray;
      }
    });
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
