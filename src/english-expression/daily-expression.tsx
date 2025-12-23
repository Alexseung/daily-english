type ExampleSentence = {
  sentence: string;
  translation: string;
};

type Content = {
  id: string;
  content: string;
  meaning: string;
  englishInKorean: string;
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
    content: "It's in full swing",
    meaning: "Something is happening very actively or at its peak.",
    meaningInKorean: "어떤 일이 한창 진행 중이거나 가장 활발한 상태라는 뜻.",
    englishInKorean: "한창이다",
    sentences: [
      "The festival is in full swing.",
      "The project is in full swing now.",
    ],
    details: {
      deatilMeaningInKorean:
        "어떤 일이 이미 시작되었고, \
<strong>가장 활발하게 진행 중일 때</strong> 사용하는 표현입니다. \
행사, 시즌, 프로젝트, 분위기 등에 자주 쓰이며 \
한국어로는 '<strong>한창이다</strong>'가 가장 자연스럽습니다.",
      exampleSentences: [
        {
          sentence:
            'The festival is <span style="font-weight:bold; color:purple;">in full swing</span>.',
          translation: "축제가 한창이다.",
        },
        {
          sentence:
            'The project is <span style="font-weight:bold; color:purple;">in full swing</span> now.',
          translation: "그 프로젝트는 지금 한창 진행 중이다.",
        },
      ],
    },
  },
  {
    id: "day2",
    content: "It rings a bell",
    meaning: "Something sounds familiar.",
    meaningInKorean: "어디선가 들어본 것 같을 때 쓰는 표현.",
    englishInKorean: "어? 나 그거 아는데 / 들어본거 같은데",
    sentences: ["That name rings a bell.", "This story rings a bell."],
    details: {
      deatilMeaningInKorean:
        "정확히 기억나지는 않지만 \
<strong>익숙하게 느껴질 때</strong> 사용하는 표현입니다. \
사람 이름, 장소, 이야기 등에 자주 쓰이며 \
한국어로는 '<strong>어디서 들어본 것 같아</strong>'가 자연스럽습니다.",
      exampleSentences: [
        {
          sentence:
            'That name <span style="font-weight:bold; color:purple;">rings a bell</span>.',
          translation: "그 이름 어디서 들어본 것 같아.",
        },
        {
          sentence:
            'This story <span style="font-weight:bold; color:purple;">rings a bell</span>.',
          translation: "이 이야기 왠지 익숙해.",
        },
      ],
    },
  },
  {
    id: "day3",
    content: "It depends",
    meaning:
      "Used to say that the answer is different according to the situation.",
    meaningInKorean: "상황에 따라 달라질 수 있다는 뜻.",
    englishInKorean: "상황에 따라 달라 / 다 다르지",
    sentences: [
      "A: Do you like spicy food? B: It depends.",
      "It depends on how much time we have.",
    ],
    details: {
      deatilMeaningInKorean:
        "질문에 대해 단정적인 답을 하기 어렵고, \
<strong>조건이나 상황에 따라 달라질 때</strong> 사용하는 표현입니다. \
일상 회화에서 매우 자주 쓰이며 \
한국어로는 '<strong>상황에 따라 달라</strong>'가 가장 자연스럽습니다. \
무언가에 달려있다, 무언가에 따라 다르다는 의미의 '<strong>depend on ~</strong>' 구문과 함께 자주 사용됩니다.",
      exampleSentences: [
        {
          sentence:
            'It <span style="font-weight:bold; color:purple;">depends</span> on the weather.',
          translation: "날씨에 따라 달라.",
        },
        {
          sentence:
            'It <span style="font-weight:bold; color:purple;">depends</span> on how much time we have.',
          translation: "시간이 얼마나 있느냐에 따라 달라.",
        },
      ],
    },
  },
  {
    id: "day4",
    content: "I'm sick of it",
    meaning: "Used to say you are very annoyed or tired of something.",
    meaningInKorean: "무언가에 질리거나 지쳤을 때 쓰는 표현.",
    englishInKorean: "이제 지긋지긋해",
    sentences: [
      "I'm sick of this weather.",
      "I'm sick of explaining the same thing.",
    ],
    details: {
      deatilMeaningInKorean:
        "같은 상황이 반복되거나 참을 만큼 참았을 때 \
<strong>짜증이나 피로감을 강하게 표현</strong>하는 말입니다. \
사람, 일, 상황 모두에 쓸 수 있으며 \
한국어로는 '<strong>이제 질렸어 / 지긋지긋해</strong>'가 자연스럽습니다.",
      exampleSentences: [
        {
          sentence:
            'I am <span style="font-weight:bold; color:purple;">sick of it</span>.',
          translation: "나 이제 진짜 지긋지긋해.",
        },
        {
          sentence:
            'She is <span style="font-weight:bold; color:purple;">sick of</span> waiting.',
          translation: "그녀는 기다리는 것에 질렸다.",
        },
      ],
    },
  },
  {
    id: "day5",
    content: "It's worth -ing",
    meaning: "Something deserves the time or effort.",
    meaningInKorean: "시간이나 노력을 들일 가치가 있다는 뜻.",
    englishInKorean: "~할 가치가 있어",
    sentences: ["It's worth trying.", "This movie is worth watching."],
    details: {
      deatilMeaningInKorean:
        "어떤 행동이나 선택이 \
<strong>노력할 만한 가치가 있을 때</strong> 사용하는 표현입니다. \
'<strong>worth + 동사 ing</strong>' 형태로 자주 쓰입니다.",
      exampleSentences: [
        {
          sentence:
            'It is <span style="font-weight:bold; color:purple;">worth trying</span>.',
          translation: "한번 해볼 가치는 있어.",
        },
        {
          sentence:
            'This book is <span style="font-weight:bold; color:purple;">worth reading</span>.',
          translation: "이 책은 읽을 가치가 있어.",
        },
      ],
    },
  },
  {
    id: "day6",
    content: "Is it a bad time?",
    meaning: "Used to ask politely if now is not a good moment.",
    meaningInKorean: "지금이 적절한 타이밍인지 조심스럽게 물을 때.",
    englishInKorean: "지금 타이밍 안 좋아?",
    sentences: ["Is it a bad time to call you?", "Is it a bad time to talk?"],
    details: {
      deatilMeaningInKorean:
        "상대방을 배려하면서 \
<strong>말을 꺼내기 전에 타이밍을 확인</strong>할 때 쓰는 표현입니다. \
비즈니스나 일상 회화 모두에서 자주 사용됩니다.",
      exampleSentences: [
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">Is it a bad time</span> to ask you something?',
          translation: "지금 질문해도 괜찮을까?",
        },
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">Is it a bad time</span>?',
          translation: "지금 괜찮아?",
        },
      ],
    },
  },
  {
    id: "day7",
    content: "It's out of my league",
    meaning: "Something is too difficult or too good for me.",
    meaningInKorean: "내 수준을 넘는다는 뜻.",
    englishInKorean: "내 급은 아니야 / 나한텐 너무 벅차",
    sentences: ["That job is out of my league.", "She's way out of my league."],
    details: {
      deatilMeaningInKorean:
        "능력, 실력, 수준 면에서 \
<strong>나보다 한참 위라고 느낄 때</strong> 사용하는 표현입니다.",
      exampleSentences: [
        {
          sentence:
            'That position is <span style="font-weight:bold; color:purple;">out of my league</span>.',
          translation: "그 자리는 내 수준이 아니야.",
        },
        {
          sentence:
            'This problem is <span style="font-weight:bold; color:purple;">out of my league</span>.',
          translation: "이 문제는 나한테 너무 어렵다.",
        },
      ],
    },
  },
  {
    id: "day8",
    content: "I'm not in the mood",
    meaning: "You don’t feel like doing something.",
    meaningInKorean: "하고 싶은 기분이 아닐 때 쓰는 표현.",
    englishInKorean: "지금 그럴 기분 아니야",
    sentences: [
      "I'm not in the mood to talk.",
      "I'm not in the mood for jokes.",
    ],
    details: {
      deatilMeaningInKorean:
        "컨디션이나 감정 상태 때문에 \
<strong>무언가를 하고 싶지 않을 때</strong> 쓰는 자연스러운 표현입니다.",
      exampleSentences: [
        {
          sentence:
            'I am <span style="font-weight:bold; color:purple;">not in the mood</span> to go out.',
          translation: "나 지금 나갈 기분 아니야.",
        },
        {
          sentence:
            'He is <span style="font-weight:bold; color:purple;">not in the mood</span> for small talk.',
          translation: "그는 잡담할 기분이 아니다.",
        },
      ],
    },
  },
  {
    id: "day9",
    content: "Let's call it a day",
    meaning: "Used to say we should stop working for now.",
    meaningInKorean: "오늘은 여기까지 하자는 뜻.",
    englishInKorean: "오늘은 이쯤 하자",
    sentences: ["Let's call it a day.", "I'm tired. Let's call it a day."],
    details: {
      deatilMeaningInKorean:
        "일이나 작업을 \
<strong>적당한 시점에서 마무리하자</strong>고 할 때 쓰는 표현입니다.",
      exampleSentences: [
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">Let’s call it a day</span>.',
          translation: "오늘은 여기까지 하자.",
        },
        {
          sentence:
            'It’s late, so <span style="font-weight:bold; color:purple;">let’s call it a day</span>.',
          translation: "늦었으니 오늘은 마무리하자.",
        },
      ],
    },
  },
  {
    id: "day10",
    content: "Deep down",
    meaning: "In your true feelings or thoughts.",
    meaningInKorean: "마음속 깊은 곳에서는.",
    englishInKorean: "속으로는 / 마음속으로는",
    sentences: [
      "Deep down, I really want it.",
      "Deep down, she knows the truth.",
    ],
    details: {
      deatilMeaningInKorean:
        "겉으로는 드러내지 않지만 \
<strong>진짜 마음이나 본심</strong>을 말할 때 사용하는 표현입니다.",
      exampleSentences: [
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">Deep down</span>, I miss him.',
          translation: "속으로는 그가 그립다.",
        },
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">Deep down</span>, she agrees.',
          translation: "마음속으로는 그녀도 동의한다.",
        },
      ],
    },
  },
  {
    id: "day11",
    content: "Let's cut to the chase",
    meaning: "Used to get to the main point quickly.",
    meaningInKorean: "핵심만 말하자는 뜻.",
    englishInKorean: "본론으로 들어가자",
    sentences: [
      "Let's cut to the chase.",
      "Let's cut to the chase and be honest.",
    ],
    details: {
      deatilMeaningInKorean:
        "쓸데없는 설명을 줄이고 \
<strong>중요한 얘기만 바로 하고 싶을 때</strong> 사용하는 표현입니다.",
      exampleSentences: [
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">Let’s cut to the chase</span>.',
          translation: "본론부터 말하자.",
        },
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">Cut to the chase</span> and tell me the truth.',
          translation: "핵심만 말해줘.",
        },
      ],
    },
  },
  {
    id: "day12",
    content: "Face the music",
    meaning: "To accept the unpleasant consequences.",
    meaningInKorean: "현실이나 결과를 받아들이다.",
    englishInKorean: "현실을 직면하다",
    sentences: ["He has to face the music.", "It's time to face the music."],
    details: {
      deatilMeaningInKorean:
        "피할 수 없는 상황이나 \
<strong>책임과 결과를 받아들일 때</strong> 쓰는 표현입니다.",
      exampleSentences: [
        {
          sentence:
            'It’s time to <span style="font-weight:bold; color:purple;">face the music</span>.',
          translation: "이제 현실을 받아들일 때다.",
        },
        {
          sentence:
            'She had to <span style="font-weight:bold; color:purple;">face the music</span>.',
          translation: "그녀는 결과를 감당해야 했다.",
        },
      ],
    },
  },
  {
    id: "day13",
    content: "From scratch",
    meaning: "From the very beginning.",
    meaningInKorean: "처음부터 전부.",
    englishInKorean: "맨 처음부터",
    sentences: ["I built it from scratch.", "We had to start from scratch."],
    details: {
      deatilMeaningInKorean:
        "기존에 준비된 것 없이 \
<strong>완전히 처음부터 시작할 때</strong> 사용하는 표현입니다.",
      exampleSentences: [
        {
          sentence:
            'He learned coding <span style="font-weight:bold; color:purple;">from scratch</span>.',
          translation: "그는 코딩을 처음부터 배웠다.",
        },
        {
          sentence:
            'We rebuilt everything <span style="font-weight:bold; color:purple;">from scratch</span>.',
          translation: "우리는 모든 걸 처음부터 다시 만들었다.",
        },
      ],
    },
  },
  {
    id: "day14",
    content: "I'm on the fence",
    meaning: "Used to say you haven't decided yet.",
    meaningInKorean: "아직 결정을 못 내린 상태라는 뜻.",
    englishInKorean: "아직 고민 중이야",
    sentences: ["I'm on the fence about it.", "I'm still on the fence."],
    details: {
      deatilMeaningInKorean:
        "찬성과 반대, 선택지 사이에서 \
<strong>마음을 정하지 못했을 때</strong> 사용하는 표현입니다. \
결정이 필요한 상황에서 매우 자주 쓰입니다.",
      exampleSentences: [
        {
          sentence:
            'I am <span style="font-weight:bold; color:purple;">on the fence</span> about this plan.',
          translation: "이 계획에 대해 아직 고민 중이야.",
        },
        {
          sentence:
            'She is <span style="font-weight:bold; color:purple;">on the fence</span>.',
          translation: "그녀는 아직 결정을 못 했다.",
        },
      ],
    },
  },
  {
    id: "day15",
    content: "I will give you that",
    meaning: "Used to admit that someone is right about one point.",
    meaningInKorean: "상대의 말 일부를 인정할 때 쓰는 표현.",
    englishInKorean: "그건 인정할게",
    sentences: ["I will give you that.", "I will give you that point."],
    details: {
      deatilMeaningInKorean:
        "전부 동의하지는 않지만 \
<strong>일부는 맞다고 인정할 때</strong> 사용하는 표현입니다. \
토론이나 의견 차이가 있을 때 자주 쓰입니다.",
      exampleSentences: [
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">I’ll give you that</span>, it was well done.',
          translation: "그건 인정할게, 잘하긴 했어.",
        },
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">I’ll give you that</span>, you tried your best.',
          translation: "그건 인정해, 최선을 다했네.",
        },
      ],
    },
  },
  {
    id: "day16",
    content: "Go with the flow",
    meaning: "To accept things as they happen.",
    meaningInKorean: "상황에 맡기고 흘러가는 대로 하다.",
    englishInKorean: "되는 대로 가자",
    sentences: ["Let's just go with the flow.", "I usually go with the flow."],
    details: {
      deatilMeaningInKorean:
        "계획을 세세하게 정하기보다는 \
<strong>상황에 맞춰 유연하게 행동</strong>할 때 쓰는 표현입니다.",
      exampleSentences: [
        {
          sentence:
            'Let’s <span style="font-weight:bold; color:purple;">go with the flow</span>.',
          translation: "그냥 되는 대로 가자.",
        },
        {
          sentence:
            'He prefers to <span style="font-weight:bold; color:purple;">go with the flow</span>.',
          translation: "그는 상황에 맡기는 편이다.",
        },
      ],
    },
  },
  {
    id: "day17",
    content: "Have an eye for",
    meaning: "To be good at noticing or judging something.",
    meaningInKorean: "보는 눈이 있다.",
    englishInKorean: "~에 대한 안목이 있다",
    sentences: ["She has an eye for design.", "He has an eye for detail."],
    details: {
      deatilMeaningInKorean:
        "디자인, 사람, 디테일 등 \
<strong>특정 분야를 잘 알아보는 능력</strong>이 있을 때 사용하는 표현입니다.",
      exampleSentences: [
        {
          sentence:
            'She <span style="font-weight:bold; color:purple;">has an eye for</span> fashion.',
          translation: "그녀는 패션 감각이 있다.",
        },
        {
          sentence:
            'He <span style="font-weight:bold; color:purple;">has an eye for</span> talent.',
          translation: "그는 사람 보는 눈이 있다.",
        },
      ],
    },
  },
  {
    id: "day18",
    content: "I bet",
    meaning: "Used to say you are sure something is true.",
    meaningInKorean: "강한 추측이나 확신을 나타낼 때.",
    englishInKorean: "그럴 것 같아 / 분명히 그래",
    sentences: ["I bet he's busy.", "I bet you’re tired."],
    details: {
      deatilMeaningInKorean:
        "상대 말에 공감하거나 \
<strong>확신에 가까운 추측</strong>을 할 때 사용하는 표현입니다. \
회화에서 매우 자주 쓰입니다.",
      exampleSentences: [
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">I bet</span> it was expensive.',
          translation: "비쌌을 것 같아.",
        },
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">I bet</span> you didn’t expect that.',
          translation: "그건 예상 못 했지?",
        },
      ],
    },
  },
  {
    id: "day19",
    content: "No wonder",
    meaning: "Used to say something is not surprising.",
    meaningInKorean: "그래서 그렇구나 / 놀랍지 않다.",
    englishInKorean: "어쩐지 / 그럴 만도 하지",
    sentences: ["No wonder you're tired.", "No wonder he’s upset."],
    details: {
      deatilMeaningInKorean:
        "이유를 알고 나서 \
<strong>결과가 당연하게 느껴질 때</strong> 사용하는 표현입니다.",
      exampleSentences: [
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">No wonder</span> she was late.',
          translation: "그래서 그녀가 늦은 거구나.",
        },
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">No wonder</span> you like it.',
          translation: "어쩐지 네가 좋아하더라.",
        },
      ],
    },
  },
  {
    id: "day20",
    content: "It is a good thing",
    meaning: "Used to say something is fortunate or positive.",
    meaningInKorean: "다행이거나 좋은 일이라는 뜻.",
    englishInKorean: "다행이다 / 좋은 일이다",
    sentences: [
      "It is a good thing we left early.",
      "It is a good thing you called.",
    ],
    details: {
      deatilMeaningInKorean:
        "상황을 돌아봤을 때 \
<strong>결과가 긍정적이어서 안도할 때</strong> 사용하는 표현입니다.",
      exampleSentences: [
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">It’s a good thing</span> we checked.',
          translation: "확인해서 다행이야.",
        },
        {
          sentence:
            '<span style="font-weight:bold; color:purple;">It’s a good thing</span> you reminded me.',
          translation: "네가 알려줘서 다행이다.",
        },
      ],
    },
  },
];
