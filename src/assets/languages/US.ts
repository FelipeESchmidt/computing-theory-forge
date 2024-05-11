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
  auth: {
    login: {
      title: "Login",
      email: "E-mail",
      password: "Password",
      button: "Login",
      notUserYet: "Don't have an account yet?",
      logout: "Logout",
    },
    register: {
      title: "Register",
      name: "Name",
      email: "E-mail",
      password: "Password",
      passwordConfirmation: "Password Confirmation",
      button: "Register",
      alreadyUser: "Already have an account?",
    },
    update: {
      name: "Nome",
      email: "E-mail",
      password: "Senha Antiga",
      newPassword: "Nova Senha",
      newPasswordConfirmation: "Confirmação de Nova Senha",
      button: "Atualizar",
    },
  },
  theoreticalMachine: {
    title: "Theoretical Machines",
    description:
      "Define your recorders with functionalities and instructions, program your machine and execute it.",
    newMachine: "New Machine",
    save: {
      title: "Save your created machine",
      name: "Machine Name",
      button: "Save",
      titleUpdate: "Update or save your machine",
      buttonUpdate: "Update",
      buttonSaveNew: "Save as new",
    },
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
      stepTitle: "Programming",
      title: "Programming",
      notice: "Add lines and program the machine using the selectors below.",
      validateProgram: "Validate and Generate",
      notEnoughLines: "Program needs to have at least {{lines}} lines!",
      emptyLine: "There is a empty line!",
      emptySelector: "There is a line with empty selector!",
      notEnoughReturn: "Program needs to have at least one return!",
      validProgram: "Valid Program!",
      addLine: "Add Line",
      selectLineType: "Select the line type",
      endLine: "End",
      newLine: "New Line",
      selectPlaceholder: "Select ",
      condition: {
        selectText: "Condition",
        text: "if",
        thenGoTo: "then go_to",
        elseGoTo: "else go_to",
      },
      function: {
        selectText: "Function",
        text: "do",
        goTo: "go_to",
      },
      placeholderType: {
        comparators: "the comparator",
        functions: "the function",
        lines: "the line",
      },
    },
    runnableStep: {
      stepTitle: "Execution",
      title: "Execution",
      generateCode: "Generate Code",
      runCode: "Run Code",
      defineValues: "Define the initial values",
      codeGenerated: "Code generated successfully!",
      recorder: "Recorder",
      programTexts: {
        programCouldBeInLoop:
          "Your program may be in an infinite loop! Do you wish to continue?",
        finalRecorderValue: "Final value of recorder",
        initialInstruction: "initial instruction and input values stored",
        ifGood: "in {{line}}, as {{recorder}} = 0, diverted to {{nextLine}}",
        ifBad: "in {{line}}, as {{recorder}} ≠ 0, diverted to {{nextLine}}",
        sum: "in {{line}}, added from recorder {{recorder}} and diverted to {{nextLine}}",
        subtract:
          "in {{line}}, subtracted from recorder {{recorder}} and diverted to {{nextLine}}",
        double:
          "in {{line}}, doubled from recorder {{recorder}} and diverted to {{nextLine}}",
        exponentialize:
          "in {{line}}, exponentialized from recorder {{recorder}} and diverted to {{nextLine}}",
      },
    },
  },
  messages: {
    INVALID_CREDENTIALS: "Invalid credentials!",
    LOGIN_SUCCESSFUL: "Login successful!",
    EMAIL_ALREADY_EXISTS: "E-mail already exists!",
    PASSWORDS_DO_NOT_MATCH: "Passwords do not match!",
    REGISTRATION_FAILED: "Registration failed!",
    REGISTRATION_SUCCESSFUL: "Registration successful!",
    PASSWORD_IS_INVALID: "Password is invalid!",
    UPDATE_FAILED: "Update failed!",
    UPDATE_SUCCESSFUL: "Update successful!",
    TOKEN_NOT_PROVIDED: "Token not provided!",
    TOKEN_IS_INVALID: "Token is invalid!",
    USER_NOT_FOUND: "User not found!",
    MACHINE_SAVE_FAILED: "Error saving machine!",
    MACHINE_SAVE_SUCCESSFUL: "Machine saved successfully!",
    MACHINE_GET_ALL_SUCCESSFUL: "Machines retrieved successfully!",
    MACHINE_DELETE_FAILED: "Error deleting machine!",
    MACHINE_DELETE_SUCCESSFUL: "Machine deleted successfully!",
    MACHINE_UPDATE_FAILED: "Error updating machine!",
    MACHINE_UPDATE_SUCCESSFUL: "Machine updated successfully!",
  },
};
