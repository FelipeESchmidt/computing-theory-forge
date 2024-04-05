import { LanguageType } from ".";

export const US: LanguageType = {
  language: "English",
  header: {
    title: "Computing Theory Forge",
  },
  languageSelector: {
    title: "Select the program language",
  },
  basic: {
    nextStep: "Next Step",
  },
  theoreticalMachine: {
    definitionStep: {
      stepTitle: "Definition",
      title: "Machine Definition",
      notice:
        "Add a recorder to start the machine definition or create a random machine.",
      definition:
        "FES_machine = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - Memory Sets\nN{input} - Input Sets\nN{output} - Output Sets",
      randomMachine: "Random Machine",
      validateMachine: "Validate Machine",
      validatedMachine: "Machine validated successfully!",
      generateMachine: "Generate Machine",
      generatedMachine: "Machine generated successfully!",
      randomMachineGenerated: "Random machine generated successfully!",
      baseError: "Machine has problems! -> {{message}} <-",
      notEnoughComparators: "Program needs to have at least {{n}} comparators!",
      notEnoughFunctions: "Program needs to have at least {{n}} functions!",
      functionalities: {
        store: {
          title: "Store",
          definition: "store_{recorder}",
          definitionFull:
            "store_{recorder}: N -> N{length} such that, ∀n∈N, store_{recorder}({recorder}) = ({recorders})",
        },
        return: {
          title: "Return",
          definition: "return_{recorder}",
          definitionFull:
            "return_{recorder}: N{length} -> N such that, ∀({recorders})∈N{length}, return_{recorder}({recorders}) = {recorder}",
        },
        sum: {
          title: "Sum",
          definition: "sum_{recorder}",
          definitionFull:
            "sum_{recorder}: N{length} -> N{length} such that, ∀({recorders})∈N{length}, sum_{recorder}({recorders}) = ({recordersPlus})",
        },
        subtract: {
          title: "Subtract",
          definition: "subtract_{recorder}",
          definitionFull:
            "subtract_{recorder}: N{length} -> N{length} such that, ∀({recorders})∈N{length}, subtract_{recorder}({recorders}) = ({recordersLess}), if {recorder} ≥ 0;  subtract_{recorder}({recorders}) = ({recordersZero}), if {recorder} = 0",
        },
        double: {
          title: "Double",
          definition: "double_{recorder}",
          definitionFull:
            "double_{recorder}: N{length} -> N{length} such that, ∀({recorders})∈N{length}, double_{recorder}({recorders}) = ({recordersTimes})",
        },
        exponentialize: {
          title: "Exponentialize",
          definition: "exponentialize_{recorder}",
          definitionFull:
            "exponentialize_{recorder}: N{length} -> N{length} such that, ∀({recorders})∈N{length}, exponentialize_{recorder}({recorders}) = ({recordersExponential})",
        },
        compareZero: {
          title: "Compare 0",
          definition: "is_zero_{recorder}",
          definitionFull:
            "is_zero_{recorder}: N{length} -> N such that, ∀({recorders})∈N{length}, is_zero_{recorder}({recorders}) = 1, if {recorder} = 0; is_zero_{recorder}({recorders}) = 0, if {recorder} ≠ 0",
        },
      },
    },
    programmingStep: {
      stepTitle: "Programação",
      title: "Programação",
      notice: "Adicione linhas e programe a máquina utilizando os seletores abaixo.",
      validateProgram: "Validar e Gerar",
      notEnoughLines: "Programa precisa ter pelo menos 2 linhas!",
      emptyLine: "Existe uma linha em branco!",
      emptySelector: "Existe uma linha com selecionador em branco!",
      notEnoughReturn: "O programa precisa conter ao menos um retorno no programa!",
      validProgram: "Programação válida!",
      addLine: "Adicionar Linha",
      selectLineType: "Selecione o tipo da linha",
      endLine: "Fim",
      newLine: "Nova Linha",
      condition: {
        selectText: "Condição",
        text: "se",
        thenGoTo: "então vá_para",
        elseGoTo: "senão vá_para",
      },
      function: {
        selectText: "Função",
        text: "faça",
        goTo: "vá_para",
      },
    },
    runnableStep: {
      stepTitle: "Execução",
      title: "Execução",
      generateCode: "Gerar Código",
      runCode: "Executar Código",
      defineValues: "Defina os valores iniciais",
      codeGenerated: "Código gerado com sucesso!",
    },
  },
};
