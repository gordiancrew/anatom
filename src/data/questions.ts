import { CheckAnswer } from "../types.ts/chaeckAnswer";



export const dataQuestionRu = [

    [
        {
            ask: "Что за кость выделена голубым цветом?",
            ans: [
                {
                    content: "лобная",
                    check: CheckAnswer.right
                },
                {
                    content: "затылочная",
                    check: CheckAnswer.second
                },
                {
                    content: "игровая",
                    check: CheckAnswer.falsy
                },
                {
                    content: "горловая",
                    check: CheckAnswer.falsy
                }

            ],
            path: "https://lh3.google.com/u/0/d/1YpXfTQEXx31BL-9Ypz1L-wqwoSJ7Q-IK=w2000-h3948-iv1"

        }
    ],
    [
        {
            ask: "Что за мышца выделена синим цветом?",
            ans: [
                {
                    content: "Большая ягодичная",
                    check: CheckAnswer.right
                },
                {
                    content: "Малая ягодичная",
                    check: CheckAnswer.second
                },
                {
                    content: "Плечевая",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Прямая мышца живота",
                    check: CheckAnswer.falsy
                }

            ],
            path: "https://lh3.google.com/u/0/d/1Z5ij12nOQLZkEyk9aE4bBi2torynEJBE=w943-h858-iv1"

        }
    ],
   
]