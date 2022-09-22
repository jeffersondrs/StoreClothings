import "./category-style.component.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
      <div className="category-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="category-body-container">
          <h2 className="text-red-600 text-2xl">{title}</h2>
          <p>Shot Now</p>
        </div>
      </div>
  );
};
export default CategoryItem;
