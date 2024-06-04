import { LanguageType } from ".";

export const DE: LanguageType = {
  language: "Deutsch",
  header: {
    title: "Computing Theory Forge",
  },
  languageSelector: {
    title: "Programmsprache auswählen",
  },
  basic: {
    nextStep: "Nächster Schritt",
  },
  auth: {
    login: {
      title: "Anmeldung",
      email: "E-Mail",
      password: "Passwort",
      button: "Anmeldung",
      notUserYet: "Hast du noch kein Konto?",
      logout: "Abmelden",
    },
    register: {
      title: "Registrieren",
      name: "Name",
      email: "E-Mail",
      password: "Passwort",
      passwordConfirmation: "Passwort bestätigen",
      button: "Registrieren",
      alreadyUser: "Hast du bereits ein Konto?",
    },
    update: {
      name: "Name",
      email: "E-Mail",
      password: "Altes Passwort",
      newPassword: "Neues Passwort",
      newPasswordConfirmation: "Neues Passwort bestätigen",
      button: "Aktualisieren",
    },
  },
  theoreticalMachine: {
    title: "Theoretische Maschinen",
    description:
      "Definieren Sie Ihre Recorder mit Funktionalitäten und Anweisungen, programmieren Sie Ihre Maschine und führen Sie sie aus",
    newMachine: "Neue Maschine",
    save: {
      title: "Speichern Sie Ihre erstellte Maschine",
      name: "Maschinenname",
      button: "Speichern",
      titleUpdate: "Aktualisieren oder speichern Sie Ihre Maschine",
      buttonUpdate: "Aktualisieren",
      buttonSaveNew: "Als neu speichern",
    },
    definitionStep: {
      stepTitle: "Definition",
      title: "Maschinendefinition",
      notice:
        "Fügen Sie einen Recorder hinzu, um mit der Maschinendefinition zu beginnen, oder erstellen Sie eine zufällige Maschine.",
      definition:
        "FES_machine = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - Speichersets\nN{input} - Eingabesets\nN{output} - Ausgabesets",
      randomMachine: "Zufällige Maschine",
      validateMachine: "Maschine validieren",
      validatedMachine: "Maschine erfolgreich validiert!",
      generateMachine: "Maschine generieren",
      generatedMachine: "Maschine erfolgreich generiert!",
      randomMachineGenerated: "Zufällige Maschine erfolgreich generiert!",
      baseError: "Maschine hat Probleme! -> {{message}} <-",
      notEnoughComparators: "Programm muss mindestens {{n}} Vergleicher haben!",
      notEnoughFunctions: "Programm muss mindestens {{n}} Funktionen haben!",
      functionalities: {
        store: {
          title: "Speichern",
          definition: "speichern_{recorder}",
          definitionFull:
            "speichern_{recorder}: N -> N{length} so dass, ∀n∈N, speichern_{recorder}({recorder}) = ({recorders})",
        },
        return: {
          title: "Zurückgeben",
          definition: "zurückgeben_{recorder}",
          definitionFull:
            "zurückgeben_{recorder}: N{length} -> N so dass, ∀({recorders})∈N{length}, zurückgeben_{recorder}({recorders}) = {recorder}",
        },
        sum: {
          title: "Summe",
          definition: "summe_{recorder}",
          definitionFull:
            "summe_{recorder}: N{length} -> N{length} so dass, ∀({recorders})∈N{length}, summe_{recorder}({recorders}) = ({recordersPlus})",
        },
        subtract: {
          title: "Subtraktion",
          definition: "subtrahieren_{recorder}",
          definitionFull:
            "subtrahieren_{recorder}: N{length} -> N{length} so dass, ∀({recorders})∈N{length}, subtrahieren_{recorder}({recorders}) = ({recordersLess}), wenn {recorder} ≥ 0; subtrahieren_{recorder}({recorders}) = ({recordersZero}), wenn {recorder} = 0",
        },
        double: {
          title: "Verdoppeln",
          definition: "verdoppeln_{recorder}",
          definitionFull:
            "verdoppeln_{recorder}: N{length} -> N{length} so dass, ∀({recorders})∈N{length}, verdoppeln_{recorder}({recorders}) = ({recordersTimes})",
        },
        exponentialize: {
          title: "Exponentialisieren",
          definition: "exponentialisieren_{recorder}",
          definitionFull:
            "exponentialisieren_{recorder}: N{length} -> N{length} so dass, ∀({recorders})∈N{length}, exponentialisieren_{recorder}({recorders}) = ({recordersExponential})",
        },
        compareZero: {
          title: "Mit Null vergleichen",
          definition: "ist_null_{recorder}",
          definitionFull:
            "ist_null_{recorder}: N{length} -> N so dass, ∀({recorders})∈N{length}, ist_null_{recorder}({recorders}) = 1, wenn {recorder} = 0; ist_null_{recorder}({recorders}) = 0, wenn {recorder} ≠ 0",
        },
      },
    },
    programmingStep: {
      stepTitle: "Programmierung",
      title: "Programmierung",
      notice:
        "Fügen Sie Zeilen hinzu und programmieren Sie die Maschine mithilfe der unten stehenden Selektoren.",
      validateProgram: "Validieren und Generieren",
      notEnoughLines: "Programm muss mindestens {{lines}} Zeilen haben!",
      emptyLine: "Es gibt eine leere Zeile!",
      emptySelector: "Es gibt eine Zeile mit leerem Selektor!",
      notEnoughReturn: "Programm muss mindestens ein 'return' haben!",
      validProgram: "Gültiges Programm!",
      addLine: "Zeile hinzufügen",
      selectLineType: "Wählen Sie den Zeilentyp aus",
      endLine: "Ende",
      newLine: "Neue Zeile",
      selectPlaceholder: "Auswählen ",
      condition: {
        selectText: "Bedingung",
        text: "wenn",
        thenGoTo: "dann gehe zu",
        elseGoTo: "sonst gehe zu",
      },
      function: {
        selectText: "Funktion",
        text: "mache",
        goTo: "gehe zu",
      },
      placeholderType: {
        comparators: "den Vergleicher",
        functions: "die Funktion",
        lines: "die Zeile",
      },
    },
    runnableStep: {
      stepTitle: "Ausführung",
      title: "Ausführung",
      generateCode: "Code generieren",
      runCode: "Code ausführen",
      defineValues: "Definieren Sie die Anfangswerte",
      codeGenerated: "Code erfolgreich generiert!",
      recorder: "Recorder",
      programTexts: {
        programCouldBeInLoop:
          "Ihr Programm könnte sich in einer Endlosschleife befinden! Möchten Sie fortfahren?",
        finalRecorderValue: "Endwert des Recorders",
        initialInstruction: "Anfangsanweisung und Eingabewerte gespeichert",
        ifGood: "in {{line}}, da {{recorder}} = 0, umgeleitet zu {{nextLine}}",
        ifBad: "in {{line}}, da {{recorder}} ≠ 0, umgeleitet zu {{nextLine}}",
        sum: "in {{line}}, von Recorder {{recorder}} hinzugefügt und umgeleitet zu {{nextLine}}",
        subtract:
          "in {{line}}, von Recorder {{recorder}} subtrahiert und umgeleitet zu {{nextLine}}",
        double:
          "in {{line}}, von Recorder {{recorder}} verdoppelt und umgeleitet zu {{nextLine}}",
        exponentialize:
          "in {{line}}, von Recorder {{recorder}} exponentiell gemacht und umgeleitet zu {{nextLine}}",
      },
    },
  },
  messages: {
    INVALID_CREDENTIALS: "Ungültige Anmeldeinformationen!",
    LOGIN_SUCCESSFUL: "Anmeldung erfolgreich!",
    EMAIL_ALREADY_EXISTS: "E-Mail ist bereits registriert!",
    PASSWORDS_DO_NOT_MATCH: "Passwörter stimmen nicht überein!",
    REGISTRATION_FAILED: "Registrierung fehlgeschlagen!",
    REGISTRATION_SUCCESSFUL: "Registrierung erfolgreich!",
    PASSWORD_IS_INVALID: "Passwort ist ungültig!",
    UPDATE_FAILED: "Aktualisierung fehlgeschlagen!",
    UPDATE_SUCCESSFUL: "Aktualisierung erfolgreich!",
    TOKEN_NOT_PROVIDED: "Token nicht bereitgestellt!",
    TOKEN_IS_INVALID: "Token ist ungültig!",
    USER_NOT_FOUND: "Benutzer nicht gefunden!",
    MACHINE_SAVE_FAILED: "Fehler beim Speichern der Maschine",
    MACHINE_NOT_FOUND: "Maschine nicht gefunden!",
    MACHINE_SAVE_SUCCESSFUL: "Maschine erfolgreich gespeichert!",
    MACHINE_GET_ALL_SUCCESSFUL: "Maschinen erfolgreich abgerufen!",
    MACHINE_DELETE_FAILED: "Fehler beim Löschen der Maschine!",
    MACHINE_DELETE_SUCCESSFUL: "Maschine erfolgreich gelöscht!",
    MACHINE_UPDATE_FAILED: "Fehler beim Aktualisieren der Maschine!",
    MACHINE_UPDATE_SUCCESSFUL: "Maschine erfolgreich aktualisiert!",
  },
};
