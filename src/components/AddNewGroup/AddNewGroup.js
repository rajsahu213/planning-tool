import React, { useState } from "react";
import styles from "./AddNewGroup.module.css";
import Backdrop from "@material-ui/core/Backdrop";

const AddNewGroup = (props) => {
    const [open, setOpen] = useState(true);
    const [groupName, setGroupName] = useState("");

    const handleCancel = (event) => {
        event.preventDefault();
        setOpen(false);
        props.onCancel();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(groupName);
        setOpen(false);
    };

    const handleChange = (event) => {
        setGroupName(event.target.value);
    };

    return (
        <Backdrop sx={{ color: "#aaa" }} style={{ zIndex: 1 }} open={open}>
            <form className={styles.newGroup} onSubmit={handleSubmit}>
                <h3>Enter Group Name</h3>
                <input
                    type="text"
                    name="groupName"
                    value={groupName}
                    onChange={handleChange}
                />
                <div className={styles.buttonContainer}>
                    <button>Add</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </Backdrop>
    );
};

export default AddNewGroup;
