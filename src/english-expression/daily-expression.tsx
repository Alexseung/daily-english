type ExampleSentence = {
  sentence: string;
  translation: string;
};

type Content = {
  id: string;
  content: string;
  meaning: string;
  literalTranslation: string;
  meaningInKorean: string;
  sentences: string[];
  details: {
    deatilMeaningInKorean: string;
    exampleSentences: ExampleSentence[];
  };
};

export const contents: Content[] = [
  {
    id: "day1",
    content: "It's not rocket science",
    meaning: "When something is not difficult to understand or do.",
    meaningInKorean: "무언가가 이해하기에, 행하기에 어렵지 않다는 뜻.",
    literalTranslation: "이건 로켓 과학이 아니다.",
    sentences: [
      "You can just use that remote, it's not rocket science.",
      "It's not rocket science. Why don't you just try it?",
      "Don't worry, it's not rocket science. You can figure it out.",
    ],
    details: {
      deatilMeaningInKorean:
        "직역하면 '<strong>로켓 과학이 아니다</strong>'라는 뜻으로, \
   <strong>무언가가 아주 어렵지 않음을 강조할 때 사용합니다.</strong> \
   주로 친구나 상대방을 안심시키거나 격려할 때 쓰며, \
   가볍고 친근한 상황에서 자주 사용됩니다. \
   때로는 상대방이 너무 어렵게 생각할 때 약간 비꼬는 뉘앙스로도 쓸 수 있습니다. \
   자연스러운 해석으로는 '<strong>별로 어려운 거 아니야</strong>', '<strong>쉽게 할 수 있어</strong>' 등이 있으며, \
   비슷한 표현으로는 '<strong>It's easy</strong>', '<strong>Piece of cake</strong>'가 있습니다.",
      exampleSentences: [
        {
          sentence:
            'You can just use that remote, <span style="font-weight:bold; color:purple;">it\'s not rocket science.</span>',
          translation: "그냥 리모컨으로 하면 돼, 그렇게 어려운 거 아니야.",
        },
        {
          sentence:
            "<span style=\"font-weight:bold; color:purple;\">It's not rocket science.</span> Why don't you just try it?",
          translation: "별로 안 복잡해. 그냥 해봐.",
        },
        {
          sentence:
            "Don't worry, <span style=\"font-weight:bold; color:purple;\">it's not rocket science.</span> You can figure it out.",
          translation: "걱정하지 마, 그렇게 어려운 거 아니야. 너도 할 수 있어.",
        },
      ],
    },
  },
  {
    id: "day2",
    content: "It could be",
    meaning: "Used to express possibility or uncertainty about something.",
    meaningInKorean:
      "무언가에 대한 가능성이나 불확실성을 표현할 때 사용합니다.",
    literalTranslation: "그럴 수도 있다.",
    sentences: [
      "It could be true, we don’t know yet.",
      "That could be the reason why she left.",
      "It could be dangerous if we’re not careful.",
    ],
    details: {
      deatilMeaningInKorean:
        "직역하면 '<strong>그럴 수도 있다</strong>'라는 뜻으로,  \
        <strong>어떤 일이 일어날 가능성이나 확실하지 않은 상황을 말할 때 사용합니다.</strong> \
        상대방이 추측이나 가능성을 말할 때 동의하거나 부드럽게 확신을 낮추는 표현입니다. \
        자연스러운 해석으로는 '<strong>그럴 수도 있지</strong>', '<strong>가능해</strong>'가 있습니다.",
      exampleSentences: [
        {
          sentence:
            'It <span style="font-weight:bold; color:purple;">could be</span> true, we don’t know yet.',
          translation: "그게 사실일 수도 있어, 아직 몰라.",
        },
        {
          sentence:
            'That <span style="font-weight:bold; color:purple;">could be</span> the reason why she left.',
          translation: "그게 그녀가 떠난 이유일 수도 있어.",
        },
        {
          sentence:
            'It <span style="font-weight:bold; color:purple;">could be</span> dangerous if we’re not careful.',
          translation: "우리가 조심하지 않으면 위험할 수도 있어.",
        },
      ],
    },
  },
  {
    id: "day3",
    content: "It rings a bell",
    meaning:
      "Used when something sounds familiar but you can't fully remember it.",
    meaningInKorean:
      "무언가가 익숙하게 들리지만 정확히 기억나지 않을 때 사용합니다.",
    literalTranslation: "그게 벨을 울리네.",
    sentences: [
      "That name rings a bell, but I can’t recall where we met.",
      "Your story rings a bell, I think I heard it before.",
      "Her face rings a bell, have we seen her before?",
    ],
    details: {
      deatilMeaningInKorean:
        "직역하면 '<strong>벨이 울린다</strong>'라는 뜻으로, \
        <strong>어떤 이름이나 상황이 익숙하게 느껴지지만 정확히 기억나지 않을 때 사용합니다.</strong> \
        자연스러운 해석으로는 '<strong>어디서 들어본 것 같아</strong>', '<strong>익숙해</strong>'가 있습니다.",
      exampleSentences: [
        {
          sentence:
            'That name <span style="font-weight:bold; color:purple;">rings a bell</span>, but I can’t recall where we met.',
          translation:
            "그 이름 어디서 들어본 것 같아, 근데 어디서 만났는지는 기억이 안 나.",
        },
        {
          sentence:
            'Your story <span style="font-weight:bold; color:purple;">rings a bell</span>, I think I heard it before.',
          translation: "네 이야기 어디서 들어본 거 같아, 전에 들은 것 같아.",
        },
        {
          sentence:
            'Her face <span style="font-weight:bold; color:purple;">rings a bell</span>, have we seen her before?',
          translation: "그녀 얼굴 어디서 본 것 같아, 전에 본 적 있나?",
        },
      ],
    },
  },
  {
    id: "day4",
    content: "I'm easy",
    meaning:
      "Used to say that you don't mind or have no preference in a situation.",
    meaningInKorean:
      "상황에 대해 특별한 선호가 없거나 상관없다는 뜻으로 사용합니다.",
    literalTranslation: "난 쉬워.",
    sentences: [
      "Where do you want to eat? I'm easy, you choose.",
      "I'm easy, anything works for me.",
      "I'm easy, just tell me where to go.",
    ],
    details: {
      deatilMeaningInKorean:
        "직역하면 '<strong>난 쉬워</strong>'이지만, 실제로는 \
        <strong>상대방이 결정해도 상관없다는 뜻으로, 선택이나 의견이 필요 없을 때 사용합니다.</strong> \
        자연스러운 해석으로는 '<strong>난 아무거나 괜찮아</strong>', '<strong>상관없어</strong>'가 있습니다.",
      exampleSentences: [
        {
          sentence:
            'Where do you want to eat? <span style="font-weight:bold; color:purple;">I\'m easy</span>, you choose.',
          translation: "어디서 먹고 싶어? 난 아무거나 괜찮아, 네가 골라.",
        },
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">I\'m easy</span>, anything works for me.',
          translation: "난 아무거나 괜찮아, 뭐든 상관없어.",
        },
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">I\'m easy</span>, just tell me where to go.',
          translation: "난 상관없어, 그냥 어디 갈지만 말해줘.",
        },
      ],
    },
  },
  {
    id: "day5",
    content: "Fair enough",
    meaning: "Used to acknowledge that something is reasonable or acceptable.",
    meaningInKorean:
      "무언가가 합리적이거나 받아들일 만하다는 것을 인정할 때 사용합니다.",
    literalTranslation: "공정하다.",
    sentences: [
      "You don’t want to go out because you’re tired? Fair enough.",
      "Fair enough, I understand your point.",
      "You think it's too risky? Fair enough, let's not do it.",
    ],
    details: {
      deatilMeaningInKorean:
        "<strong>상대방의 말이나 행동이 타당하거나 받아들일 만할 때 사용하는 표현입니다.</strong> \
        때로는 상대방 의견을 존중하면서 논쟁을 피하려는 뉘앙스도 있습니다. \
        자연스러운 해석으로는 '<strong>그럴 수도 있지</strong>', '<strong>알겠어</strong>'가 있습니다.",
      exampleSentences: [
        {
          sentence:
            'You don’t want to go out because you’re tired? <span style="font-weight:bold; color:purple;">Fair enough</span>.',
          translation: "피곤해서 나가기 싫다고? 그럴 수도 있지.",
        },
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">Fair enough</span>, I understand your point.',
          translation: "알겠어, 네 말 이해해.",
        },
        {
          sentence:
            "You think it's too risky? <span style=\"font-weight:bold; color:purple;\">Fair enough</span>, let's not do it.",
          translation: "너무 위험하다고 생각해? 알겠어, 그럼 하지 말자.",
        },
      ],
    },
  },
  {
    id: "day6",
    content: "Don't mention it",
    meaning: "Used as a polite response when someone thanks you.",
    meaningInKorean:
      "누군가 감사 인사를 했을 때, 별거 아니라며 정중하게 답하는 표현입니다.",
    literalTranslation: "그것을 언급하지 마.",
    sentences: [
      "Thanks for helping me out! Don't mention it.",
      "Don't mention it, it was no trouble at all.",
      "You saved me today! Don't mention it.",
    ],
    details: {
      deatilMeaningInKorean:
        "<strong>누군가 감사 인사를 했을 때, 별거 아니라며 정중하게 답하는 표현입니다.</strong> \
        '천만에요', '별말씀을요' 정도로 해석할 수 있으며, \
        너무 거창하게 생각하지 말라는 친근한 뉘앙스가 있습니다.",
      exampleSentences: [
        {
          sentence:
            'Thanks for helping me out! <span style="font-weight:bold; color:purple;">Don\'t mention it</span>.',
          translation: "도와줘서 고마워! 별말씀을요.",
        },
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">Don\'t mention it</span>, it was no trouble at all.',
          translation: "별말씀을요, 전혀 번거롭지 않았어요.",
        },
        {
          sentence:
            'You saved me today! <span style="font-weight:bold; color:purple;">Don\'t mention it</span>.',
          translation: "오늘 나 구해줘서 고마워! 별말씀을요.",
        },
      ],
    },
  },
  {
    id: "day7",
    content: "Let's call it a day",
    meaning:
      "Used to suggest stopping work or an activity for the rest of the day.",
    meaningInKorean:
      "오늘은 여기까지 하자는 뜻으로, 일을 마무리하자는 표현입니다.",
    literalTranslation: "오늘은 여기까지 부르자.",
    sentences: [
      "We've done enough work. Let's call it a day.",
      "It's getting late, let's call it a day.",
      "We finished the main task, so let's call it a day.",
    ],
    details: {
      deatilMeaningInKorean:
        "직역하면 '<strong>오늘을 여기서 부르자</strong>'라는 뜻으로,  \
      <strong>하루 동안 하던 일을 마무리하고 끝내자는 의미</strong>입니다.  \
      주로 업무, 공부, 프로젝트 등을 마칠 때 사용합니다.  \
      자연스러운 해석으로는 '<strong>오늘은 여기까지 하자</strong>', '<strong>이제 그만하자</strong>'가 있습니다.",
      exampleSentences: [
        {
          sentence:
            "We've done enough work. <span style='font-weight:bold; color:purple;'>Let's call it a day.</span>",
          translation: "할 만큼 했으니 오늘은 여기까지 하자.",
        },
        {
          sentence:
            "It's getting late, <span style='font-weight:bold; color:purple;'>let's call it a day.</span>",
          translation: "늦어지고 있으니 오늘은 여기까지 하자.",
        },
        {
          sentence:
            "We finished the main task, so <span style='font-weight:bold; color:purple;'>let's call it a day.</span>",
          translation: "주요 작업을 끝냈으니 오늘은 여기까지 하자.",
        },
      ],
    },
  },
  {
    id: "day8",
    content: "I'm all ears",
    meaning:
      "Used to show that you are listening carefully and interested in what someone is saying.",
    meaningInKorean: "상대방의 말을 경청하겠다는 뜻으로 사용합니다.",
    literalTranslation: "나는 전부 귀다.",
    sentences: [
      "Tell me what happened. I'm all ears.",
      "You have news? I'm all ears.",
      "I'm all ears, go ahead.",
    ],
    details: {
      deatilMeaningInKorean:
        "직역하면 '<strong>나는 전부 귀다</strong>'라는 뜻으로,  \
      <strong>상대방 이야기에 집중하고 있다는 뜻</strong>입니다. \
      자연스러운 해석으로는 '<strong>귀 기울이고 있어</strong>', '<strong>말해봐</strong>'가 있습니다.",
      exampleSentences: [
        {
          sentence:
            "Tell me what happened. <span style='font-weight:bold; color:purple;'>I'm all ears.</span>",
          translation: "무슨 일 있었는지 말해줘. 나 듣고 있어.",
        },
        {
          sentence:
            "You have news? <span style='font-weight:bold; color:purple;'>I'm all ears.</span>",
          translation: "소식 있어? 듣고 있어.",
        },
        {
          sentence:
            "<span style='font-weight:bold; color:purple;'>I'm all ears</span>, go ahead.",
          translation: "듣고 있으니까 말해.",
        },
      ],
    },
  },
  {
    id: "day9",
    content: "In a rush",
    meaning: "When someone is in a hurry or has little time.",
    meaningInKorean: "급하거나 시간이 촉박한 상태를 나타냅니다.",
    literalTranslation: "서두름 속에 있다.",
    sentences: [
      "I can't talk now, I'm in a rush.",
      "She left in a rush this morning.",
      "We have to finish this in a rush.",
    ],
    details: {
      deatilMeaningInKorean:
        "직역하면 '<strong>서두름 속에 있다</strong>'라는 뜻으로,  \
      <strong>매우 바쁘거나 촉박한 상황</strong>을 표현합니다. \
      자연스러운 해석으로는 '<strong>급해서</strong>', '<strong>시간이 없어</strong>'가 있습니다.",
      exampleSentences: [
        {
          sentence:
            "I can't talk now, <span style='font-weight:bold; color:purple;'>I'm in a rush.</span>",
          translation: "지금 말 못 해, 급해서.",
        },
        {
          sentence:
            "She left <span style='font-weight:bold; color:purple;'>in a rush</span> this morning.",
          translation: "그녀는 오늘 아침 서둘러 나갔다.",
        },
        {
          sentence:
            "We have to finish this <span style='font-weight:bold; color:purple;'>in a rush</span>.",
          translation: "이걸 빨리 끝내야 해.",
        },
      ],
    },
  },
  {
    id: "day10",
    content: "Let me guess",
    meaning:
      "Used when you want to predict or assume something before hearing the answer.",
    meaningInKorean: "상대방이 말하기 전에 추측할 때 사용합니다.",
    literalTranslation: "내가 추측해보자.",
    sentences: [
      "Let me guess, you forgot your keys.",
      "Let me guess, it’s about your job.",
      "Let me guess, you’re hungry.",
    ],
    details: {
      deatilMeaningInKorean:
        "직역하면 '<strong>내가 추측해보자</strong>'라는 뜻으로,  \
      <strong>상대방이 말하려는 내용을 미리 맞혀보려는 상황</strong>에서 씁니다. \
      자연스러운 해석으로는 '<strong>맞혀볼게</strong>', '<strong>내가 맞혀보지</strong>'가 있습니다.",
      exampleSentences: [
        {
          sentence:
            "<span style='font-weight:bold; color:purple;'>Let me guess</span>, you forgot your keys.",
          translation: "맞혀볼게, 너 열쇠 잊어버렸지?",
        },
        {
          sentence:
            "<span style='font-weight:bold; color:purple;'>Let me guess</span>, it’s about your job.",
          translation: "맞혀볼게, 직장 얘기지?",
        },
        {
          sentence:
            "<span style='font-weight:bold; color:purple;'>Let me guess</span>, you’re hungry.",
          translation: "맞혀볼게, 너 배고프지?",
        },
      ],
    },
  },
  {
    id: "day11",
    content: "My gut tells me",
    meaning:
      "Used when your intuition or instinct gives you a strong feeling about something.",
    meaningInKorean: "직감이나 본능적으로 어떤 느낌을 받을 때 사용합니다.",
    literalTranslation: "내 장이 나에게 말한다.",
    sentences: [
      "My gut tells me this is a bad idea.",
      "My gut tells me he’s lying.",
      "My gut tells me something good will happen.",
    ],
    details: {
      deatilMeaningInKorean:
        "직역하면 '<strong>내 장이 나에게 말한다</strong>'라는 뜻으로,  \
      <strong>이성적인 근거보다 직감이나 느낌을 강조</strong>할 때 씁니다. \
      자연스러운 해석으로는 '<strong>직감적으로 느껴져</strong>', '<strong>왠지 느낌이 그래</strong>'가 있습니다.",
      exampleSentences: [
        {
          sentence:
            "<span style='font-weight:bold; color:purple;'>My gut tells me</span> this is a bad idea.",
          translation: "왠지 이건 나쁜 생각 같아.",
        },
        {
          sentence:
            "<span style='font-weight:bold; color:purple;'>My gut tells me</span> he’s lying.",
          translation: "왠지 그가 거짓말하는 것 같아.",
        },
        {
          sentence:
            "<span style='font-weight:bold; color:purple;'>My gut tells me</span> something good will happen.",
          translation: "왠지 좋은 일이 일어날 것 같아.",
        },
      ],
    },
  },
  {
    id: "day12",
    content: "I can tell",
    meaning:
      "Used to express that you noticed or understood something without being told directly.",
    meaningInKorean: "직접 듣지 않아도 눈치채거나 알 수 있을 때 사용합니다.",
    literalTranslation: "나는 알 수 있다.",
    sentences: [
      "You’re tired, I can tell.",
      "I can tell you’re upset.",
      "I can tell it’s going to rain.",
    ],
    details: {
      deatilMeaningInKorean:
        "직역하면 '<strong>나는 알 수 있다</strong>'라는 뜻으로,  \
      <strong>표정, 행동, 분위기 등을 보고 알아챌 때</strong> 씁니다. \
      자연스러운 해석으로는 '<strong>티가 나</strong>', '<strong>보이네</strong>'가 있습니다.",
      exampleSentences: [
        {
          sentence:
            "You’re tired, <span style='font-weight:bold; color:purple;'>I can tell.</span>",
          translation: "너 피곤하네, 티 나.",
        },
        {
          sentence:
            "<span style='font-weight:bold; color:purple;'>I can tell</span> you’re upset.",
          translation: "너 화난 거 보이네.",
        },
        {
          sentence:
            "<span style='font-weight:bold; color:purple;'>I can tell</span> it’s going to rain.",
          translation: "비 올 것 같아, 보이네.",
        },
      ],
    },
  },
  {
    id: "day13",
    content: "Pay off",
    meaning: "Used to describe when hard work or effort brings a good result.",
    meaningInKorean: "노력이 결실을 맺을 때 사용합니다.",
    literalTranslation: "값을 치르다.",
    sentences: [
      "All your hard work will pay off.",
      "His training paid off in the final match.",
      "Studying every day really paid off.",
    ],
    details: {
      deatilMeaningInKorean:
        "직역하면 '<strong>값을 치르다</strong>'이지만,  \
      <strong>열심히 한 노력이 좋은 결과를 가져올 때</strong> 사용됩니다. \
      자연스러운 해석으로는 '<strong>노력이 빛을 발하다</strong>', '<strong>결실을 맺다</strong>'가 있습니다.",
      exampleSentences: [
        {
          sentence:
            "All your hard work will <span style='font-weight:bold; color:purple;'>pay off</span>.",
          translation: "네 모든 노력이 빛을 발할 거야.",
        },
        {
          sentence:
            "His training <span style='font-weight:bold; color:purple;'>paid off</span> in the final match.",
          translation: "그의 훈련이 결승전에서 빛을 발했다.",
        },
        {
          sentence:
            "Studying every day really <span style='font-weight:bold; color:purple;'>paid off</span>.",
          translation: "매일 공부한 것이 정말 결실을 맺었어.",
        },
      ],
    },
  },
  {
    id: "day14",
    content: "Sooner than later",
    meaning:
      "Means something will happen relatively quickly or should happen soon.",
    meaningInKorean: "곧, 빠른 시일 내에라는 뜻으로 사용됩니다.",
    literalTranslation: "나중보다 더 빨리.",
    sentences: [
      "We need to fix this sooner than later.",
      "She’ll find out sooner than later.",
      "It’s better to start sooner than later.",
    ],
    details: {
      deatilMeaningInKorean:
        "직역하면 '<strong>나중보다 더 빨리</strong>'라는 뜻으로,  \
      <strong>무언가를 빠른 시일 내에 하거나 곧 일어날 것을 나타냅니다.</strong> \
      자연스러운 해석으로는 '<strong>조만간</strong>', '<strong>빨리</strong>'가 있습니다.",
      exampleSentences: [
        {
          sentence:
            "We need to fix this <span style='font-weight:bold; color:purple;'>sooner than later</span>.",
          translation: "이건 조만간 고쳐야 해.",
        },
        {
          sentence:
            "She’ll find out <span style='font-weight:bold; color:purple;'>sooner than later</span>.",
          translation: "그녀는 곧 알게 될 거야.",
        },
        {
          sentence:
            "It’s better to start <span style='font-weight:bold; color:purple;'>sooner than later</span>.",
          translation: "빨리 시작하는 게 좋아.",
        },
      ],
    },
  },
];
