import { LanguageType } from ".";

const replaceable = [
  ["{length}", "🎈"],
  ["{input}", "🎆"],
  ["{output}", "🎇"],
  ["{functionalities}", "🧨"],
  ["{{message}}", "✨"],
  ["{{n}}", "🎉"],
  ["{recorder}", "🎊"],
  ["{recorders}", "🎃"],
  ["{recordersPlus}", "🎄"],
  ["{recordersLess}", "🎋"],
  ["{recordersTimes}", "🎍"],
  ["{recordersExponential}", "🎎"],
  ["{{lines}}", "🎏"],
  ["{{line}}", "🎐"],
  ["{{recorder}}", "🎁"],
  ["{{nextLine}}", "🎑"],
];

const rpl = (textPar: string) => {
  let text = textPar;
  replaceable.forEach(([key, value]) => {
    text = text.replace(new RegExp(value, "g"), key);
  });
  return text;
};

// <TextArea onChange={(e) => console.log(JSON.parse(rpl(JSON.stringify(e.target.value))))} />

export const Base_Translate: LanguageType = {
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
      name: "Name",
      email: "E-mail",
      password: "Old Password",
      newPassword: "New Password",
      newPasswordConfirmation: "New Password Confirmation",
      button: "Update",
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
    },
    definitionStep: {
      stepTitle: "Definition",
      title: "Machine Definition",
      notice:
        "Add a recorder to start the machine definition or create a random machine.",
      definition:
        "FES_machine = (N🎈, N🎆, N🎇, 🧨)\nN🎈 - Memory Sets\nN🎆 - Input Sets\nN🎇 - Output Sets",
      randomMachine: "Random Machine",
      validateMachine: "Validate Machine",
      validatedMachine: "Machine validated successfully!",
      generateMachine: "Generate Machine",
      generatedMachine: "Machine generated successfully!",
      randomMachineGenerated: "Random machine generated successfully!",
      baseError: "Machine has problems! -> ✨ <-",
      notEnoughComparators: "Program needs to have at least 🎉 comparators!",
      notEnoughFunctions: "Program needs to have at least 🎉 functions!",
      functionalities: {
        store: {
          title: "Store",
          definition: "store_🎊",
          definitionFull: "store_🎊: N -> N🎈 such that, ∀n∈N, store_🎊(🎊) = (🎃)",
        },
        return: {
          title: "Return",
          definition: "return_🎊",
          definitionFull: "return_🎊: N🎈 -> N such that, ∀(🎃)∈N🎈, return_🎊(🎃) = 🎊",
        },
        sum: {
          title: "Sum",
          definition: "sum_🎊",
          definitionFull: "sum_🎊: N🎈 -> N🎈 such that, ∀(🎃)∈N🎈, sum_🎊(🎃) = (🎄)",
        },
        subtract: {
          title: "Subtract",
          definition: "subtract_🎊",
          definitionFull:
            "subtract_🎊: N🎈 -> N🎈 such that, ∀(🎃)∈N🎈, subtract_🎊(🎃) = (🎋), if 🎊 ≥ 0;  subtract_🎊(🎃) = ({recordersZero}), if 🎊 = 0",
        },
        double: {
          title: "Double",
          definition: "double_🎊",
          definitionFull:
            "double_🎊: N🎈 -> N🎈 such that, ∀(🎃)∈N🎈, double_🎊(🎃) = (🎍)",
        },
        exponentialize: {
          title: "Exponentialize",
          definition: "exponentialize_🎊",
          definitionFull:
            "exponentialize_🎊: N🎈 -> N🎈 such that, ∀(🎃)∈N🎈, exponentialize_🎊(🎃) = (🎎)",
        },
        compareZero: {
          title: "Compare 0",
          definition: "is_zero_🎊",
          definitionFull:
            "is_zero_🎊: N🎈 -> N such that, ∀(🎃)∈N🎈, is_zero_🎊(🎃) = 1, if 🎊 = 0; is_zero_🎊(🎃) = 0, if 🎊 ≠ 0",
        },
      },
    },
    programmingStep: {
      stepTitle: "Programming",
      title: "Programming",
      notice: "Add lines and program the machine using the selectors below.",
      validateProgram: "Validate and Generate",
      notEnoughLines: "Program needs to have at least 🎏 lines!",
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
        ifGood: "in 🎐, as {🎊} = 0, diverted to 🎑",
        ifBad: "in 🎐, as {🎊} ≠ 0, diverted to 🎑",
        sum: "in 🎐, added from recorder {🎊} and diverted to 🎑",
        subtract: "in 🎐, subtracted from recorder {🎊} and diverted to 🎑",
        double: "in 🎐, doubled from recorder {🎊} and diverted to 🎑",
        exponentialize: "in 🎐, exponentialized from recorder {🎊} and diverted to 🎑",
      },
    },
  },
};
