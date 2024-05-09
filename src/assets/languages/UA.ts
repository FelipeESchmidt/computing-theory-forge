import { LanguageType } from ".";

export const UA: LanguageType = {
  language: "Українська",
  header: {
    title: "Кузня теорії обчислень",
  },
  languageSelector: {
    title: "Виберіть мову програми",
  },
  basic: {
    nextStep: "Наступний Крок",
  },
  auth: {
    login: {
      title: "Увійти",
      email: "Електронна пошта",
      password: "Пароль",
      button: "Увійти",
      notUserYet: "Ще немає облікового запису?",
      logout: "Вийти",
    },
    register: {
      title: "Реєстрація",
      name: "Ім'я",
      email: "Електронна пошта",
      password: "Пароль",
      passwordConfirmation: "Підтвердження пароля",
      button: "Зареєструватися",
      alreadyUser: "Вже є обліковий запис?",
    },
    update: {
      name: "Ім'я",
      email: "Електронна пошта",
      password: "Старий пароль",
      newPassword: "Новий пароль",
      newPasswordConfirmation: "Підтвердження нового пароля",
      button: "Оновити",
    },
  },
  theoreticalMachine: {
    title: "Теоретична Машина",
    description:
      "Визначте свій реєстратор з функціональністю та інструкціями, програмуйте свою машину та виконайте її.",
    newMachine: "Нова Машина",
    save: {
      title: "Збережіть створену машину",
      name: "Ім'я Машини",
      button: "Зберегти",
      titleUpdate: "Оновити або зберегти вашу машину",
      buttonUpdate: "Оновити",
      buttonSaveNew: "Зберегти як новий файл",
    },
    definitionStep: {
      stepTitle: "Визначення",
      title: "Визначення Машини",
      notice:
        "Додайте реєстратор, щоб розпочати визначення машини або створіть випадкову машину.",
      definition:
        "FES_машина = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - Набори пам'яті\nN{input} - Набори вводу\nN{output} - Набори виводу",
      randomMachine: "Випадкова Машина",
      validateMachine: "Перевірити Машину",
      validatedMachine: "Машина успішно перевірена!",
      generateMachine: "Створити Машину",
      generatedMachine: "Машина успішно створена!",
      randomMachineGenerated: "Випадкова машина успішно створена!",
      baseError: "У машини проблеми! -> {{message}} <-",
      notEnoughComparators: "Програма повинна мати принаймні {{n}} компараторів!",
      notEnoughFunctions: "Програма повинна мати принаймні {{n}} функцій!",
      functionalities: {
        store: {
          title: "Зберегти",
          definition: "зберегти_{recorder}",
          definitionFull:
            "зберегти_{recorder}: N -> N{length} таке, що, ∀n∈N, зберегти_{recorder}({recorder}) = ({recorders})",
        },
        return: {
          title: "Повернутися",
          definition: "повернути_{recorder}",
          definitionFull:
            "повернути_{recorder}: N{length} -> N таке, що, ∀({recorders})∈N{length}, повернути_{recorder}({recorders}) = {recorder}",
        },
        sum: {
          title: "Сума",
          definition: "сума_{recorder}",
          definitionFull:
            "сума_{recorder}: N{length} -> N{length} таке, що, ∀({recorders})∈N{length}, сума_{recorder}({recorders}) = ({recordersPlus})",
        },
        subtract: {
          title: "Відняти",
          definition: "відняти_{recorder}",
          definitionFull:
            "відняти_{recorder}: N{length} -> N{length} таке, що, ∀({recorders})∈N{length}, відняти_{recorder}({recorders}) = ({recordersLess}), якщо {recorder} ≥ 0;  відняти_{recorder}({recorders}) = ({реєстраториНуль}), якщо {recorder} = 0",
        },
        double: {
          title: "Подвоїти",
          definition: "подвоїти_{recorder}",
          definitionFull:
            "подвоїти_{recorder}: N{length} -> N{length} таке, що, ∀({recorders})∈N{length}, подвоїти_{recorder}({recorders}) = ({recordersTimes})",
        },
        exponentialize: {
          title: "Піднести до степеня",
          definition: "піднести_до_степеня_{recorder}",
          definitionFull:
            "піднести_до_степеня_{recorder}: N{length} -> N{length} таке, що, ∀({recorders})∈N{length}, піднести_до_степеня_{recorder}({recorders}) = ({recordersExponential})",
        },
        compareZero: {
          title: "Порівняти з 0",
          definition: "є_нуль_{recorder}",
          definitionFull:
            "є_нуль_{recorder}: N{length} -> N таке, що, ∀({recorders})∈N{length}, є_нуль_{recorder}({recorders}) = 1, якщо {recorder} = 0; є_нуль_{recorder}({recorders}) = 0, якщо {recorder} ≠ 0",
        },
      },
    },
    programmingStep: {
      stepTitle: "Програмування",
      title: "Програмування",
      notice: "Додайте рядки та програмуйте машину, використовуючи вказівники нижче.",
      validateProgram: "Перевірити та Створити",
      notEnoughLines: "Програма повинна мати принаймні {{lines}} рядків!",
      emptyLine: "Є порожній рядок!",
      emptySelector: "Є рядок з порожнім селектором!",
      notEnoughReturn: "Програма повинна мати принаймні один повернення!",
      validProgram: "Дійсна Програма!",
      addLine: "Додати Рядок",
      selectLineType: "Виберіть тип рядка",
      endLine: "Кінець",
      newLine: "Новий Рядок",
      selectPlaceholder: "Вибрати ",
      condition: {
        selectText: "Умова",
        text: "якщо",
        thenGoTo: "тоді перейти до",
        elseGoTo: "інакше перейти до",
      },
      function: {
        selectText: "Функція",
        text: "зробити",
        goTo: "перейти до",
      },
      placeholderType: {
        comparators: "компаратор",
        functions: "функція",
        lines: "рядок",
      },
    },
    runnableStep: {
      stepTitle: "Виконання",
      title: "Виконання",
      generateCode: "Створити Код",
      runCode: "Виконати Код",
      defineValues: "Визначте початкові значення",
      codeGenerated: "Код успішно створено!",
      recorder: "Реєстратор",
      programTexts: {
        programCouldBeInLoop:
          "Ваша програма може бути в безкінечному циклі! Бажаєте продовжити?",
        finalRecorderValue: "Кінцеве значення реєстратора",
        initialInstruction: "початкова інструкція та збережені значення введення",
        ifGood: "в {{line}}, як {{recorder}} = 0, перенаправлено до {{nextLine}}",
        ifBad: "в {{line}}, як {{recorder}} ≠ 0, перенаправлено до {{nextLine}}",
        sum: "в {{line}}, додано з реєстратора {{recorder}} і перенаправлено до {{nextLine}}",
        subtract:
          "в {{line}}, віднято з реєстратора {{recorder}} і перенаправлено до {{nextLine}}",
        double:
          "в {{line}}, подвоєно з реєстратора {{recorder}} і перенаправлено до {{nextLine}}",
        exponentialize:
          "в {{line}}, піднесено до степеня з реєстратора {{recorder}} і перенаправлено до {{nextLine}}",
      },
    },
  },
};
