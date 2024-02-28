import * as constants from "./constants";
import { createNewRecorder, markRecorderFunctionality } from "./functions";
import { generateRandomMachine } from "./random";
import { RecorderActions, TheoreticalMachineRecorderProps } from "./types";

const defaultState = {
  recorders: [] as TheoreticalMachineRecorderProps[],
} as const;

export default function reducer(state = defaultState, action: RecorderActions) {
  switch (action.type) {
    case constants.ADD_RECORDER: {
      const newRecorder = createNewRecorder(action.functionalities, state.recorders);
      return { ...state, recorders: [...state.recorders, newRecorder] };
    }

    case constants.MARK_RECORDER: {
      const newRecorders = markRecorderFunctionality(
        action.recorderId,
        action.functionalityId,
        [...state.recorders],
      );

      return { ...state, recorders: newRecorders };
    }

    case constants.GENERATE_RANDOM_MACHINE: {
      const randomRecorders = generateRandomMachine(
        action.functionalities,
        action.recorderLimits,
      );

      return { ...state, recorders: randomRecorders };
    }

    default: {
      return state;
    }
  }
}
