import { LanguageType } from ".";

export const ES: LanguageType = {
  language: "Español",
  header: {
    title: "Forja de Teoría de la Computación",
  },
  languageSelector: {
    title: "Selecciona el lenguaje del programa",
  },
  basic: {
    nextStep: "Siguiente Paso",
  },
  auth: {
    login: {
      title: "Inicio de sesión",
      email: "Correo electrónico",
      password: "Contraseña",
      button: "Iniciar sesión",
      notUserYet: "¿Todavía no tienes una cuenta?",
      logout: "Cerrar sesión",
    },
    register: {
      title: "Registro",
      name: "Nombre",
      email: "Correo electrónico",
      password: "Contraseña",
      passwordConfirmation: "Confirmación de contraseña",
      button: "Registrarse",
      alreadyUser: "¿Ya tienes una cuenta?",
    },
    update: {
      name: "Nombre",
      email: "Correo electrónico",
      password: "Contraseña Antigua",
      newPassword: "Nueva Contraseña",
      newPasswordConfirmation: "Confirmación de Nueva Contraseña",
      button: "Actualizar",
    },
  },
  theoreticalMachine: {
    definitionStep: {
      stepTitle: "Definición",
      title: "Definición de la Máquina",
      notice:
        "Añade un grabador para empezar la definición de la máquina o crea una máquina aleatoria.",
      definition:
        "FES_máquina = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - Conjuntos de Memoria\nN{input} - Conjuntos de Entrada\nN{output} - Conjuntos de Salida",
      randomMachine: "Máquina Aleatoria",
      validateMachine: "Validar Máquina",
      validatedMachine: "¡Máquina validada exitosamente!",
      generateMachine: "Generar Máquina",
      generatedMachine: "¡Máquina generada exitosamente!",
      randomMachineGenerated: "¡Máquina aleatoria generada exitosamente!",
      baseError: "¡La máquina tiene problemas! -> {{message}} <-",
      notEnoughComparators: "¡El programa necesita tener al menos {{n}} comparadores!",
      notEnoughFunctions: "¡El programa necesita tener al menos {{n}} funciones!",
      functionalities: {
        store: {
          title: "Almacenar",
          definition: "almacenar_{recorder}",
          definitionFull:
            "almacenar_{recorder}: N -> N{length} tal que, ∀n∈N, almacenar_{recorder}({recorder}) = ({recorders})",
        },
        return: {
          title: "Retornar",
          definition: "retornar_{recorder}",
          definitionFull:
            "retornar_{recorder}: N{length} -> N tal que, ∀({recorders})∈N{length}, retornar_{recorder}({recorders}) = {recorder}",
        },
        sum: {
          title: "Sumar",
          definition: "sumar_{recorder}",
          definitionFull:
            "sumar_{recorder}: N{length} -> N{length} tal que, ∀({recorders})∈N{length}, sumar_{recorder}({recorders}) = ({recordersPlus})",
        },
        subtract: {
          title: "Restar",
          definition: "restar_{recorder}",
          definitionFull:
            "restar_{recorder}: N{length} -> N{length} tal que, ∀({recorders})∈N{length}, restar_{recorder}({recorders}) = ({recordersLess}), si {recorder} ≥ 0;  restar_{recorder}({recorders}) = ({grabadorsCero}), si {recorder} = 0",
        },
        double: {
          title: "Doblar",
          definition: "doblar_{recorder}",
          definitionFull:
            "doblar_{recorder}: N{length} -> N{length} tal que, ∀({recorders})∈N{length}, doblar_{recorder}({recorders}) = ({recordersTimes})",
        },
        exponentialize: {
          title: "Exponenciar",
          definition: "exponenciar_{recorder}",
          definitionFull:
            "exponenciar_{recorder}: N{length} -> N{length} tal que, ∀({recorders})∈N{length}, exponenciar_{recorder}({recorders}) = ({recordersExponential})",
        },
        compareZero: {
          title: "Comparar 0",
          definition: "es_cero_{recorder}",
          definitionFull:
            "es_cero_{recorder}: N{length} -> N tal que, ∀({recorders})∈N{length}, es_cero_{recorder}({recorders}) = 1, si {recorder} = 0; es_cero_{recorder}({recorders}) = 0, si {recorder} ≠ 0",
        },
      },
    },
    programmingStep: {
      stepTitle: "Programación",
      title: "Programación",
      notice: "Añade líneas y programa la máquina utilizando los selectores debajo.",
      validateProgram: "Validar y Generar",
      notEnoughLines: "¡El programa necesita tener al menos {{lines}} líneas!",
      emptyLine: "¡Hay una línea vacía!",
      emptySelector: "¡Hay una línea con selector vacío!",
      notEnoughReturn: "¡El programa necesita tener al menos un retorno!",
      validProgram: "¡Programa válido!",
      addLine: "Añadir Línea",
      selectLineType: "Selecciona el tipo de línea",
      endLine: "Fin",
      newLine: "Nueva Línea",
      selectPlaceholder: "Selecciona ",
      condition: {
        selectText: "Condición",
        text: "si",
        thenGoTo: "entonces ir_a",
        elseGoTo: "sino ir_a",
      },
      function: {
        selectText: "Función",
        text: "hacer",
        goTo: "ir_a",
      },
      placeholderType: {
        comparators: "el comparador",
        functions: "la función",
        lines: "la línea",
      },
    },
    runnableStep: {
      stepTitle: "Ejecución",
      title: "Ejecución",
      generateCode: "Generar Código",
      runCode: "Ejecutar Código",
      defineValues: "Define los valores iniciales",
      codeGenerated: "¡Código generado exitosamente!",
      recorder: "Grabador",
      programTexts: {
        programCouldBeInLoop:
          "¡Tu programa puede estar en un bucle infinito! ¿Deseas continuar?",
        finalRecorderValue: "Valor final del grabador",
        initialInstruction: "instrucción inicial y valores de entrada almacenados",
        ifGood: "en {{line}}, como {{recorder}} = 0, desviado a {{nextLine}}",
        ifBad: "en {{line}}, como {{recorder}} ≠ 0, desviado a {{nextLine}}",
        sum: "en {{line}}, añadido desde el grabador {{recorder}} y desviado a {{nextLine}}",
        subtract:
          "en {{line}}, restado desde el grabador {{recorder}} y desviado a {{nextLine}}",
        double:
          "en {{line}}, doblado desde el grabador {{recorder}} y desviado a {{nextLine}}",
        exponentialize:
          "en {{line}}, exponenciado desde el grabador {{recorder}} y desviado a {{nextLine}}",
      },
    },
  },
};
