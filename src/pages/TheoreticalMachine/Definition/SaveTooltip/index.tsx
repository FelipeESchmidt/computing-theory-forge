import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Tooltip } from "@components/Tooltip";
import { newMessage } from "@redux/AlertMessage/actions";
import { selectLanguage } from "@redux/Language/selectors";
import { TMDefinitionSelector } from "@redux/TMDefinition/selectors";
import { saveMachine } from "@services/theoreticalMachines";
import { minifyMachine } from "@utils/theoreticalMachine";
import React from "react";
import { FiSave } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import * as S from "./styles";

export const SaveTooltip: React.FC = () => {
  const [machineName, setMachineName] = React.useState("");

  const { machineIsGenerated, recorders } = useSelector(TMDefinitionSelector);
  const { texts } = useSelector(selectLanguage);
  const dispatch: Dispatch<any> = useDispatch();

  const handleSaveMachine = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      const machineMinified = minifyMachine(recorders);
      const response = await saveMachine(machineName, machineMinified);
      dispatch(newMessage(response.message, "success"));
    } catch (error) {
      if (typeof error === "string") {
        dispatch(newMessage(error, "danger"));
        return;
      }
    }
  };

  return (
    <S.SaveTooltipContainer disabled={machineIsGenerated ? 0 : 1}>
      <Tooltip
        disabled={!machineIsGenerated}
        customIcon={
          <S.StyledIcon>
            <FiSave />
          </S.StyledIcon>
        }
      >
        <S.SaveTooltipTooltipContainer>
          <S.TopContainer>
            <S.Title>Save your created machine</S.Title>
          </S.TopContainer>
          <S.Form>
            <S.FormContainer>
              <Input
                id="machine-name"
                label="Machine name"
                value={machineName}
                onChange={(value) => setMachineName(value)}
              />
            </S.FormContainer>
            <Button
              disabled={!machineName}
              text="Save"
              onClick={handleSaveMachine}
              variant="contained"
            />
          </S.Form>
        </S.SaveTooltipTooltipContainer>
      </Tooltip>
    </S.SaveTooltipContainer>
  );
};
