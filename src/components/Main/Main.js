import React from "react";
import styles from "./Main.module.css";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Card from "../Card/Card";

const Main = (props) => {
    const { notes } = props;

    const standardDisplay = notes.map((note, index) => {
        return (
            <Draggable key={note.id} draggableId={note.id} index={index}>
                {(provided) => (
                    <Card
                        key={note.id}
                        data={note}
                        displayGroup={true}
                        onEdit={(data) => props.onEdit(note.id, data)}
                        onDelete={() => props.onDelete(note.id)}
                        innerRef={provided.innerRef}
                        provided={provided}
                    />
                )}
            </Draggable>
        );
    });

    return (
        <Droppable droppableId="main">
            {(provided) => (
                <div
                    className={styles.main}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {standardDisplay}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default Main;
