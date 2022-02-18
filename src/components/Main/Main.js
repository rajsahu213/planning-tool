import React from "react";
import styles from "./Main.module.css";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { createSelectable } from "react-selectable";
import Card from "../Card/Card";

const SelectableComponent = createSelectable(Card);

const Main = (props) => {
    const { notes, selectedKeys } = props;
    const standardDisplay = notes.map((note, index) => {
        return (
            <Draggable key={note.id} draggableId={note.id} index={index}>
                {(provided) => {
                    let selected = selectedKeys.indexOf(note.id) > -1;
                    return (
                        <SelectableComponent
                            key={note.id}
                            data={note}
                            displayGroup={true}
                            onEdit={(data) => props.onEdit(note.id, data)}
                            onDelete={() => props.onDelete(note.id)}
                            innerRef={provided.innerRef}
                            provided={provided}
                            selected={selected}
                            selectableKey={note.id}
                        />
                    );
                }}
            </Draggable>
        );
    });

    return (
        <Droppable droppableId="main" id="main">
            {(provided) => (
                <div
                    id="main"
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
