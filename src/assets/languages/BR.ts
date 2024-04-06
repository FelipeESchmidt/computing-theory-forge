export const BR = {
  language: "Português",
  header: {
    title: "Computing Theory Forge",
  },
  languageSelector: {
    title: "Selecione a linguagem do programa",
  },
  basic: {
    nextStep: "Próximo Passo",
  },
  theoreticalMachine: {
    definitionStep: {
      stepTitle: "Definição",
      title: "Definição da Máquina",
      notice:
        "Adicione um registrador para iniciar a definição da máquina ou crie uma máquina aleatória.",
      definition:
        "FES_machine = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - Conjuntos de Memória\nN{input} - Conjuntos de Entrada\nN{output} - Conjuntos de Saída",
      randomMachine: "Máquina Aleatória",
      validateMachine: "Validar Máquina",
      validatedMachine: "Máquina validada com sucesso!",
      generateMachine: "Gerar Máquina",
      generatedMachine: "Máquina gerada com sucesso!",
      randomMachineGenerated: "Máquina aleatória gerada com sucesso!",
      baseError: "Máquina possui problemas! -> {{message}} <-",
      notEnoughComparators: "Programa precisa ter pelo menos {{n}} comparadores!",
      notEnoughFunctions: "Programa precisa ter pelo menos {{n}} funções!",
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
            "exponencializa_{recorder}: N{length} -> N{length} tal que, ∀({recorders})∈N{length}, exponencializa_{recorder}({recorders}) = ({recordersExponential})",
        },
        compareZero: {
          title: "Compara 0",
          definition: "eh_zero_{recorder}",
          definitionFull:
            "eh_zero_{recorder}: N{length} -> N tal que, ∀({recorders})∈N{length}, eh_zero_{recorder}({recorders}) = 1, se {recorder} = 0; eh_zero_{recorder}({recorders}) = 0, se {recorder} ≠ 0",
        },
      },
    },
    programmingStep: {
      stepTitle: "Programação",
      title: "Programação",
      notice: "Adicione linhas e programe a máquina utilizando os seletores abaixo.",
      validateProgram: "Validar e Gerar",
      notEnoughLines: "Programa precisa ter pelo menos {{lines}} linhas!",
      emptyLine: "Existe uma linha em branco!",
      emptySelector: "Existe uma linha com selecionador em branco!",
      notEnoughReturn: "O programa precisa conter ao menos um retorno no programa!",
      validProgram: "Programação válida!",
      addLine: "Adicionar Linha",
      selectLineType: "Selecione o tipo da linha",
      endLine: "Fim",
      newLine: "Nova Linha",
      selectPlaceholder: "Selecione ",
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
      placeholderType: {
        comparators: "o comparador",
        functions: "a função",
        lines: "a linha",
      },
    },
    runnableStep: {
      stepTitle: "Execução",
      title: "Execução",
      generateCode: "Gerar Código",
      runCode: "Executar Código",
      defineValues: "Defina os valores iniciais",
      codeGenerated: "Código gerado com sucesso!",
      recorder: "Registrador",
      programTexts: {
        initialInstruction: "instrução inicial e valores de entrada armazenados",
        programCouldBeInLoop:
          "Seu programa pode estar em loop infinito! Deseja continuar?",
        finalRecorderValue: "Valor final Registrador",
        ifGood: "em {{line}}, como {{recorder}} = 0, desviou para {{nextLine}}",
        ifBad: "em {{line}}, como {{recorder}} ≠ 0, desviou para {{nextLine}}",
        sum: "em {{line}}, adicionou do registrador {{recorder}} e desviou para {{nextLine}}",
        subtract:
          "em {{line}}, subtraiu do registrador {{recorder}} e desviou para {{nextLine}}",
        double:
          "em {{line}}, duplicou do registrador {{recorder}} e desviou para {{nextLine}}",
        exponentialize:
          "em {{line}}, exponenciou-se do registrador {{recorder}} e desviou para {{nextLine}}",
      },
    },
  },
};
