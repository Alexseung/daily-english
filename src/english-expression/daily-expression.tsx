type ExampleSentence = {
  sentence: string;
  translation: string;
};

type Content = {
  id: string;
  content: string;
  meaning: string;
  sentences: string[];
  details: {
    meaningInKorean: string;
    exampleSentences: ExampleSentence[];
  };
};

export const contents: Content[] = [
  {
    id: "day1",
    content: "It's not rocket science",
    meaning: "When something is not difficult to understand or do.",
    sentences: [
      "You can just use that remote, it's not rocket science.",
      "It's not rocket science. Why don't you just try it?",
      "Don't worry, it's not rocket science. You can figure it out.",
    ],
    details: {
      meaningInKorean:
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
    sentences: [
      "It could be true, we don’t know yet.",
      "That could be the reason why she left.",
      "It could be dangerous if we’re not careful.",
    ],
    details: {
      meaningInKorean:
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
    sentences: [
      "That name rings a bell, but I can’t recall where we met.",
      "Your story rings a bell, I think I heard it before.",
      "Her face rings a bell, have we seen her before?",
    ],
    details: {
      meaningInKorean:
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
    sentences: [
      "Where do you want to eat? I'm easy, you choose.",
      "I'm easy, anything works for me.",
      "I'm easy, just tell me where to go.",
    ],
    details: {
      meaningInKorean:
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
    sentences: [
      "You don’t want to go out because you’re tired? Fair enough.",
      "Fair enough, I understand your point.",
      "You think it's too risky? Fair enough, let's not do it.",
    ],
    details: {
      meaningInKorean:
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
    sentences: [
      "Thanks for helping me out! Don't mention it.",
      "Don't mention it, it was no trouble at all.",
      "You saved me today! Don't mention it.",
    ],
    details: {
      meaningInKorean:
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
];
