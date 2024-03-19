import { TMDefinitionSelector } from "@redux/TMDefinition/selectors";
import { useSelector } from "react-redux";

import { Definition } from "./Definition";
import { Programming } from "./Programming";

export const TheoreticalMachine: React.FC = () => {
  const { machineIsGenerated } = useSelector(TMDefinitionSelector);
  return machineIsGenerated ? <Programming /> : <Definition />;
};
