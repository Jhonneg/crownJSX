import { BackgroundImage, Body, DirectoryItemContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { DirectoryCategory } from "../directory/index";

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
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
};
export default DirectoryItem;
