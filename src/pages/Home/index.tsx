import { useNavigate } from "react-router-dom";

import { useThemeController } from "../../contexts/ThemeControllerProvider";
import { StyledTitle } from "./styles";
export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { switchThemeMode, themeMode } = useThemeController();

  return (
    <div>
      <button onClick={switchThemeMode}>{themeMode}</button>
      <StyledTitle>Home</StyledTitle>
      <button onClick={() => navigate("/theoretical-machine")}>go to Theoretical</button>
    </div>
  );
};
