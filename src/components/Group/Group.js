import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import Card from "../Card/Card";
import styles from "./Group.module.css";

const Group = (props) => {
    const { provided, notes, name } = props;

    const displayContent = notes.map((note, index) => {
        return (
            <Draggable key={note.id} draggableId={note.id} index={index}>
                {(provided) => (
                    <Card
                        key={note.id}
                        data={note}
                        displayGroup={false}
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
        <div {...provided.droppableProps} ref={provided.innerRef}>
            <div className={styles.container}>
                <div className={styles.name}>
                    <h2>{name}</h2>
                </div>
                <div className={styles.content}>{displayContent}</div>
            </div>
            {provided.placeholder}
        </div>
    );
};

export default Group;
