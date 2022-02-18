import React, { useState, useEffect } from "react";
import Data from "./Data";
import Header from "./components/Header/Header";
import AddNewNote from "./components/AddNewNote";
import Main from "./components/Main/Main";
import GroupHighlights from "./components/GroupHighlights/GroupHighlights";
import { DragDropContext } from "react-beautiful-dnd";
import { SelectableGroup } from "react-selectable";
import { nanoid } from "nanoid";
import AddNewGroup from "./components/AddNewGroup/AddNewGroup";

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
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isGroupHighlight, setIsGroupHighlight] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [ok, setOk] = useState(true);

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

    const handleSelection = (keys) => {
        setSelectedKeys(keys);
    };

    const handleSelectBegin = (event) => {
        if (event.target.id !== "main") {
            setOk(false);
        } else {
            setOk(true);
        }
    };

    let stage = (
        <SelectableGroup
            onSelection={handleSelection}
            onEndSelection={() => setIsNewGroup(true)}
            onBeginSelection={handleSelectBegin}
            enabled={ok}
        >
            <Main
                id="main"
                notes={notes}
                onDelete={handleDelete}
                onEdit={handleEditNoteClick}
                selectedKeys={selectedKeys}
            />
        </SelectableGroup>
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

    const handleNewGroupSubmit = (groupName) => {
        setNotes((prevNotes) =>
            prevNotes.map((prevNote) => {
                let note = prevNote;
                if (selectedKeys.indexOf(prevNote.id) > -1) {
                    note.group = groupName;
                }
                return note;
            })
        );
        setIsNewGroup(false);
        setOk(true);
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Header
                onNewNoteClick={handleNewNoteClick}
                onGroupHighlightClick={handleGroupHighlightClick}
            />
            {isNewGroup && (
                <AddNewGroup
                    onCancel={() => setIsNewGroup(false)}
                    onSubmit={handleNewGroupSubmit}
                />
            )}
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
