import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import data from "./data";

const App = () => {
  const [items, setItems] = useState(data);

  return (
    <main className="menu">
      <Title />
      <Menu items={items} />
    </main>
  );
};
export default App;
