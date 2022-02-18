import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Group from "../Group/Group";
import styles from "./GroupHighlights.module.css";

const GroupHighlights = (props) => {
    const { notes } = props;
    const groupHighlights = new Map();

    notes.forEach((note) => {
        if (note.group) {
            if (groupHighlights.has(note.group)) {
                const oldHighlights = groupHighlights.get(note.group);
                groupHighlights.set(note.group, [...oldHighlights, note]);
            } else {
                groupHighlights.set(note.group, [note]);
            }
        }
    });

    const jsxContent = [];
    groupHighlights.forEach((notes, groupName) => {
        const content = (
            <Droppable droppableId={groupName} key={groupName}>
                {(provided) => (
                    <Group
                        name={groupName}
                        innerRef={provided.innerRef}
                        provided={provided}
                        notes={notes}
                        onEdit={props.onEdit}
                        onDelete={props.onDelete}
                    />
                )}
            </Droppable>
        );
        jsxContent.push(content);
    });

    return <div className={styles.groups}>{jsxContent}</div>;
};

export default GroupHighlights;
