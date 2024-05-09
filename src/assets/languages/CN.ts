import { LanguageType } from ".";

export const CN: LanguageType = {
  language: "中文",
  header: {
    title: "计算理论锻造厂",
  },
  languageSelector: {
    title: "选择程序语言",
  },
  basic: {
    nextStep: "下一步",
  },
  auth: {
    login: {
      title: "登录",
      email: "电子邮件",
      password: "密码",
      button: "登录",
      notUserYet: "还没有账户？",
      logout: "退出登录",
    },
    register: {
      title: "注册",
      name: "姓名",
      email: "电子邮件",
      password: "密码",
      passwordConfirmation: "确认密码",
      button: "注册",
      alreadyUser: "已经有账户？",
    },
    update: {
      name: "姓名",
      email: "电子邮件",
      password: "旧密码",
      newPassword: "新密码",
      newPasswordConfirmation: "确认新密码",
      button: "更新",
    },
  },
  theoreticalMachine: {
    title: "理论机器",
    description: "定义您的记录器，具有功能和指令，编程您的机器并执行它。",
    newMachine: "新机器",
    save: {
      title: "保存您创建的机器",
      name: "机器名称",
      button: "保存",
    },
    definitionStep: {
      stepTitle: "定义",
      title: "机器定义",
      notice: "添加一个记录器以开始机器定义，或创建一个随机机器。",
      definition:
        "FES_机器 = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - 存储器集\nN{input} - 输入集\nN{output} - 输出集",
      randomMachine: "随机机器",
      validateMachine: "验证机器",
      validatedMachine: "机器验证成功！",
      generateMachine: "生成机器",
      generatedMachine: "机器生成成功！",
      randomMachineGenerated: "随机机器生成成功！",
      baseError: "机器存在问题！-> {{message}} <-",
      notEnoughComparators: "程序需要至少 {{n}} 个比较器！",
      notEnoughFunctions: "程序需要至少 {{n}} 个函数！",
      functionalities: {
        store: {
          title: "存储",
          definition: "存储_{recorder}",
          definitionFull:
            "存储_{recorder}: N -> N{length}，其中，∀n∈N，存储_{recorder}({recorder}) = ({recorders})",
        },
        return: {
          title: "返回",
          definition: "返回_{recorder}",
          definitionFull:
            "返回_{recorder}: N{length} -> N，其中，∀({recorders})∈N{length}，返回_{recorder}({recorders}) = {recorder}",
        },
        sum: {
          title: "求和",
          definition: "求和_{recorder}",
          definitionFull:
            "求和_{recorder}: N{length} -> N{length}，其中，∀({recorders})∈N{length}，求和_{recorder}({recorders}) = ({recordersPlus})",
        },
        subtract: {
          title: "减法",
          definition: "减法_{recorder}",
          definitionFull:
            "减法_{recorder}: N{length} -> N{length}，其中，∀({recorders})∈N{length}，减法_{recorder}({recorders}) = ({recordersLess})，如果 {recorder} ≥ 0;  减法_{recorder}({recorders}) = ({记录器零}), 如果 {recorder} = 0",
        },
        double: {
          title: "双倍",
          definition: "双倍_{recorder}",
          definitionFull:
            "双倍_{recorder}: N{length} -> N{length}，其中，∀({recorders})∈N{length}，双倍_{recorder}({recorders}) = ({recordersTimes})",
        },
        exponentialize: {
          title: "指数化",
          definition: "指数化_{recorder}",
          definitionFull:
            "指数化_{recorder}: N{length} -> N{length}，其中，∀({recorders})∈N{length}，指数化_{recorder}({recorders}) = ({recordersExponential})",
        },
        compareZero: {
          title: "比较零",
          definition: "是零_{recorder}",
          definitionFull:
            "是零_{recorder}: N{length} -> N，其中，∀({recorders})∈N{length}，是零_{recorder}({recorders}) = 1，如果 {recorder} = 0; 是零_{recorder}({recorders}) = 0，如果 {recorder} ≠ 0",
        },
      },
    },
    programmingStep: {
      stepTitle: "编程",
      title: "编程",
      notice: "使用下面的选择器添加行并编程机器。",
      validateProgram: "验证和生成",
      notEnoughLines: "程序必须至少有 {{lines}} 行！",
      emptyLine: "有一行为空！",
      emptySelector: "有一行具有空选择器！",
      notEnoughReturn: "程序必须至少有一个返回！",
      validProgram: "有效程序！",
      addLine: "添加行",
      selectLineType: "选择行类型",
      endLine: "结束",
      newLine: "新行",
      selectPlaceholder: "选择 ",
      condition: {
        selectText: "条件",
        text: "如果",
        thenGoTo: "然后转到",
        elseGoTo: "否则转到",
      },
      function: {
        selectText: "函数",
        text: "执行",
        goTo: "转到",
      },
      placeholderType: {
        comparators: "比较器",
        functions: "函数",
        lines: "行",
      },
    },
    runnableStep: {
      stepTitle: "执行",
      title: "执行",
      generateCode: "生成代码",
      runCode: "运行代码",
      defineValues: "定义初始值",
      codeGenerated: "代码生成成功！",
      recorder: "记录器",
      programTexts: {
        programCouldBeInLoop: "您的程序可能处于无限循环中！您想继续吗？",
        finalRecorderValue: "记录器的最终值",
        initialInstruction: "初始指令和输入值已存储",
        ifGood: "在 {{line}} 中，如 {{recorder}} = 0，重定向到 {{nextLine}}",
        ifBad: "在 {{line}} 中，如 {{recorder}} ≠ 0，重定向到 {{nextLine}}",
        sum: "在 {{line}} 中，从记录器 {{recorder}} 添加并重定向到 {{nextLine}}",
        subtract: "在 {{line}} 中，从记录器 {{recorder}} 减去并重定向到 {{nextLine}}",
        double: "在 {{line}} 中，从记录器 {{recorder}} 倍增并重定向到 {{nextLine}}",
        exponentialize:
          "在 {{line}} 中，从记录器 {{recorder}} 进行指数化并重定向到 {{nextLine}}",
      },
    },
  },
};
