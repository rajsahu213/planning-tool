import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Data from "./Data";
import Card from "./components/Card";
import Form from "./components/Form";
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

function App() {
    const [notes, setNotes] = useState(() => Data);
    const [formData, setFormData] = useState();

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem("react-notes-app-data")
        );

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    }, [notes]);

    const handleEdit = (id) => {
        const [currNote] = notes.filter((note) => note.id === id);
        setFormData(currNote);
    };

    const whiteBoardContent = notes.map((note) => {
        return <Card key={note.id} data={note} onEdit={handleEdit} />;
    });

    const handleNewNoteData = (data) => {
        if (data.id) {
            setNotes((prevNotes) =>
                prevNotes.map((prevNote) => {
                    return prevNote.id === data.id
                        ? {
                              ...data,
                          }
                        : prevNote;
                })
            );
        } else {
            setNotes((prevNotes) => {
                return [
                    ...prevNotes,
                    {
                        ...data,
                        id: nanoid(),
                        color: getRandomColor(),
                        groupId: "",
                    },
                ];
            });
        }
    };

    const handleNewNoteClick = () => {
        setFormData({ name: "", title: "", text: "" });
    };

    return (
        <div>
            <button
                className={styles["create-new-note"]}
                onClick={handleNewNoteClick}
            >
                New Note
            </button>
            {formData && (
                <Form
                    formData={formData}
                    type={formData.id ? "Edit Note" : "New Note"}
                    getFormData={handleNewNoteData}
                    onCancel={() => setFormData()}
                />
            )}
            <div className={styles["white-board"]}>{whiteBoardContent}</div>
        </div>
    );
}

export default App;
