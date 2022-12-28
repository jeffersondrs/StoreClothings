import "./directory-style.component.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
      <div className="directory-item-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="body">
          <h2 className="text-red-600 text-2xl">{title}</h2>
          <p>Shot Now</p>
        </div>
      </div>
  );
};
export default DirectoryItem;
