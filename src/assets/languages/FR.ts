import { LanguageType } from ".";

export const FR: LanguageType = {
  language: "Français",
  header: {
    title: "Forge de Théorie Informatique",
  },
  languageSelector: {
    title: "Sélectionnez la langue du programme",
  },
  basic: {
    nextStep: "Étape Suivante",
  },
  auth: {
    login: {
      title: "Connexion",
      email: "E-mail",
      password: "Mot de passe",
      button: "Connexion",
      notUserYet: "Vous n'avez pas encore de compte?",
      logout: "Déconnexion",
    },
    register: {
      title: "S'inscrire",
      name: "Nom",
      email: "E-mail",
      password: "Mot de passe",
      passwordConfirmation: "Confirmation du mot de passe",
      button: "S'inscrire",
      alreadyUser: "Vous avez déjà un compte?",
    },
    update: {
      name: "Nom",
      email: "E-mail",
      password: "Ancien Mot de Passe",
      newPassword: "Nouveau Mot de Passe",
      newPasswordConfirmation: "Confirmation du Nouveau Mot de Passe",
      button: "Mettre à Jour",
    },
  },
  theoreticalMachine: {
    title: "Machines Théoriques",
    description:
      "Définissez vos enregistreurs avec des fonctionnalités et des instructions, programmez votre machine et exécutez-la.",
    newMachine: "Nouvelle Machine",
    save: {
      title: "Enregistrez votre machine créée",
      name: "Nom de la Machine",
      button: "Enregistrer",
      titleUpdate: "Mettre à jour ou enregistrer votre machin",
      buttonUpdate: "Mettre à jour",
      buttonSaveNew: "Enregistrer comme nouveau",
    },
    definitionStep: {
      stepTitle: "Définition",
      title: "Définition de la Machine",
      notice:
        "Ajoutez un enregistreur pour démarrer la définition de la machine ou créez une machine aléatoire.",
      definition:
        "FES_machine = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - Ensembles de mémoire\nN{input} - Ensembles d'entrée\nN{output} - Ensembles de sortie",
      randomMachine: "Machine Aléatoire",
      validateMachine: "Valider la Machine",
      validatedMachine: "Machine validée avec succès!",
      generateMachine: "Générer la Machine",
      generatedMachine: "Machine générée avec succès!",
      randomMachineGenerated: "Machine aléatoire générée avec succès!",
      baseError: "La machine rencontre des problèmes ! -> {{message}} <-",
      notEnoughComparators: "Le programme doit avoir au moins {{n}} comparateurs!",
      notEnoughFunctions: "Le programme doit avoir au moins {{n}} fonctions!",
      functionalities: {
        store: {
          title: "Stocker",
          definition: "stocker_{recorder}",
          definitionFull:
            "stocker_{recorder}: N -> N{length} tel que, ∀n∈N, stocker_{recorder}({recorder}) = ({recorders})",
        },
        return: {
          title: "Retourner",
          definition: "retourner_{recorder}",
          definitionFull:
            "retourner_{recorder}: N{length} -> N tel que, ∀({recorders})∈N{length}, retourner_{recorder}({recorders}) = {recorder}",
        },
        sum: {
          title: "Somme",
          definition: "somme_{recorder}",
          definitionFull:
            "somme_{recorder}: N{length} -> N{length} tel que, ∀({recorders})∈N{length}, somme_{recorder}({recorders}) = ({recordersPlus})",
        },
        subtract: {
          title: "Soustraire",
          definition: "soustraire_{recorder}",
          definitionFull:
            "soustraire_{recorder}: N{length} -> N{length} tel que, ∀({recorders})∈N{length}, soustraire_{recorder}({recorders}) = ({recordersLess}), si {recorder} ≥ 0;  soustraire_{recorder}({recorders}) = ({enregistreursZero}), si {recorder} = 0",
        },
        double: {
          title: "Double",
          definition: "double_{recorder}",
          definitionFull:
            "double_{recorder}: N{length} -> N{length} tel que, ∀({recorders})∈N{length}, double_{recorder}({recorders}) = ({recordersTimes})",
        },
        exponentialize: {
          title: "Exponentielle",
          definition: "exponentielle_{recorder}",
          definitionFull:
            "exponentielle_{recorder}: N{length} -> N{length} tel que, ∀({recorders})∈N{length}, exponentielle_{recorder}({recorders}) = ({recordersExponential})",
        },
        compareZero: {
          title: "Comparer à 0",
          definition: "est_zero_{recorder}",
          definitionFull:
            "est_zero_{recorder}: N{length} -> N tel que, ∀({recorders})∈N{length}, est_zero_{recorder}({recorders}) = 1, si {recorder} = 0; est_zero_{recorder}({recorders}) = 0, si {recorder} ≠ 0",
        },
      },
    },
    programmingStep: {
      stepTitle: "Programmation",
      title: "Programmation",
      notice:
        "Ajoutez des lignes et programmez la machine en utilisant les sélecteurs ci-dessous.",
      validateProgram: "Valider et Générer",
      notEnoughLines: "Le programme doit avoir au moins {{lines}} lignes!",
      emptyLine: "Il y a une ligne vide!",
      emptySelector: "Il y a une ligne avec un sélecteur vide!",
      notEnoughReturn: "Le programme doit avoir au moins un retour!",
      validProgram: "Programme Valide!",
      addLine: "Ajouter une Ligne",
      selectLineType: "Sélectionnez le type de ligne",
      endLine: "Fin",
      newLine: "Nouvelle Ligne",
      selectPlaceholder: "Sélectionnez ",
      condition: {
        selectText: "Condition",
        text: "si",
        thenGoTo: "puis aller à",
        elseGoTo: "sinon aller à",
      },
      function: {
        selectText: "Fonction",
        text: "faire",
        goTo: "aller à",
      },
      placeholderType: {
        comparators: "le comparateur",
        functions: "la fonction",
        lines: "la ligne",
      },
    },
    runnableStep: {
      stepTitle: "Exécution",
      title: "Exécution",
      generateCode: "Générer le Code",
      runCode: "Exécuter le Code",
      defineValues: "Définir les valeurs initiales",
      codeGenerated: "Code généré avec succès!",
      recorder: "Enregistreur",
      programTexts: {
        programCouldBeInLoop:
          "Votre programme peut être dans une boucle infinie! Voulez-vous continuer?",
        finalRecorderValue: "Valeur finale de l\\'enregistreur",
        initialInstruction: "instruction initiale et valeurs d\\'entrée stockées",
        ifGood: "dans {{line}}, comme {{recorder}} = 0, redirigé vers {{nextLine}}",
        ifBad: "dans {{line}}, comme {{recorder}} ≠ 0, redirigé vers {{nextLine}}",
        sum: "dans {{line}}, ajouté de l\\'enregistreur {{recorder}} et redirigé vers {{nextLine}}",
        subtract:
          "dans {{line}}, soustrait de l\\'enregistreur {{recorder}} et redirigé vers {{nextLine}}",
        double:
          "dans {{line}}, doublé de l\\'enregistreur {{recorder}} et redirigé vers {{nextLine}}",
        exponentialize:
          "dans {{line}}, exponentialisé de l\\'enregistreur {{recorder}} et redirigé vers {{nextLine}}",
      },
    },
  },
};
