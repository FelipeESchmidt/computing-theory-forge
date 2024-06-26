import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Tooltip } from "@components/Tooltip";
import { useAppSavedProvider } from "@contexts/AppSavedProvider";
import { newMessage } from "@redux/AlertMessage/actions";
import { selectLanguage } from "@redux/Language/selectors";
import { TMDefinitionSelector } from "@redux/TMDefinition/selectors";
import { saveMachine, updateMachine } from "@services/theoreticalMachines";
import { translateMessage } from "@utils/messages";
import { minifyMachine } from "@utils/theoreticalMachine";
import React, { useEffect } from "react";
import { FiSave } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import * as S from "./styles";

export const SaveTooltip: React.FC = () => {
  const { machineSaved, setMachineSaved } = useAppSavedProvider();
  const { machineIsGenerated, recorders } = useSelector(TMDefinitionSelector);
  const { texts } = useSelector(selectLanguage);
  const dispatch: Dispatch<any> = useDispatch();

  const [machineName, setMachineName] = React.useState(machineSaved?.name ?? "");
  const [forceHide, setForceHide] = React.useState(false);

  const hasMachineSaved = !!machineSaved;

  const handleSaveMachine = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      const machineMinified = minifyMachine(recorders);
      const response = await saveMachine(machineName, machineMinified);
      const message = translateMessage(response.message, texts);
      dispatch(newMessage(message, "success"));
      setMachineSaved({
        id: response.responseObject.id,
        machine: machineMinified,
        name: machineName,
      });
    } catch (error) {
      if (typeof error === "string") {
        const errorMessage = translateMessage(error, texts);
        dispatch(newMessage(errorMessage, "danger"));
        return;
      }
    } finally {
      setForceHide(true);
    }
  };

  const handleUpdateMachine = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (!machineSaved) {
      return;
    }
    try {
      const machineMinified = minifyMachine(recorders);
      const response = await updateMachine(machineSaved.id, machineName, machineMinified);
      const message = translateMessage(response.message, texts);
      dispatch(newMessage(message, "success"));
      setMachineSaved({
        ...machineSaved,
        machine: machineMinified,
        name: machineName,
      });
    } catch (error) {
      if (typeof error === "string") {
        const errorMessage = translateMessage(error, texts);
        dispatch(newMessage(errorMessage, "danger"));
        return;
      }
    } finally {
      setForceHide(true);
    }
  };

  const renderButtons = () => {
    if (hasMachineSaved) {
      return (
        <S.ButtonsContainer>
          <Button
            text={texts.theoreticalMachine.save.buttonUpdate}
            onClick={handleUpdateMachine}
            variant="contained"
          />
          <Button
            text={texts.theoreticalMachine.save.buttonSaveNew}
            onClick={handleSaveMachine}
            variant="outlined"
          />
        </S.ButtonsContainer>
      );
    }
    return (
      <S.ButtonsContainer>
        <Button
          text={texts.theoreticalMachine.save.button}
          onClick={handleSaveMachine}
          variant="contained"
        />
      </S.ButtonsContainer>
    );
  };

  useEffect(() => {
    if (forceHide) {
      setForceHide(false);
    }
  }, [forceHide]);

  return (
    <S.SaveTooltipContainer disabled={machineIsGenerated ? 0 : 1}>
      <Tooltip
        disabled={!machineIsGenerated}
        forceHide={forceHide}
        customIcon={
          <S.StyledIcon>
            <FiSave />
          </S.StyledIcon>
        }
      >
        <S.SaveTooltipTooltipContainer>
          <S.TopContainer>
            <S.Title>
              {hasMachineSaved
                ? texts.theoreticalMachine.save.titleUpdate
                : texts.theoreticalMachine.save.title}
            </S.Title>
          </S.TopContainer>
          <S.Form>
            <S.FormContainer>
              <Input
                id="machine-name"
                label={texts.theoreticalMachine.save.name}
                value={machineName}
                onChange={(value) => setMachineName(value)}
              />
            </S.FormContainer>
            {renderButtons()}
          </S.Form>
        </S.SaveTooltipTooltipContainer>
      </Tooltip>
    </S.SaveTooltipContainer>
  );
};
