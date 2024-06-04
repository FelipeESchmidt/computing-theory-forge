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
  auth: {
    login: {
      title: "Accesso",
      email: "E-mail",
      password: "Password",
      button: "Accesso",
      notUserYet: "Non hai ancora un account?",
      logout: "Disconnettersi",
    },
    register: {
      title: "Registrati",
      name: "Nome",
      email: "E-mail",
      password: "Password",
      passwordConfirmation: "Conferma password",
      button: "Registrati",
      alreadyUser: "Hai già un account?",
    },
    update: {
      name: "Nome",
      email: "E-mail",
      password: "Password Vecchia",
      newPassword: "Nuova Password",
      newPasswordConfirmation: "Conferma Nuova Password",
      button: "Aggiornare",
    },
  },
  theoreticalMachine: {
    title: "Macchine Teoriche",
    description:
      "Definisci i tuoi registratori con funzionalità e istruzioni, programma la tua macchina ed eseguila.",
    newMachine: "Nuova Macchina",
    save: {
      title: "Salva la tua macchina creata",
      name: "Nome della Macchina",
      button: "Salva",
      titleUpdate: "Aggiorna o salva la tua macchina",
      buttonUpdate: "Aggiornare",
      buttonSaveNew: "Salva come nuova",
    },
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
  messages: {
    INVALID_CREDENTIALS: "Credenziali non valide!",
    LOGIN_SUCCESSFUL: "Accesso effettuato con successo!",
    EMAIL_ALREADY_EXISTS: "E-mail già esistente!",
    PASSWORDS_DO_NOT_MATCH: "Le password non corrispondono!",
    REGISTRATION_FAILED: "Registrazione fallita!",
    REGISTRATION_SUCCESSFUL: "Registrazione effettuata con successo!",
    PASSWORD_IS_INVALID: "Password non valida!",
    UPDATE_FAILED: "Aggiornamento fallito!",
    UPDATE_SUCCESSFUL: "Aggiornamento effettuato con successo!",
    TOKEN_NOT_PROVIDED: "Token non fornito!",
    TOKEN_IS_INVALID: "Token non valido!",
    USER_NOT_FOUND: "Utente non trovato!",
    MACHINE_SAVE_FAILED: "Errore nel salvataggio della macchina!",
    MACHINE_NOT_FOUND: "Macchina non trovata!",
    MACHINE_SAVE_SUCCESSFUL: "Macchina salvata con successo!",
    MACHINE_GET_ALL_SUCCESSFUL: "Macchine ottenute con successo!",
    MACHINE_DELETE_FAILED: "Errore nell'eliminazione della macchina!",
    MACHINE_DELETE_SUCCESSFUL: "Macchina eliminata con successo!",
    MACHINE_UPDATE_FAILED: "Errore nell'aggiornamento della macchina!",
    MACHINE_UPDATE_SUCCESSFUL: "Macchina aggiornata con successo!",
  },
};
