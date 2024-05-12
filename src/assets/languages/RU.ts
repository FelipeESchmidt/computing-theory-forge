import { LanguageType } from ".";

export const RU: LanguageType = {
  language: "Русский",
  header: {
    title: "Кузница теории вычислений",
  },
  languageSelector: {
    title: "Выберите язык программы",
  },
  basic: {
    nextStep: "Следующий шаг",
  },
  auth: {
    login: {
      title: "Вход",
      email: "Электронная почта",
      password: "Пароль",
      button: "Войти",
      notUserYet: "Еще нет аккаунта?",
      logout: "Выйти",
    },
    register: {
      title: "Регистрация",
      name: "Имя",
      email: "Электронная почта",
      password: "Пароль",
      passwordConfirmation: "Подтверждение пароля",
      button: "Зарегистрироваться",
      alreadyUser: "Уже есть аккаунт?",
    },
    update: {
      name: "Имя",
      email: "Электронная почта",
      password: "Старый пароль",
      newPassword: "Новый пароль",
      newPasswordConfirmation: "Подтверждение нового пароля",
      button: "Обновить",
    },
  },
  theoreticalMachine: {
    title: "Теоретическая машина",
    description:
      "Определите свой регистратор с функциональностью и инструкциями, программируйте свою машину и выполните ее.",
    newMachine: "Новая Машина",
    save: {
      title: "Сохраните созданную машину",
      name: "Имя Машины",
      button: "Сохранить",
      titleUpdate: "Обновить или сохранить вашу машину",
      buttonUpdate: "Обновить",
      buttonSaveNew: "Сохранить как новую",
    },
    definitionStep: {
      stepTitle: "Определение",
      title: "Определение Машины",
      notice:
        "Добавьте регистратор, чтобы начать определение машины, или создайте случайную машину.",
      definition:
        "FES_машина = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - Наборы памяти\nN{input} - Наборы ввода\nN{output} - Наборы вывода",
      randomMachine: "Случайная Машина",
      validateMachine: "Проверить Машину",
      validatedMachine: "Машина успешно проверена!",
      generateMachine: "Создать Машину",
      generatedMachine: "Машина успешно создана!",
      randomMachineGenerated: "Случайная машина успешно создана!",
      baseError: "У машины проблемы! -> {{message}} <-",
      notEnoughComparators: "Программа должна иметь как минимум {{n}} сравнителей!",
      notEnoughFunctions: "Программа должна иметь как минимум {{n}} функций!",
      functionalities: {
        store: {
          title: "Хранить",
          definition: "хранить_{recorder}",
          definitionFull:
            "хранить_{recorder}: N -> N{length} такое, что, ∀n∈N, хранить_{recorder}({recorder}) = ({recorders})",
        },
        return: {
          title: "Вернуть",
          definition: "вернуть_{recorder}",
          definitionFull:
            "вернуть_{recorder}: N{length} -> N такое, что, ∀({recorders})∈N{length}, вернуть_{recorder}({recorders}) = {recorder}",
        },
        sum: {
          title: "Сумма",
          definition: "сумма_{recorder}",
          definitionFull:
            "сумма_{recorder}: N{length} -> N{length} такое, что, ∀({recorders})∈N{length}, сумма_{recorder}({recorders}) = ({recordersPlus})",
        },
        subtract: {
          title: "Вычесть",
          definition: "вычесть_{recorder}",
          definitionFull:
            "вычесть_{recorder}: N{length} -> N{length} такое, что, ∀({recorders})∈N{length}, вычесть_{recorder}({recorders}) = ({recordersLess}), если {recorder} ≥ 0;  вычесть_{recorder}({recorders}) = ({регистраторыНоль}), если {recorder} = 0",
        },
        double: {
          title: "Удвоить",
          definition: "удвоить_{recorder}",
          definitionFull:
            "удвоить_{recorder}: N{length} -> N{length} такое, что, ∀({recorders})∈N{length}, удвоить_{recorder}({recorders}) = ({recordersTimes})",
        },
        exponentialize: {
          title: "Возвести в степень",
          definition: "возвести_в_степень_{recorder}",
          definitionFull:
            "возвести_в_степень_{recorder}: N{length} -> N{length} такое, что, ∀({recorders})∈N{length}, возвести_в_степень_{recorder}({recorders}) = ({recordersExponential})",
        },
        compareZero: {
          title: "Сравнить с 0",
          definition: "равен_нулю_{recorder}",
          definitionFull:
            "равен_нулю_{recorder}: N{length} -> N такое, что, ∀({recorders})∈N{length}, равен_нулю_{recorder}({recorders}) = 1, если {recorder} = 0; равен_нулю_{recorder}({recorders}) = 0, если {recorder} ≠ 0",
        },
      },
    },
    programmingStep: {
      stepTitle: "Программирование",
      title: "Программирование",
      notice:
        "Добавьте строки и напишите программу для машины, используя указатели ниже.",
      validateProgram: "Проверить и Создать",
      notEnoughLines: "Программа должна иметь как минимум {{lines}} строк!",
      emptyLine: "Есть пустая строка!",
      emptySelector: "Есть строка с пустым селектором!",
      notEnoughReturn: "Программа должна иметь как минимум один возврат!",
      validProgram: "Действительная программа!",
      addLine: "Добавить строку",
      selectLineType: "Выберите тип строки",
      endLine: "Конец",
      newLine: "Новая Строка",
      selectPlaceholder: "Выбрать ",
      condition: {
        selectText: "Условие",
        text: "если",
        thenGoTo: "тогда перейти к",
        elseGoTo: "иначе перейти к",
      },
      function: {
        selectText: "Функция",
        text: "делать",
        goTo: "перейти к",
      },
      placeholderType: {
        comparators: "компаратор",
        functions: "функция",
        lines: "строка",
      },
    },
    runnableStep: {
      stepTitle: "Выполнение",
      title: "Выполнение",
      generateCode: "Создать код",
      runCode: "Запустить код",
      defineValues: "Определить начальные значения",
      codeGenerated: "Код успешно создан!",
      recorder: "Регистратор",
      programTexts: {
        programCouldBeInLoop:
          "Ваша программа может находиться в бесконечном цикле! Хотите продолжить?",
        finalRecorderValue: "Конечное значение регистратора",
        initialInstruction: "начальная инструкция и сохраненные значения ввода",
        ifGood: "в {{line}}, как {{recorder}} = 0, направлен в {{nextLine}}",
        ifBad: "в {{line}}, как {{recorder}} ≠ 0, направлен в {{nextLine}}",
        sum: "в {{line}}, добавлено из регистратора {{recorder}} и направлено в {{nextLine}}",
        subtract:
          "в {{line}}, вычтено из регистратора {{recorder}} и направлено в {{nextLine}}",
        double:
          "в {{line}}, удвоено из регистратора {{recorder}} и направлено в {{nextLine}}",
        exponentialize:
          "в {{line}}, возведено в степень из регистратора {{recorder}} и направлено в {{nextLine}}",
      },
    },
  },
  messages: {
    INVALID_CREDENTIALS: "Неверные учетные данные!",
    LOGIN_SUCCESSFUL: "Успешный вход!",
    EMAIL_ALREADY_EXISTS: "Электронная почта уже существует!",
    PASSWORDS_DO_NOT_MATCH: "Пароли не совпадают!",
    REGISTRATION_FAILED: "Ошибка регистрации!",
    REGISTRATION_SUCCESSFUL: "Регистрация успешна!",
    PASSWORD_IS_INVALID: "Пароль недействителен!",
    UPDATE_FAILED: "Ошибка обновления!",
    UPDATE_SUCCESSFUL: "Успешное обновление!",
    TOKEN_NOT_PROVIDED: "Токен не предоставлен!",
    TOKEN_IS_INVALID: "Недействительный токен!",
    USER_NOT_FOUND: "Пользователь не найден!",
    MACHINE_SAVE_FAILED: "Ошибка сохранения машины!",
    MACHINE_SAVE_SUCCESSFUL: "Машина успешно сохранена!",
    MACHINE_GET_ALL_SUCCESSFUL: "Машины успешно получены!",
    MACHINE_DELETE_FAILED: "Ошибка удаления машины!",
    MACHINE_DELETE_SUCCESSFUL: "Машина успешно удалена!",
    MACHINE_UPDATE_FAILED: "Ошибка обновления машины!",
    MACHINE_UPDATE_SUCCESSFUL: "Машина успешно обновлена!",
  },
};
