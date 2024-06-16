import { BackgroundImage, Body, DirectoryItemContainer } from "./styles.jsx";
import { useNavigate } from "react-router-dom";

export default function DirectoryItem({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}>
        <Body>
          <h2>{title}</h2>
          <p>Shop now</p>
        </Body>
      </BackgroundImage>
    </DirectoryItemContainer>
  );
}
