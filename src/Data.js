import { nanoid } from "nanoid";

const colors = [
    "teal",
    "mediumaquamarine",
    "lightcoral",
    "lightskyblue",
    "palevioletred",
    "peru",
    "lightgoldenrodyellow",
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const data = {
    notes: [
        {
            id: nanoid(),
            name: "Raj",
            title: "homework",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
            color: getRandomColor(),
        },
        {
            id: nanoid(),
            name: "Alice",
            title: "Assignment",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
            color: getRandomColor(),
        },
        {
            id: nanoid(),
            name: "Bob",
            title: "",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
            color: getRandomColor(),
        },
        {
            id: nanoid(),
            name: "Tushar",
            title: "",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
            color: getRandomColor(),
        },
        {
            id: nanoid(),
            name: "Mohit",
            title: "Important",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
            color: getRandomColor(),
        },
        {
            id: nanoid(),
            name: "Rohit",
            title: "Contest",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
            color: getRandomColor(),
        },
        {
            id: nanoid(),
            name: "Ayaan",
            title: "exams",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
            color: getRandomColor(),
        },
        {
            id: nanoid(),
            name: "Aadesh",
            title: "investment",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
            color: getRandomColor(),
        },
        {
            id: nanoid(),
            name: "Saniya",
            title: "service",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
            color: getRandomColor(),
        },
        {
            id: nanoid(),
            name: "Anushka",
            title: "development",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
            color: getRandomColor(),
        },
    ],
};

export default data;
