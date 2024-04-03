export const BR = {
  language: "Português",
  header: {
    title: "Computing Theory Forge",
  },
  languageSelector: {
    title: "Selecione a linguagem do programa",
  },
  theoreticalMachine: {
    definition: {
      stepTitle: "Definição",
      title: "Definição da Máquina",
      notice:
        "Adicione um registrador para iniciar a definição da máquina ou crie uma máquina aleatória.",
      definition:
        "FGL_machine = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - Conjuntos de Memória\nN{input} - Conjuntos de Entrada\nN{output} - Conjuntos de Saída",
      randomMachine: "Máquina Aleatória",
      validateMachine: "Validar Máquina",
      generateMachine: "Gerar Máquina",
      baseError: "Máquina possui problemas! -> {{message}} <-",
      notEnoughComparators: "Programa precisa ter pelo menos 3 comparadores!",
      notEnoughFunctions: "Programa precisa ter pelo menos 4 funções!",
      functionalities: {
        store: {
          title: "Armazena",
          definition: "armazena_{recorder}",
          definitionFull:
            "armazena_{recorder}: N -> N{length} tal que, ∀n∈N, armazena_{recorder}({recorder}) = ({recorders})",
        },
        return: {
          title: "Retorna",
          definition: "retorna_{recorder}",
          definitionFull:
            "retorna_{recorder}: N{length} -> N tal que, ∀({recorders})∈N{length}, retorna_{recorder}({recorders}) = {recorder}",
        },
        sum: {
          title: "Soma",
          definition: "soma_{recorder}",
          definitionFull:
            "soma_{recorder}: N{length} -> N{length} tal que, ∀({recorders})∈N{length}, soma_{recorder}({recorders}) = ({recordersPlus})",
        },
        subtract: {
          title: "Subtrai",
          definition: "subtrai_{recorder}",
          definitionFull:
            "subtrai_{recorder}: N{length} -> N{length} tal que, ∀({recorders})∈N{length}, subtrai_{recorder}({recorders}) = ({recordersLess}), se {recorder} ≥ 0;  subtrai_{recorder}({recorders}) = ({recordersZero}), se {recorder} = 0",
        },
        double: {
          title: "Dobra",
          definition: "dobra_{recorder}",
          definitionFull:
            "dobra_{recorder}: N{length} -> N{length} tal que, ∀({recorders})∈N{length}, dobra_{recorder}({recorders}) = ({recordersTimes})",
        },
        exponentialize: {
          title: "Exponencializa",
          definition: "exponencializa_{recorder}",
          definitionFull:
            "exponencializa_{recorder}: N{length} -> N{length} tal que, ∀({recorders})∈N{length}, exponencializa_{recorder}({recorders}) = ({recordersExp})",
        },
        compareZero: {
          title: "Compara 0",
          definition: "eh_zero_{recorder}",
          definitionFull:
            "eh_zero_{recorder}: N{length} -> N tal que, ∀({recorders})∈N{length}, eh_zero_{recorder}({recorders}) = 1, se {recorder} = 0; eh_zero_{recorder}({recorders}) = 0, se {recorder} ≠ 0",
        },
      },
    },
    programming: {
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
    runnable: {
      stepTitle: "Execução",
      title: "Execução",
      generateCode: "Gerar Código",
      runCode: "Executar Código",
      defineValues: "Defina os valores iniciais",
      codeGenerated: "Código gerado com sucesso!",
    },
  },
};
