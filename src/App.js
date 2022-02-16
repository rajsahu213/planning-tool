import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "./App.module.css";
import Data from "./Data";
import Card from "./components/Card";
import Form from "./components/Form";
import { BiNote } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";
import { nanoid } from "nanoid";
import Group from "./components/Group";

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

    const handleNewNoteData = (data) => {
        if (data.id) {
            setNotes((prevNotes) => {
                const newNotes = {};
                for (let group in prevNotes) {
                    const groupItems = prevNotes[group];
                    const item = groupItems.filter(
                        (groupItem) => groupItem.id === data.id
                    );
                    if (item) {
                        const newGroupItems = groupItems.map((groupItem) => {
                            return groupItem.id === data.id
                                ? { ...data }
                                : groupItem;
                        });
                        newNotes[group] = newGroupItems;
                    } else {
                        newNotes[group] = groupItems;
                    }
                }
                return newNotes;
            });
        } else {
            setNotes((prevNotes) => {
                return {
                    ...prevNotes,
                    notes: [
                        ...prevNotes["notes"],
                        { ...data, id: nanoid(), color: getRandomColor() },
                    ],
                };
            });
        }
    };

    const handleNewNoteClick = () => {
        setFormData({ name: "", title: "", text: "" });
    };

    const handleEdit = (id) => {
        let currNote;
        for (let group in notes) {
            const groupItems = notes[group];
            const item = groupItems.filter((note) => note.id === id);
            if (item.length === 1) {
                currNote = item[0];
            }
        }
        setFormData(currNote);
    };

    const handleDelete = (id) => {
        setNotes((prevNotes) => {
            const newNotes = {};
            for (let group in prevNotes) {
                const newGroupItems = prevNotes[group].filter(
                    (note) => note.id !== id
                );
                newNotes[group] = newGroupItems;
            }
            return newNotes;
        });
    };

    const getDraggableNotes = (notes) => {
        return notes.map((note, index) => {
            return (
                <Draggable key={note.id} draggableId={note.id} index={index}>
                    {(provided) => (
                        <Card
                            key={note.id}
                            data={note}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            innerRef={provided.innerRef}
                            provided={provided}
                        />
                    )}
                </Draggable>
            );
        });
    };

    const handleGroupName = (id, name) => {
        localStorage.setItem(id, name);
    };

    const getWhiteBoardContent = () => {
        const jsxContent = [];
        for (let group in notes) {
            const content = (
                <Droppable droppableId={group} key={group}>
                    {(provided) => {
                        return group === "notes" ? (
                            <div
                                className={styles["white-board"]}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {getDraggableNotes(notes[group])}
                                {provided.placeholder}
                            </div>
                        ) : (
                            <Group
                                id={group}
                                getGroupName={(name) =>
                                    handleGroupName(group, name)
                                }
                                name={localStorage.getItem(group)}
                                innerRef={provided.innerRef}
                                provided={provided}
                                className={styles["white-board"]}
                            >
                                {getDraggableNotes(notes[group])}
                            </Group>
                        );
                    }}
                </Droppable>
            );
            jsxContent.push(content);
        }
        return jsxContent;
    };

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId === destination.droppableId) {
            const items = Array.from(notes[source.droppableId]);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            setNotes((prevNotes) => {
                return {
                    ...prevNotes,
                    [source.droppableId]: items,
                };
            });
        } else {
            setNotes((prevNotes) => {
                const item = prevNotes[source.droppableId][source.index];
                prevNotes[source.droppableId].splice(source.index, 1);
                prevNotes[destination.droppableId].splice(
                    destination.index,
                    0,
                    item
                );
                return {
                    ...prevNotes,
                };
            });
        }
    }

    const handleNewGroupClick = () => {
        setNotes((prevNotes) => {
            return {
                ...prevNotes,
                [nanoid()]: [],
            };
        });
    };

    return (
        <div>
            <button
                className={styles["create-new-note"]}
                onClick={handleNewNoteClick}
            >
                <BiNote />
            </button>
            <button
                className={styles["create-new-group"]}
                onClick={handleNewGroupClick}
            >
                <AiFillPlusCircle />
            </button>
            {formData && (
                <Form
                    formData={formData}
                    type={formData.id ? "Edit Note" : "New Note"}
                    getFormData={handleNewNoteData}
                    onCancel={() => setFormData()}
                />
            )}
            <DragDropContext onDragEnd={handleOnDragEnd}>
                {getWhiteBoardContent()}
            </DragDropContext>
        </div>
    );
}

export default App;
