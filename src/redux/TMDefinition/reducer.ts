import * as constants from "./constants";
import {
  createNewRecorder,
  generateTheoreticalMachine,
  markRecorderFunctionality,
} from "./functions";
import { generateRandomMachine } from "./random";
import { RecorderActions, TheoreticalMachineRecorderProps } from "./types";

const defaultState = {
  machineIsGenerated: false as boolean,
  recorders: [] as TheoreticalMachineRecorderProps[],
  machine: {
    inputs: [],
    outputs: [],
    functions: [],
    comparators: [],
    definitionText: "",
  },
} as const;

export default function reducer(state = defaultState, action: RecorderActions) {
  switch (action.type) {
    case constants.ADD_RECORDER: {
      const newRecorder = createNewRecorder(action.functionalities, state.recorders);
      return {
        ...state,
        recorders: [...state.recorders, newRecorder],
        machineIsGenerated: false,
      };
    }

    case constants.REMOVE_RECORDER: {
      const newRecorders = [...state.recorders];
      newRecorders.splice(action.recorderId, 1);
      return { ...state, recorders: [...newRecorders], machineIsGenerated: false };
    }

    case constants.MARK_RECORDER: {
      const newRecorders = markRecorderFunctionality(
        action.recorderId,
        action.functionalityId,
        [...state.recorders],
      );

      return { ...state, recorders: newRecorders, machineIsGenerated: false };
    }

    case constants.GENERATE_RANDOM_MACHINE: {
      const randomRecorders = generateRandomMachine(
        action.functionalities,
        action.recorderLimits,
      );

      return { ...state, recorders: randomRecorders, machineIsGenerated: false };
    }

    case constants.CREATE_THEORETICAL_MACHINE: {
      const { inputs, outputs, functions, comparators, definition } =
        generateTheoreticalMachine(action.recorders);
      return {
        ...state,
        machine: { inputs, outputs, functions, comparators, definitionText: definition },
        machineIsGenerated: true,
      };
    }

    default: {
      return state;
    }
  }
}
