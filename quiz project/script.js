const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Makeup Language",
        d: "Hyper Text Markup Language",
        ans: "ans4"
    },

    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Makeup Language",
        d: "Hyper Text Markup Language",
        ans: "ans1"
    },

    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Makeup Language",
        d: "Hyper Text Markup Language",
        ans: "ans4"
    },

    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Makeup Language",
        d: "Hyper Text Markup Language",
        ans: "ans3"
    },

    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Makeup Language",
        d: "Hyper Text Markup Language",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector("option-1");
const option2 = document.querySelector("option-2");
const option3 = document.querySelector("option-3");
const option4 = document.querySelector("option-4");
const submit = document.querySelector('.submit');


let questionCount = 0;
const loadQuestion = () => {
    const questionlist = quizDB[questionCount];

    question.innerText = questionlist.question;

    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;
    option3.innerText = questionlist.c;
    option4.innerText = questionlist.d;
}
loadQuestion();