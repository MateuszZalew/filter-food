const Categories = ({ categories, onClick }) => {
  const setCategory = (newCategory) => {
    onClick(newCategory);
  };

  const buttons = categories.map((category) => (
    <button
      key={category}
      className="btn"
      onClick={() => setCategory(category)}
    >
      {category}
    </button>
  ));
  return <div className="btn-container">{buttons}</div>;
};

export default Categories;
