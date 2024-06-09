 import { QuizDataArray, TypeQuestions } from "./typesData/dataQuizType"
 
 export const quizData : QuizDataArray = [
    {
        id: 1,
        type: TypeQuestions.SingleOption,
        question: "Столицей Турции является город:",
        options: ["Анталия", "Анкара", "Стамбул", "Измир"],
        rightAnswer: ["Анкара"],
    },
    {
        id: 2,
        type: TypeQuestions.SingleOption,
        question: "Столицей Новой Зеландии является город:",
        options: ["Веллингтон", "Хобарт", "Папеэте", "Порт-Вила"],
        rightAnswer: ["Веллингтон"],
    },
    {
        id: 3,
        type: TypeQuestions.SingleOption,
        question: "Столицей Казахстана является город:",
        options: ["Алматы", "Караганда", "Астана", "Жезказган"],
        rightAnswer: ["Астана"],
    },
    {
        id: 4,
        type: TypeQuestions.SingleOption,
        question: "Столицей ОАЭ является город:",
        options: ["Абу-Даби", "Дубай", "Шарджа", "Оман"],
        rightAnswer: ["Абу-Даби"],
    },
    {
        id: 5,
        type: TypeQuestions.SingleOption,
        question: "Столицей Нигерии является город:",
        options: ["Абуджа", "Лагос", "Ниамей", "Яунде"],
        rightAnswer: ["Абуджа"]
    },
    {
        id: 6,
        type: TypeQuestions.SingleOption,
        question: "Столицей Австралии является город:",
        options: ["Мельбурн", "Сидней", "Канберра", "Дарвин"],
        rightAnswer: ["Канберра"],
    },
    {
        id: 7,
        type: TypeQuestions.SingleOption,
        question: "Столицей Мексики является город:",
        options: ["Акапулько", "Мехико", "Гуадалахара", "Веракрус"],
        rightAnswer: ["Мехико"],
    },
    {
        id: 8,
        type: TypeQuestions.SingleOption,
        question: "Столицей Кипра является город:",
        options: ["Ларнака", "Никосия", "Лимасол", "Пафос"],
        rightAnswer: ["Никосия"],
    },
    {
        id: 9,
        type: TypeQuestions.SingleOption,
        question:"Административной столицей ЮАР является город:",
        options: ["Йоханнесбург", "Кейптаун", "Претория", "Дурбан"],
        rightAnswer: ["Претория"],
    },
    {
        id: 10,
        type: TypeQuestions.SingleOption,
        question: "Столицей Багамских островов является город:",
        options: ["Кингстон", "Каракас", "Нассау", "Фрипорт"],
        rightAnswer: ["Нассау"], 
    },
    {
        id: 11,
        type: TypeQuestions.MultipleOptions,
        question: "Какие города входят в состав Алжира? ",
        additionalText: "Выберите несколько вариантов ответа.",
        options: ["Пафос", "Дурбан", "Алжир", "Каир"],
        rightAnswer: ["Алжир", "Каир"]
    },
    {
        id: 12,
        type: TypeQuestions.MultipleOptions,
        question: "Какие города входят в Штат Техас США? ",
        additionalText: "Выберите несколько вариантов ответа.",
        options: ["Хьюстон", "Вашингтон", "Даллас", "Нью-Йорк"],
        rightAnswer: ["Хьюстон", "Даллас"]
    },
    {
        id: 13,
        type: TypeQuestions.ShortAnswer,
        question: "Какой самый крупный по населению город в Израиле? ",
        additionalText: "Напишете ответ",
        rightAnswer: ["Иерусалим"],
    },
    {
        id: 14,
        type: TypeQuestions.ShortAnswer,
        question: "Какое было прошлое название города Стамбул? ",
        additionalText: "Напишите ответ",
        rightAnswer: ["Константинополь"],
    },
    {
        id: 15,
        type: TypeQuestions.LongAnswer,
        question: "Объясните своими словами значение термина «столица» ",
        additionalText: "Напишите ответ",
        rightAnswer: [""]
    },
]