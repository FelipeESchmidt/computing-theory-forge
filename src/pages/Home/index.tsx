import { useThemeController } from "../../contexts/ThemeControllerProvider";
import { StyledTitle } from "./styles";

export const Home: React.FC = () => {
  const { switchThemeMode, themeMode } = useThemeController();

  return (
    <div>
      <button onClick={switchThemeMode}>{themeMode}</button>
      <StyledTitle>Home</StyledTitle>
    </div>
  );
};
