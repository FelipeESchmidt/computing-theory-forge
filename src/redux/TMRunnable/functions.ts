import { LanguageType } from "@assets/languages";
import { TheoreticalMachineFunctionsIds } from "@globalTypes/theoreticalMachine";
import { LineItemsProps } from "@pages/TheoreticalMachine/Programming/types";
import {
  TheoreticalMachineFunctionalityDefinitionProps,
  TheoreticalMachineRecorderProps,
} from "@redux/TMDefinition/types";
import { LineProps } from "@redux/TMProgramming/types";

import { getFirstCompLine, ifComps, realFunction } from "./constants";
import { InitialValueObject } from "./types";

/* Inicio do script */
const codeStart = "(() => {\n\nlet programOut = ''\n";

/* Função para prevenir loop infinito
   codeVerifyInfiniteLoop() retorna:
        let linesRunned = 0;
        const verifyMax = 200;
        const verify = () => {
          linesRunned += 1;
          if(linesRunned > verifyMax){
            linesRunned = 0;
            return confirm('Seu programa pode estar em loop infinito! Deseja continuar?')
          }
          return true;
        }
*/
const getCodeVerifyInfiniteLoop = (texts: LanguageType) =>
  `\nlet linesRunned = 0;\nconst verifyMax = 200;\nconst verify = () => {linesRunned += 1;if(linesRunned > verifyMax){linesRunned = 0;return confirm('${texts.theoreticalMachine.runnableStep.programTexts.programCouldBeInLoop}')}return true;}\n`;

/* Fim do script */
const codeEnd = "\n})();";

/* Criação do logger (que será mostrado na tela ao final do script) */
const generateLogger = () => `const log = (str) => programOut += str + '\\n';\n`;

/* Função de Return do código, que printa valores dos outputs da máquina */
const generateReturn = (
  machineOutputs: TheoreticalMachineFunctionalityDefinitionProps[],
  texts: LanguageType,
) =>
  `const lineReturnFunction = () => {log('');${machineOutputs
    .map(
      (v) =>
        `log('${texts.theoreticalMachine.runnableStep.programTexts.finalRecorderValue} ${
          v.recorder
        } -> ' + ${getRecorderName(v.recorder)})`,
    )
    .join(";\n")}}\n`;

/* Normaliza linha do Programa */
const normalizeLine = (line: string) => {
  const lineAsNumber = parseInt(line, 10);
  return lineAsNumber >= 0 ? lineAsNumber : "Return";
};

/* Normaliza nome do registrador
   normalizeRecorderName('exemplo_teste_A') retorna 'A'
*/
const normalizeRecorderName = (definitionString: string) =>
  (definitionString.split("_").pop() || "").toUpperCase();

/* Pega nome da função da linha 
   getFunctionName(2) retornda line2Function
*/
const getFunctionName = (index: number | "Return") => `line${index}Function`;

/* Pega nome do registrador 
   getRecorderName('A') retornda recorder_A
*/
const getRecorderName = (name: string) => `recorder_${name}`;

/* Seta registrador com um valor inicial inserido pelo usuário */
const setInitialRecorderValue = (recorder: string, value: number) =>
  `${getRecorderName(recorder)} = ${value || 0};\n`;

/* Gera uma função IF para uma determinada linha
   generateIfFunction(->items da linha<-, 0) retorna:
        const line0Function = () => {
          if(!verify()){
            return;
          }
          if(!recorder_A){
            log(getFullRecordersValues('Return')+'	em 0, como A = 0, desviou para Return');
            lineReturnFunction();
          }
          else{
            log(getFullRecordersValues('1')+'	em 0, como A ≠ 0, desviou para 1');
            line1Function();
          }
        }
*/
const generateIfFunction = (
  lineItems: LineItemsProps[],
  index: number,
  texts: LanguageType,
) => {
  const recorderName = normalizeRecorderName(lineItems[0].text);
  const trueLine = normalizeLine(lineItems[2].text);
  const falseLine = normalizeLine(lineItems[4].text);
  return `const ${getFunctionName(
    index,
  )} = () => {if(!verify()){return;}if(!${getRecorderName(
    recorderName,
  )}){log(getFullRecordersValues('${trueLine}')+${ifComps.good(
    recorderName,
    index,
    trueLine,
    texts,
  )});${getFunctionName(
    trueLine,
  )}();}else{log(getFullRecordersValues('${falseLine}')+${ifComps.bad(
    recorderName,
    index,
    falseLine,
    texts,
  )});${getFunctionName(falseLine)}();}}\n`;
};

/* Gera a função real (que irá alterar algum registrador) e gera o log da função
   mountFunctionByRecorder("A","recorder_A","subtrai",1,"0") retorna:
        recorder_A -= 1;
        log(getFullRecordersValues('0')+'	em 1, subtraiu do registrador A e desviou para 0');
*/
const mountFunctionByRecorder = (
  recorderName: string,
  variable: string,
  funcType: TheoreticalMachineFunctionsIds,
  line: number,
  nextLine: number | "Return",
  texts: LanguageType,
) =>
  `${realFunction[funcType].func(
    variable,
  )}log(getFullRecordersValues('${nextLine}')+${realFunction[funcType].compLine(
    recorderName,
    line,
    nextLine,
    texts,
  )});`;

/* Gera uma função FUNCTION para uma determinada linha
   generateFunctionFunction(->items da linha<-, 1) retorna:
          const line1Function = () => {
            if(!verify()){
              return
            }
            recorder_A -= 1;
            log(getFullRecordersValues('0')+'	em 1, subtraiu do registrador A e desviou para 0');
            line0Function()
          }
*/
const generateFunctionFunction = (
  lineItems: LineItemsProps[],
  index: number,
  texts: LanguageType,
) => {
  const recorderName = normalizeRecorderName(lineItems[0].text);
  const nextLine = normalizeLine(lineItems[2].text);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const functionType = lineItems[0].id! as TheoreticalMachineFunctionsIds;
  const realFunction = mountFunctionByRecorder(
    recorderName,
    getRecorderName(recorderName),
    functionType,
    index,
    nextLine,
    texts,
  );
  return `const ${getFunctionName(
    index,
  )} = () => {if(!verify()){return;}${realFunction}${getFunctionName(nextLine)}()}\n`;
};

/* Gera função de acordo com tipo da linha */
const generateLineFunction = (line: LineProps, index: number, texts: LanguageType) => {
  if (line.type === "condition") {
    return generateIfFunction(line.items, index, texts);
  }
  if (line.type === "function") {
    return generateFunctionFunction(line.items, index, texts);
  }
};

/* Gera função para pegar o valor de todos os registradores
   generateRecordersLog(recorders) retorna:
        const getRecordersValues = () => `(${recorder_A}, ${recorder_B}, ${recorder_C})`
   que resultará em algo parecido com:
        (2, 0, 4) para -> recorder_A = 2, recorder_B = 0, recorder_C = 4
*/
const generateRecordersLog = (recorders: TheoreticalMachineRecorderProps[]) => {
  const getRecordersName = recorders.map((r) => getRecorderName(r.name)).join("}, ${");
  const recordersToPrint = "`(${" + getRecordersName + "})`";
  return `const getRecordersValues = () => ${recordersToPrint}\n`;
};

/* Gera função para pegar a linha atual mais o valor de todos os registradores
   generateFullRecordersLog(recorders) retorna:
        const getFullRecordersValues = (1) => ('(' + line + ' ' + getRecordersValues() + ')')
   que resultará em algo parecido com:
        (1 (2, 0, 4)) para -> line = 1, recorder_A = 2, recorder_B = 0, recorder_C = 4
*/
const generateFullRecordersLog = () => {
  return `const getFullRecordersValues = (line) => ('(' + line + ' ' + getRecordersValues() + ')')\n`;
};

/* Roda o primeiro log e chama a função inicial do código escrito */
const runCode = (texts: LanguageType) =>
  `log(getFullRecordersValues('0')+${getFirstCompLine(texts)})\n${getFunctionName(
    0,
  )}()\n`;

/* Printa resultado dentro do textarea da tela */
const printResult = () => `document.getElementById('traceTable').value = programOut;\n`;

/* Gera todo o código escrito pelo usuário */
export const generate = (
  recorders: TheoreticalMachineRecorderProps[],
  lines: LineProps[],
  initialValues: InitialValueObject,
  machineOutputs: TheoreticalMachineFunctionalityDefinitionProps[],
  texts: LanguageType,
) => {
  let fullCode = codeStart;
  fullCode += getCodeVerifyInfiniteLoop(texts);

  fullCode += generateLogger();
  fullCode += generateReturn(machineOutputs, texts);

  /* Inicializa todas as variáveis como 0 */
  recorders.forEach(
    (recorder) => (fullCode += `let ${getRecorderName(recorder.name)} = 0;\n`),
  );

  /* Seta valores iniciais dos registradores que podem armazenar os valores de entrada */
  Object.entries(initialValues).map(
    ([recorder, value]) => (fullCode += setInitialRecorderValue(recorder, value)),
  );

  fullCode += generateRecordersLog(recorders);
  fullCode += generateFullRecordersLog();

  lines.forEach((line, index) => (fullCode += generateLineFunction(line, index, texts)));

  fullCode += runCode(texts);
  fullCode += printResult();

  return fullCode + codeEnd;
};
