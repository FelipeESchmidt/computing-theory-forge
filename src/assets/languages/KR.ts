import { LanguageType } from ".";

export const KR: LanguageType = {
  language: "한국어",
  header: {
    title: "컴퓨팅 이론 포지",
  },
  languageSelector: {
    title: "프로그램 언어 선택",
  },
  basic: {
    nextStep: "다음 단계",
  },
  auth: {
    login: {
      title: "로그인",
      email: "이메일",
      password: "비밀번호",
      button: "로그인",
      notUserYet: "아직 계정이 없으신가요?",
      logout: "로그아웃",
    },
    register: {
      title: "회원가입",
      name: "이름",
      email: "이메일",
      password: "비밀번호",
      passwordConfirmation: "비밀번호 확인",
      button: "회원가입",
      alreadyUser: "이미 계정이 있으신가요?",
    },
  },
  theoreticalMachine: {
    definitionStep: {
      stepTitle: "정의",
      title: "기계 정의",
      notice: "기계 정의를 시작하려면 레코더를 추가하거나 무작위 기계를 생성하십시오.",
      definition:
        "FES_기계 = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - 메모리 집합\nN{input} - 입력 집합\nN{output} - 출력 집합",
      randomMachine: "랜덤 기계",
      validateMachine: "기계 유효성 검사",
      validatedMachine: "기계가 성공적으로 유효성 검사되었습니다!",
      generateMachine: "기계 생성",
      generatedMachine: "기계 생성이 성공했습니다!",
      randomMachineGenerated: "랜덤 기계 생성이 성공했습니다!",
      baseError: "기계에 문제가 있습니다! -> {{message}} <-",
      notEnoughComparators: "프로그램에는 적어도 {{n}} 개의 비교기가 필요합니다!",
      notEnoughFunctions: "프로그램에는 적어도 {{n}} 개의 함수가 필요합니다!",
      functionalities: {
        store: {
          title: "저장",
          definition: "저장_{recorder}",
          definitionFull:
            "저장_{recorder}: N -> N{length} 이렇게, ∀n∈N, 저장_{recorder}({recorder}) = ({recorders})",
        },
        return: {
          title: "반환",
          definition: "반환_{recorder}",
          definitionFull:
            "반환_{recorder}: N{length} -> N 이렇게, ∀({recorders})∈N{length}, 반환_{recorder}({recorders}) = {recorder}",
        },
        sum: {
          title: "합",
          definition: "합_{recorder}",
          definitionFull:
            "합_{recorder}: N{length} -> N{length} 이렇게, ∀({recorders})∈N{length}, 합_{recorder}({recorders}) = ({recordersPlus})",
        },
        subtract: {
          title: "빼기",
          definition: "빼기_{recorder}",
          definitionFull:
            "빼기_{recorder}: N{length} -> N{length} 이렇게, ∀({recorders})∈N{length}, 빼기_{recorder}({recorders}) = ({recordersLess}), 만약 {recorder} ≥ 0 인 경우;  빼기_{recorder}({recorders}) = ({레코더제로}), 만약 {recorder} = 0 인 경우",
        },
        double: {
          title: "배",
          definition: "배_{recorder}",
          definitionFull:
            "배_{recorder}: N{length} -> N{length} 이렇게, ∀({recorders})∈N{length}, 배_{recorder}({recorders}) = ({recordersTimes})",
        },
        exponentialize: {
          title: "지수화",
          definition: "지수화_{recorder}",
          definitionFull:
            "지수화_{recorder}: N{length} -> N{length} 이렇게, ∀({recorders})∈N{length}, 지수화_{recorder}({recorders}) = ({recordersExponential})",
        },
        compareZero: {
          title: "0 비교",
          definition: "제로인가_{recorder}",
          definitionFull:
            "제로인가_{recorder}: N{length} -> N 이렇게, ∀({recorders})∈N{length}, 제로인가_{recorder}({recorders}) = 1, 만약 {recorder} = 0 인 경우; 제로인가_{recorder}({recorders}) = 0, 만약 {recorder} ≠ 0 인 경우",
        },
      },
    },
    programmingStep: {
      stepTitle: "프로그래밍",
      title: "프로그래밍",
      notice: "아래의 셀렉터를 사용하여 줄을 추가하고 기계를 프로그래밍합니다.",
      validateProgram: "유효성 검사 및 생성",
      notEnoughLines: "프로그램에는 적어도 {{lines}} 개의 줄이 필요합니다!",
      emptyLine: "비어있는 줄이 있습니다!",
      emptySelector: "빈 선택기를 가진 줄이 있습니다!",
      notEnoughReturn: "프로그램에는 적어도 하나의 반환 값이 있어야 합니다!",
      validProgram: "유효한 프로그램!",
      addLine: "줄 추가",
      selectLineType: "줄 유형 선택",
      endLine: "종료",
      newLine: "새 줄",
      selectPlaceholder: "선택 ",
      condition: {
        selectText: "조건",
        text: "만약",
        thenGoTo: "그러면 이동",
        elseGoTo: "그렇지 않으면 이동",
      },
      function: {
        selectText: "함수",
        text: "실행",
        goTo: "이동",
      },
      placeholderType: {
        comparators: "비교기",
        functions: "함수",
        lines: "줄",
      },
    },
    runnableStep: {
      stepTitle: "실행",
      title: "실행",
      generateCode: "코드 생성",
      runCode: "코드 실행",
      defineValues: "초기 값 정의",
      codeGenerated: "코드 생성에 성공했습니다!",
      recorder: "레코더",
      programTexts: {
        programCouldBeInLoop:
          "귀하의 프로그램은 무한 루프에 있을 수 있습니다! 계속 하시겠습니까?",
        finalRecorderValue: "레코더의 최종 값",
        initialInstruction: "초기 지시 및 입력 값 저장됨",
        ifGood: "{{line}} 에서, {{recorder}} = 0 인 경우, {{nextLine}} 으로 이동합니다",
        ifBad: "{{line}} 에서, {{recorder}} ≠ 0 인 경우, {{nextLine}} 으로 이동합니다",
        sum: "{{line}} 에서, 레코더 {{recorder}} 에서 추가하고 {{nextLine}} 으로 이동합니다",
        subtract:
          "{{line}} 에서, 레코더 {{recorder}} 에서 빼고 {{nextLine}} 으로 이동합니다",
        double:
          "{{line}} 에서, 레코더 {{recorder}} 에서 배로 증가하고 {{nextLine}} 으로 이동합니다",
        exponentialize:
          "{{line}} 에서, 레코더 {{recorder}} 에서 지수로 변환하고 {{nextLine}} 으로 이동합니다",
      },
    },
  },
};
