import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-style.component";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <h2 className="text-red-600 text-2xl">{title}</h2>
        <p>Shot Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
