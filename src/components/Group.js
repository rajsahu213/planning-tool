import React, { useState } from "react";
import styles from "./Group.module.css";

const Group = (props) => {
    const [showForm, setShowForm] = useState(props.name === null);
    const [groupName, setGroupName] = useState(
        props.name === null ? "" : props.name
    );
    const { provided } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowForm(false);
        props.getGroupName(groupName);
    };

    const handleChange = (event) => {
        setGroupName(event.target.value);
    };

    return (
        <div
            className={styles.group}
            {...provided.droppableProps}
            ref={provided.innerRef}
        >
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Enter New Group Name"
                        id={props.id}
                        type="text"
                        value={groupName}
                        onChange={handleChange}
                    />
                </form>
            )}
            {!showForm && <h2>{groupName}</h2>}
            <div className={styles.container}>{props.children}</div>
            {provided.placeholder}
        </div>
    );
};

export default Group;
