import { BackgroundImage, Body, DirectoryItemContainer } from "./styles.jsx";

export default function DirectoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}>
        <Body>
          <h2>{title}</h2>
          <p>Shop now</p>
        </Body>
      </BackgroundImage>
    </DirectoryItemContainer>
  );
}
