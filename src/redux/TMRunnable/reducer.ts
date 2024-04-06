import * as constants from "./constants";
import { generate } from "./functions";
import { InitialValueObject, RecorderActions } from "./types";

const defaultState = {
  code: "",
  initialValues: {} as InitialValueObject,
};

export default function reducer(state = { ...defaultState }, action: RecorderActions) {
  switch (action.type) {
    case constants.GENERATE_CODE: {
      const code = generate(
        action.recorders,
        action.lines,
        state.initialValues,
        action.machineOutputs,
        action.texts,
      );
      return { ...state, code };
    }

    case constants.RESET_CODE:
      return { ...defaultState };

    case constants.START_INITIAL_VALUES: {
      const initialValues = action.machineInputs.reduce((acc, curr) => {
        acc[curr.recorder] = 0;
        return acc;
      }, {} as InitialValueObject);

      return { ...state, initialValues, code: "" };
    }

    case constants.SET_INITIAL_VALUE: {
      const initialValues = {
        ...state.initialValues,
        [action.recorderName]: action.value,
      };
      return { ...state, initialValues, code: "" };
    }

    default: {
      return state;
    }
  }
}
