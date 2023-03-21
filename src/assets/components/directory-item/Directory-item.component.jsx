import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-style.component";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <DirectoryItemContainer onClick={handleClick}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <h2 className="text-red-600 text-2xl">{title}</h2>
        <p>Shot Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
