import { LanguageType } from ".";

export const IT: LanguageType = {
  language: "Italiano",
  header: {
    title: "Fucina della Teoria dell'Informatica",
  },
  languageSelector: {
    title: "Seleziona la lingua del programma",
  },
  basic: {
    nextStep: "Passaggio successivo",
  },
  theoreticalMachine: {
    definitionStep: {
      stepTitle: "Definizione",
      title: "Definizione della Macchina",
      notice:
        "Aggiungi un registratore per avviare la definizione della macchina o crea una macchina casuale.",
      definition:
        "FES_macchina = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - Insiemi di memoria\nN{input} - Insiemi di input\nN{output} - Insiemi di output",
      randomMachine: "Macchina Casuale",
      validateMachine: "Convalida Macchina",
      validatedMachine: "Macchina convalidata con successo!",
      generateMachine: "Genera Macchina",
      generatedMachine: "Macchina generata con successo!",
      randomMachineGenerated: "Macchina casuale generata con successo!",
      baseError: "La macchina ha problemi! -> {{message}} <-",
      notEnoughComparators: "Il programma deve avere almeno {{n}} comparatori!",
      notEnoughFunctions: "Il programma deve avere almeno {{n}} funzioni!",
      functionalities: {
        store: {
          title: "Memorizza",
          definition: "memorizza_{recorder}",
          definitionFull:
            "memorizza_{recorder}: N -> N{length} tale che, ∀n∈N, memorizza_{recorder}({recorder}) = ({recorders})",
        },
        return: {
          title: "Ritorna",
          definition: "ritorna_{recorder}",
          definitionFull:
            "ritorna_{recorder}: N{length} -> N tale che, ∀({recorders})∈N{length}, ritorna_{recorder}({recorders}) = {recorder}",
        },
        sum: {
          title: "Somma",
          definition: "somma_{recorder}",
          definitionFull:
            "somma_{recorder}: N{length} -> N{length} tale che, ∀({recorders})∈N{length}, somma_{recorder}({recorders}) = ({recordersPlus})",
        },
        subtract: {
          title: "Sottrai",
          definition: "sottrai_{recorder}",
          definitionFull:
            "sottrai_{recorder}: N{length} -> N{length} tale che, ∀({recorders})∈N{length}, sottrai_{recorder}({recorders}) = ({recordersLess}), se {recorder} ≥ 0;  sottrai_{recorder}({recorders}) = ({registrazioniZero}), se {recorder} = 0",
        },
        double: {
          title: "Doppio",
          definition: "doppio_{recorder}",
          definitionFull:
            "doppio_{recorder}: N{length} -> N{length} tale che, ∀({recorders})∈N{length}, doppio_{recorder}({recorders}) = ({recordersTimes})",
        },
        exponentialize: {
          title: "Esponenziale",
          definition: "esponenziale_{recorder}",
          definitionFull:
            "esponenziale_{recorder}: N{length} -> N{length} tale che, ∀({recorders})∈N{length}, esponenziale_{recorder}({recorders}) = ({recordersExponential})",
        },
        compareZero: {
          title: "Confronta 0",
          definition: "e_zero_{recorder}",
          definitionFull:
            "e_zero_{recorder}: N{length} -> N tale che, ∀({recorders})∈N{length}, e_zero_{recorder}({recorders}) = 1, se {recorder} = 0; e_zero_{recorder}({recorders}) = 0, se {recorder} ≠ 0",
        },
      },
    },
    programmingStep: {
      stepTitle: "Programmazione",
      title: "Programmazione",
      notice:
        "Aggiungi righe e programma la macchina utilizzando i selettori sottostanti.",
      validateProgram: "Convalida e Genera",
      notEnoughLines: "Il programma deve avere almeno {{lines}} righe!",
      emptyLine: "C'è una riga vuota!",
      emptySelector: "C'è una riga con un selettore vuoto!",
      notEnoughReturn: "Il programma deve avere almeno un ritorno!",
      validProgram: "Programma valido!",
      addLine: "Aggiungi Riga",
      selectLineType: "Seleziona il tipo di riga",
      endLine: "Fine",
      newLine: "Nuova Riga",
      selectPlaceholder: "Seleziona ",
      condition: {
        selectText: "Condizione",
        text: "se",
        thenGoTo: "poi vai_a",
        elseGoTo: "altrimenti vai_a",
      },
      function: {
        selectText: "Funzione",
        text: "fa",
        goTo: "vai_a",
      },
      placeholderType: {
        comparators: "il comparatore",
        functions: "la funzione",
        lines: "la riga",
      },
    },
    runnableStep: {
      stepTitle: "Esecuzione",
      title: "Esecuzione",
      generateCode: "Genera Codice",
      runCode: "Esegui Codice",
      defineValues: "Definisci i valori iniziali",
      codeGenerated: "Codice generato con successo!",
      recorder: "Registratore",
      programTexts: {
        programCouldBeInLoop:
          "Il tuo programma potrebbe essere in un loop infinito! Vuoi continuare?",
        finalRecorderValue: "Valore finale del registratore",
        initialInstruction: "istruzione iniziale e valori di input memorizzati",
        ifGood: "in {{line}}, come {{recorder}} = 0, deviato a {{nextLine}}",
        ifBad: "in {{line}}, come {{recorder}} ≠ 0, deviato a {{nextLine}}",
        sum: "in {{line}}, aggiunto dal registratore {{recorder}} e deviato a {{nextLine}}",
        subtract:
          "in {{line}}, sottratto dal registratore {{recorder}} e deviato a {{nextLine}}",
        double:
          "in {{line}}, raddoppiato dal registratore {{recorder}} e deviato a {{nextLine}}",
        exponentialize:
          "in {{line}}, esponenzializzato dal registratore {{recorder}} e deviato a {{nextLine}}",
      },
    },
  },
};
