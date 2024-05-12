import { Skeleton } from "@components/Skeleton";
import { useAppSavedProvider } from "@contexts/AppSavedProvider";
import { newMessage } from "@redux/AlertMessage/actions";
import { selectLanguage } from "@redux/Language/selectors";
import {
  clearMachineWithThunk,
  createTheoreticalMachine,
} from "@redux/TMDefinition/actions";
import {
  deleteMachine,
  getAllMachines,
  ISavedTheoreticalMachineProps,
} from "@services/theoreticalMachines";
import { translateMessage } from "@utils/messages";
import { increaseMachine } from "@utils/theoreticalMachine";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";

import { Product } from "../constants";
import * as S from "../styles";
import { TheoreticalMachineCard } from "./Card";

interface TheoreticalMachinesProps {
  product: Product;
}

export const TheoreticalMachines: React.FC<TheoreticalMachinesProps> = ({ product }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();
  const { setMachineSaved } = useAppSavedProvider();

  const { texts } = useSelector(selectLanguage);

  const [isLoading, setIsLoading] = React.useState(true);
  const [savedMachines, setSavedMachines] = React.useState<
    ISavedTheoreticalMachineProps[]
  >([]);

  const handleGoToMachineDefinition = () => {
    navigate(product.path);
  };

  const handleNewMachineClick = () => {
    dispatch(clearMachineWithThunk());
    setMachineSaved(undefined);
    handleGoToMachineDefinition();
  };

  const handleSavedCardClick = (machine: ISavedTheoreticalMachineProps) => {
    const machineSaved = increaseMachine(machine.machine, texts);
    dispatch(createTheoreticalMachine(machineSaved, texts));
    setMachineSaved(machine);
    handleGoToMachineDefinition();
  };

  const handleRemoveMachine = async (
    machine: ISavedTheoreticalMachineProps,
    event: React.MouseEvent,
  ) => {
    event.stopPropagation();
    try {
      const response = await deleteMachine(machine.id);
      const message = translateMessage(response.message, texts);
      dispatch(newMessage(message, "success"));
      setSavedMachines((prev) => prev.filter((m) => m.id !== machine.id));
    } catch (error) {
      if (typeof error === "string") {
        const errorMessage = translateMessage(error, texts);
        dispatch(newMessage(errorMessage, "danger"));
        return;
      }
    }
  };

  React.useEffect(() => {
    (async () => {
      try {
        const data = await getAllMachines();
        setSavedMachines(data);
      } catch (error) {
        if (typeof error === "string") {
          const errorMessage = translateMessage(error, texts);
          dispatch(newMessage(errorMessage, "danger"));
          return;
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <S.StyledProductCards>
      <TheoreticalMachineCard isNew onClick={handleNewMachineClick} />
      {savedMachines.map((machine) => (
        <TheoreticalMachineCard
          key={machine.id}
          title={machine.name}
          onClick={() => handleSavedCardClick(machine)}
          onRemove={(event) => handleRemoveMachine(machine, event)}
        />
      ))}
      {isLoading && <Skeleton />}
    </S.StyledProductCards>
  );
};
