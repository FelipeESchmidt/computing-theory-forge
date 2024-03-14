import { TextArea } from "@components/TextArea";
import { TMDefinitionSelector } from "@redux/TMDefinition/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const DefinitionText = () => {
  const { machine } = useSelector(TMDefinitionSelector);

  return <TextArea readOnly value={machine.definitionText} />;
};

export default DefinitionText;
