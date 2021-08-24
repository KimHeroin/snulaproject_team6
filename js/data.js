// 방: 지민의 방, 거실, 마당(수영장), 수영장 속(물 속에 빠짐), 부모님의 방, 부모님의 방(금고 보임)
const scr_List = [
    //default
    {
        scene: 0,
        number: 0,
        s_Loc: "지민의 방",
        s_Name: "지민",
        s_Script: "테디!! 테디!! 나 너무 신나! 오늘 우리 마당에 있는 수영장에서 논대!!",
        s_button: "다음",
        is_Select: 0
    },

    //day4 
    [
        //scene 0
        [
            //number0
            {
                s_Loc: "지민의 방",
                s_Name: "지민",
                s_Script: "테디!! 테디!! 나 너무 신나! 오늘 우리 마당에 있는 수영장에서 논대!!",
                s_button: "다음",
                is_Select: 0
            },
            //number1
            {
                s_Loc: "지민의 방",
                s_Name: "지민",
                s_Script: [
                    "내가 알기로는 수영장에서 놀기 위해서는,,, 수영복! 수경!! 음,, 그리고 선크림! 이런 것들이 필요하다던데!",
                    " 테디도 나 선크림 찾는 것좀 도와줘!"],
                s_button: "거실로 내려가기",
                is_Select: 0
            }
        ],
        //scene 1
        [
            //number 0
            {
                s_Loc: "거실",
                s_Name: "",
                s_Script: "지민이가 선크림 어디있냐고 물어보는데요! 수영해야해서 필요하대요!",
                s_button: "다음",
                is_Select: 0
            },
            //number 1
            {
                s_Loc: "거실",
                s_Name: "엄마",
                s_Script: "지민이는 선크림이 필요없을텐데.. 안발라도 된다고 전해주겠니?",
                s_button: "다음",
                is_Select: 0
            },
            //number 2
            {
                s_Loc: "거실",
                s_Name: "엄마",
                s_Script: "그리고 지민이는 물에 들어가면 안된단다..",
                s_button: "다음",
                is_Select: 0
            },
            //number 3
            {
                s_Loc: "거실",
                s_Name: "",
                s_Script: "네??왜요?? 그리고 선크림은 왜요???이 피부는 연약해서 꼭 필요한 거 아닌가요?!",
                s_button: "다음",
                is_Select: 0
            },
            //number 4
            {
                s_Loc: "거실",
                s_Name: "엄마",
                s_Script: "음 그렇지… 그래도.. 방.. 되니까 상관 없겠지.. 너무 많이 바르지 말라고 전해주렴!",
                s_button: "다음",
                is_Select: 0
            },
            //number 5
            {
                s_Loc: "거실",
                s_Name: "",
                s_Script: "선크림을 얻었다!",
                s_button: "지민의 방으로 가기",
                is_Select: 0
            }
        ],
        //scene 2
        [
            //number 0
            {
                s_Loc: "지민의 방",
                s_Name: "지민",
                s_Script: "어 테디 왔어? 선크림 가져왔구나!! 고마워!!",
                s_button: "다음",
                is_Select: 0
            },
            {
                s_Loc: "지민의 방",
                s_Name: "",
                s_Script: "지금까지 선크림을 한번도 안발라본거야?",
                s_button: "다음",
                is_Select: 0
            },
            {
                s_Loc: "지민의 방",
                s_Name: "지민",
                s_Script: "응 엄마가 안발라도 된다고 하셨는데, 실외에서 수영할 떈 필수라고 해서!!",
                s_button: "다음",
                is_Select: 0
            },
            {
                s_Loc: "지민의 방",
                s_Name: "지민",
                s_Script: "어쨌든! 첫 수영이니까 신난다! 난 준비하러 갈게!",
                s_button: "다음",
                is_Select: 0
            }
        ],
        //scene 3
        [
            {
            s_Loc: "지민의 방",
            s_Name: "지민",
            s_Script: "아버지가 방문을 세개 닫고 나간다.",
            s_button: "다음",
            is_Select: 0
            },
            {
                s_Loc: "지민의 방",
                s_Name: "",
                s_Script: "",
                s_button: "다음",
                is_Select: 1
            },
            {
                s_Loc: "지민의 방",
                s_Name: "지민",
                s_Script: "",
                s_button: "다음",
                is_Select: 0
            },
            {
                s_Loc: "지민의 방",
                s_Name: "지민",
                s_Script: "오늘도 정신 없는 하루였네.. 유난히 피곤한 것 같아.. 먼저 잘게 테디..",
                s_button: "다음",
                is_Select: 0
            },
            {
                s_Loc: "지민의 방",
                s_Name: "",
                s_Script: "잘자",
                s_button: "다음",
                is_Select: 0
            },
            {
                s_Loc: "지민의 방",
                s_Name: "",
                s_Script: ["그때 지민이한테서 들린 소리는 내 머릿속에서 울린 소리랑 같았어..!",
                "정말 지민의 부모님은 뭔가 알고 있지 않을까?"],
                s_button: "부모님 방으로 가기",
                is_Select: 0
            },

        ],
        [
            {
                s_Loc: "부모님 방",
                s_Name: "",
                s_Script: "금고.. 금고를 찾아봐야겠다..! 비밀번호가 뭘까",
                s_button: "다음",
                is_Select: 0
            },
        ]

    ]
]


const qna_List = [
    {
        Quest: [
        "구해줘서 고마워.. 그래도 다음부턴 나때문에 혼나지 말고 아버지 말씀을 잘 듣자..",
        "저 늙은이는 또 왜그래? 너도 죽을 뻔 했는데! 그런데 너는 왜 물에 들어가면 안되는 거야?",
        "지민 너 혹시 인간이 아니야?"
        ],
        Answer: [
        "고마워 테디, 아빠 말씀대로 난 형이니까 지섭을 지킬게!",
        "그러게.. 나도 궁금해. 혹시 엄마에게 여쭤보면 알 수 있을지도 몰라!",
        "무슨소리야 테디!! 나는 인간인걸! 장난치지마 ㅎㅎ"
        ]
    }
]