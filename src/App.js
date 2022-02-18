import React, { useState, useEffect } from "react";
import Data from "./Data";
import Header from "./components/Header/Header";
import AddNewNote from "./components/AddNewNote";
import Main from "./components/Main/Main";
import GroupHighlights from "./components/GroupHighlights/GroupHighlights";
import { DragDropContext } from "react-beautiful-dnd";
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

const App = () => {
    const [notes, setNotes] = useState(() => Data);
    const [isNewNote, setIsNewNote] = useState(false);
    const [isGroupHighlight, setIsGroupHighlight] = useState(false);

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

    const handleNewNoteClick = () => {
        setIsNewNote((prevIsNewNote) => !prevIsNewNote);
    };

    const handleGroupHighlightClick = () => {
        setIsGroupHighlight((prevIsGroupHighlight) => !prevIsGroupHighlight);
    };

    const handleNewNoteSubmit = (newNoteData) => {
        const newNote = {
            ...newNoteData,
            id: nanoid(),
            color: getRandomColor(),
        };
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    };

    const handleDelete = (id) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    };

    const handleEditNoteClick = (id, data) => {
        setNotes((prevNotes) =>
            prevNotes.map((prevNote) => {
                return prevNote.id === id ? { ...prevNote, ...data } : prevNote;
            })
        );
    };

    let stage = (
        <Main
            notes={notes}
            onDelete={handleDelete}
            onEdit={handleEditNoteClick}
        />
    );

    if (isGroupHighlight) {
        stage = (
            <GroupHighlights
                notes={notes}
                onDelete={handleDelete}
                onEdit={handleEditNoteClick}
            />
        );
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId === destination.droppableId) {
            setNotes((prevNotes) => {
                const items = Array.from(prevNotes);
                const [reorderedItem] = items.splice(result.source.index, 1);
                items.splice(result.destination.index, 0, reorderedItem);
                return items;
            });
        } else {
            setNotes((prevNotes) =>
                prevNotes.map((prevNote) => {
                    return prevNote.id === result.draggableId
                        ? { ...prevNote, group: destination.droppableId }
                        : prevNote;
                })
            );
        }
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Header
                onNewNoteClick={handleNewNoteClick}
                onGroupHighlightClick={handleGroupHighlightClick}
            />
            {isNewNote && (
                <AddNewNote
                    onCancel={handleNewNoteClick}
                    onSubmit={handleNewNoteSubmit}
                />
            )}
            {stage}
        </DragDropContext>
    );
};

export default App;
