import { LanguageType } from ".";

export const JP: LanguageType = {
  language: "日本語",
  header: {
    title: "計算理論の鍛造所",
  },
  languageSelector: {
    title: "プログラム言語を選択",
  },
  basic: {
    nextStep: "次のステップ",
  },
  auth: {
    login: {
      title: "ログイン",
      email: "メールアドレス",
      password: "パスワード",
      button: "ログイン",
      notUserYet: "まだアカウントを持っていませんか？",
      logout: "ログアウト",
    },
    register: {
      title: "登録",
      name: "名前",
      email: "メールアドレス",
      password: "パスワード",
      passwordConfirmation: "パスワードの確認",
      button: "登録",
      alreadyUser: "すでにアカウントをお持ちですか？",
    },
    update: {
      name: "名前",
      email: "メールアドレス",
      password: "古いパスワード",
      newPassword: "新しいパスワード",
      newPasswordConfirmation: "新しいパスワードの確認",
      button: "更新",
    },
  },
  theoreticalMachine: {
    title: "理論的なマシン",
    description: "レコーダーを機能と命令で定義し、マシンをプログラムして実行します。",
    newMachine: "新しいマシン",
    save: {
      title: "作成したマシンを保存",
      name: "マシン名",
      button: "保存",
      titleUpdate: "マシンを更新または保存",
      buttonUpdate: "更新",
      buttonSaveNew: "新しいものとして保存",
    },
    definitionStep: {
      stepTitle: "定義",
      title: "マシンの定義",
      notice:
        "マシンの定義を開始するためにレコーダーを追加するか、ランダムなマシンを作成します。",
      definition:
        "FES_マシン = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - メモリセット\nN{input} - 入力セット\nN{output} - 出力セット",
      randomMachine: "ランダムマシン",
      validateMachine: "マシンを検証",
      validatedMachine: "マシンの検証に成功しました！",
      generateMachine: "マシンを生成",
      generatedMachine: "マシンの生成に成功しました！",
      randomMachineGenerated: "ランダムなマシンが正常に生成されました！",
      baseError: "マシンに問題があります！ -> {{message}} <-",
      notEnoughComparators: "プログラムには少なくとも {{n}} 個の比較器が必要です！",
      notEnoughFunctions: "プログラムには少なくとも {{n}} 個の関数が必要です！",
      functionalities: {
        store: {
          title: "保存",
          definition: "保存_{recorder}",
          definitionFull:
            "保存_{recorder}: N -> N{length} ただし、∀n∈N、保存_{recorder}({recorder}) = ({recorders})",
        },
        return: {
          title: "戻る",
          definition: "戻る_{recorder}",
          definitionFull:
            "戻る_{recorder}: N{length} -> N ただし、∀({recorders})∈N{length}、戻る_{recorder}({recorders}) = {recorder}",
        },
        sum: {
          title: "合計",
          definition: "合計_{recorder}",
          definitionFull:
            "合計_{recorder}: N{length} -> N{length} ただし、∀({recorders})∈N{length}、合計_{recorder}({recorders}) = ({recordersPlus})",
        },
        subtract: {
          title: "差し引く",
          definition: "差し引く_{recorder}",
          definitionFull:
            "差し引く_{recorder}: N{length} -> N{length} ただし、∀({recorders})∈N{length}、差し引く_{recorder}({recorders}) = ({recordersLess})、もし {recorder} ≥ 0 の場合；差し引く_{recorder}({recorders}) = ({レコーダーゼロ})、もし {recorder} = 0 の場合",
        },
        double: {
          title: "倍",
          definition: "倍_{recorder}",
          definitionFull:
            "倍_{recorder}: N{length} -> N{length} ただし、∀({recorders})∈N{length}、倍_{recorder}({recorders}) = ({recordersTimes})",
        },
        exponentialize: {
          title: "指数化",
          definition: "指数化_{recorder}",
          definitionFull:
            "指数化_{recorder}: N{length} -> N{length} ただし、∀({recorders})∈N{length}、指数化_{recorder}({recorders}) = ({recordersExponential})",
        },
        compareZero: {
          title: "ゼロと比較",
          definition: "ゼロか_{recorder}",
          definitionFull:
            "ゼロか_{recorder}: N{length} -> N ただし、∀({recorders})∈N{length}、ゼロか_{recorder}({recorders}) = 1、もし {recorder} = 0 の場合；ゼロか_{recorder}({recorders}) = 0、もし {recorder} ≠ 0 の場合",
        },
      },
    },
    programmingStep: {
      stepTitle: "プログラミング",
      title: "プログラミング",
      notice: "以下のセレクターを使用して行を追加し、マシンをプログラムします。",
      validateProgram: "検証して生成",
      notEnoughLines: "プログラムには少なくとも {{lines}} 行必要です！",
      emptyLine: "空の行があります！",
      emptySelector: "空のセレクターを持つ行があります！",
      notEnoughReturn: "プログラムには少なくとも 1 つの戻り値が必要です！",
      validProgram: "有効なプログラム！",
      addLine: "行を追加",
      selectLineType: "行のタイプを選択",
      endLine: "終了",
      newLine: "新しい行",
      selectPlaceholder: "選択してください ",
      condition: {
        selectText: "条件",
        text: "もし",
        thenGoTo: "ならば次へ",
        elseGoTo: "そうでなければ次へ",
      },
      function: {
        selectText: "関数",
        text: "実行",
        goTo: "次へ",
      },
      placeholderType: {
        comparators: "比較器",
        functions: "関数",
        lines: "行",
      },
    },
    runnableStep: {
      stepTitle: "実行",
      title: "実行",
      generateCode: "コードを生成",
      runCode: "コードを実行",
      defineValues: "初期値を定義",
      codeGenerated: "コードが正常に生成されました！",
      recorder: "レコーダー",
      programTexts: {
        programCouldBeInLoop:
          "あなたのプログラムは無限ループに入る可能性があります！続行しますか？",
        finalRecorderValue: "レコーダーの最終値",
        initialInstruction: "初期命令と入力値が保存されました",
        ifGood:
          "{{line}} で、 {{recorder}} = 0 の場合、{{nextLine}} にリダイレクトされます",
        ifBad:
          "{{line}} で、 {{recorder}} ≠ 0 の場合、{{nextLine}} にリダイレクトされます",
        sum: "{{line}} で、レコーダー {{recorder}} から追加され、{{nextLine}} にリダイレクトされます",
        subtract:
          "{{line}} で、レコーダー {{recorder}} から減算され、{{nextLine}} にリダイレクトされます",
        double:
          "{{line}} で、レコーダー {{recorder}} が倍増され、{{nextLine}} にリダイレクトされます",
        exponentialize:
          "{{line}} で、レコーダー {{recorder}} から指数化され、{{nextLine}} にリダイレクトされます",
      },
    },
  },
  messages: {
    INVALID_CREDENTIALS: "無効な資格情報！",
    LOGIN_SUCCESSFUL: "ログインに成功しました！",
    EMAIL_ALREADY_EXISTS: "メールアドレスはすでに存在します！",
    PASSWORDS_DO_NOT_MATCH: "パスワードが一致しません！",
    REGISTRATION_FAILED: "登録に失敗しました！",
    REGISTRATION_SUCCESSFUL: "登録に成功しました！",
    PASSWORD_IS_INVALID: "パスワードが無効です！",
    UPDATE_FAILED: "更新に失敗しました！",
    UPDATE_SUCCESSFUL: "更新に成功しました！",
    TOKEN_NOT_PROVIDED: "トークンが提供されていません！",
    TOKEN_IS_INVALID: "トークンが無効です！",
    USER_NOT_FOUND: "ユーザーが見つかりません！",
    MACHINE_SAVE_FAILED: "マシンの保存中にエラーが発生しました！",
    MACHINE_NOT_FOUND: "マシンが見つかりません！",
    MACHINE_SAVE_SUCCESSFUL: "マシンが正常に保存されました！",
    MACHINE_GET_ALL_SUCCESSFUL: "マシンが正常に取得されました！",
    MACHINE_DELETE_FAILED: "マシンの削除中にエラーが発生しました！",
    MACHINE_DELETE_SUCCESSFUL: "マシンが正常に削除されました！",
    MACHINE_UPDATE_FAILED: "マシンの更新中にエラーが発生しました！",
    MACHINE_UPDATE_SUCCESSFUL: "マシンが正常に更新されました！",
  },
};
