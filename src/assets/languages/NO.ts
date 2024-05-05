import { LanguageType } from ".";

export const NO: LanguageType = {
  language: "Norsk",
  header: {
    title: "Datavitenskapsteoriverkstedet",
  },
  languageSelector: {
    title: "Velg programspåket",
  },
  basic: {
    nextStep: "Neste steg",
  },
  auth: {
    login: {
      title: "Logg inn",
      email: "E-post",
      password: "Passord",
      button: "Logg inn",
      notUserYet: "Har du ikke en konto ennå?",
      logout: "Logg ut",
    },
    register: {
      title: "Registrer",
      name: "Navn",
      email: "E-post",
      password: "Passord",
      passwordConfirmation: "Bekreft passord",
      button: "Registrer",
      alreadyUser: "Har du allerede en konto?",
    },
    update: {
      name: "Navn",
      email: "E-post",
      password: "Gammelt Passord",
      newPassword: "Nytt Passord",
      newPasswordConfirmation: "Bekreft Nytt Passord",
      button: "Oppdater",
    },
  },
  theoreticalMachine: {
    definitionStep: {
      stepTitle: "Definisjon",
      title: "Maskindefinisjon",
      notice:
        "Legg til en registrering for å starte maskindefinisjonen eller opprett en tilfeldig maskin.",
      definition:
        "FES_maskin = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - Minne sett\nN{input} - Inndata sett\nN{output} - Utdata sett",
      randomMachine: "Tilfeldig Maskin",
      validateMachine: "Valider Maskin",
      validatedMachine: "Maskinen ble valideres vellykket!",
      generateMachine: "Generer Maskin",
      generatedMachine: "Maskinen ble generert vellykket!",
      randomMachineGenerated: "Tilfeldig maskin ble generert vellykket!",
      baseError: "Maskinen har problemer! -> {{message}} <-",
      notEnoughComparators: "Programmet må ha minst {{n}} sammenlignere!",
      notEnoughFunctions: "Programmet må ha minst {{n}} funksjoner!",
      functionalities: {
        store: {
          title: "Lagre",
          definition: "lagre_{recorder}",
          definitionFull:
            "lagre_{recorder}: N -> N{length} slik at, ∀n∈N, lagre_{recorder}({recorder}) = ({recorders})",
        },
        return: {
          title: "Returner",
          definition: "returnere_{recorder}",
          definitionFull:
            "returnere_{recorder}: N{length} -> N slik at, ∀({recorders})∈N{length}, returnere_{recorder}({recorders}) = {recorder}",
        },
        sum: {
          title: "Sum",
          definition: "sum_{recorder}",
          definitionFull:
            "sum_{recorder}: N{length} -> N{length} slik at, ∀({recorders})∈N{length}, sum_{recorder}({recorders}) = ({recordersPlus})",
        },
        subtract: {
          title: "Subtrahere",
          definition: "subtrahere_{recorder}",
          definitionFull:
            "subtrahere_{recorder}: N{length} -> N{length} slik at, ∀({recorders})∈N{length}, subtrahere_{recorder}({recorders}) = ({recordersLess}), hvis {recorder} ≥ 0;  subtrahere_{recorder}({recorders}) = ({opptakereNull}), hvis {recorder} = 0",
        },
        double: {
          title: "Doble",
          definition: "dobbel_{recorder}",
          definitionFull:
            "dobbel_{recorder}: N{length} -> N{length} slik at, ∀({recorders})∈N{length}, dobbel_{recorder}({recorders}) = ({recordersTimes})",
        },
        exponentialize: {
          title: "Eksponentialisere",
          definition: "eksponentialiser_{recorder}",
          definitionFull:
            "eksponentialiser_{recorder}: N{length} -> N{length} slik at, ∀({recorders})∈N{length}, eksponentialiser_{recorder}({recorders}) = ({recordersExponential})",
        },
        compareZero: {
          title: "Sammenlign 0",
          definition: "er_null_{recorder}",
          definitionFull:
            "er_null_{recorder}: N{length} -> N slik at, ∀({recorders})∈N{length}, er_null_{recorder}({recorders}) = 1, hvis {recorder} = 0; er_null_{recorder}({recorders}) = 0, hvis {recorder} ≠ 0",
        },
      },
    },
    programmingStep: {
      stepTitle: "Programmering",
      title: "Programmering",
      notice: "Legg til linjer og programmer maskinen ved å bruke velgerne nedenfor.",
      validateProgram: "Valider og Generer",
      notEnoughLines: "Programmet må ha minst {{lines}} linjer!",
      emptyLine: "Det er en tom linje!",
      emptySelector: "Det er en linje med tom velger!",
      notEnoughReturn: "Programmet må ha minst én retur!",
      validProgram: "Gyldig Program!",
      addLine: "Legg Til Linje",
      selectLineType: "Velg linjetype",
      endLine: "Slutt",
      newLine: "Ny Linje",
      selectPlaceholder: "Velg ",
      condition: {
        selectText: "Betingelse",
        text: "hvis",
        thenGoTo: "deretter gå til",
        elseGoTo: "ellers gå til",
      },
      function: {
        selectText: "Funksjon",
        text: "gjør",
        goTo: "gå til",
      },
      placeholderType: {
        comparators: "komparator",
        functions: "funksjon",
        lines: "linje",
      },
    },
    runnableStep: {
      stepTitle: "Utførelse",
      title: "Utførelse",
      generateCode: "Generer Kode",
      runCode: "Kjør Kode",
      defineValues: "Definer de initielle verdiene",
      codeGenerated: "Kode generert vellykket!",
      recorder: "Opptaker",
      programTexts: {
        programCouldBeInLoop:
          "Ditt program kan være i en uendelig løkke! Ønsker du å fortsette?",
        finalRecorderValue: "Endelig verdi av opptaker",
        initialInstruction: "initial instruksjon og lagrede inndataverdier",
        ifGood: "i {{line}}, som {{recorder}} = 0, omdirigert til {{nextLine}}",
        ifBad: "i {{line}}, som {{recorder}} ≠ 0, omdirigert til {{nextLine}}",
        sum: "i {{line}}, lagt til fra opptaker {{recorder}} og omdirigert til {{nextLine}}",
        subtract:
          "i {{line}}, trukket fra opptaker {{recorder}} og omdirigert til {{nextLine}}",
        double:
          "i {{line}}, doblet fra opptaker {{recorder}} og omdirigert til {{nextLine}}",
        exponentialize:
          "i {{line}}, eksponentialisert fra opptaker {{recorder}} og omdirigert til {{nextLine}}",
      },
    },
  },
};
