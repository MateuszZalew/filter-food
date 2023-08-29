import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  const menuItems = items.map((item) => <MenuItem key={item.id} {...item} />);
  return <section className="section-center">{menuItems}</section>;
};

export default Menu;
