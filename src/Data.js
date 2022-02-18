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

const data = [
    {
        id: nanoid(),
        name: "Raj",
        group: "Service",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Alice",
        group: "Risk",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Bob",
        group: "",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Tushar",
        group: "",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Mohit",
        group: "Priority",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Rohit",
        group: "Priority",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Ayaan",
        group: "Priority",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Aadesh",
        group: "Priority",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Saniya",
        group: "Risk",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Anushka",
        group: "Risk",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Jennifer",
        group: "Risk",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Natalie",
        group: "",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "John",
        group: "",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Samuel",
        group: "",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Jasmine",
        group: "",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Patricia",
        group: "Service",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Michael",
        group: "Service",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
    {
        id: nanoid(),
        name: "Elijah",
        group: "Service",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ex impedit modi sint, optio dolores officiis delectus iste quae cum reiciendis eveniet consequatur deserunt nulla? Modi est ipsa quis.",
        color: getRandomColor(),
    },
];

export default data;
