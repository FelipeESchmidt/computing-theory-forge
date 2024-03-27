export const START_INITIAL_VALUES = "@TMRunnable/START_INITIAL_VALUES";
export const SET_INITIAL_VALUE = "@TMRunnable/SET_INITIAL_VALUE";
export const GENERATE_CODE = "@TMRunnable/GENERATE_CODE";
export const RESET_CODE = "@TMRunnable/RESET_CODE";

export const firstCompLine = `'\tinstrução inicial e valores de entrada armazenados'`;

export const ifComps = {
  good: (recorder: string, line: number, nextLine: number | "Return") =>
    `'\tem ${line}, como ${recorder} = 0, desviou para ${nextLine}'`,
  bad: (recorder: string, line: number, nextLine: number | "Return") =>
    `'\tem ${line}, como ${recorder} ≠ 0, desviou para ${nextLine}'`,
};

export const realFunction = {
  soma: {
    func: (recorderName: string) => `${recorderName} += 1;`,
    compLine: (recorder: string, line: number, nextLine: number | "Return") =>
      `'\tem ${line}, adicionou do registrador ${recorder} e desviou para ${nextLine}'`,
  },
  subtrai: {
    func: (recorderName: string) => `${recorderName} -= 1;`,
    compLine: (recorder: string, line: number, nextLine: number | "Return") =>
      `'\tem ${line}, subtraiu do registrador ${recorder} e desviou para ${nextLine}'`,
  },
  dobra: {
    func: (recorderName: string) => `${recorderName} *= 2;`,
    compLine: (recorder: string, line: number, nextLine: number | "Return") =>
      `'\tem ${line}, duplicou do registrador ${recorder} e desviou para ${nextLine}'`,
  },
  exponencializa: {
    func: (recorderName: string) => `${recorderName} *= ${recorderName};`,
    compLine: (recorder: string, line: number, nextLine: number | "Return") =>
      `'\tem ${line}, exponenciou-se do registrador ${recorder} e desviou para ${nextLine}'`,
  },
};
