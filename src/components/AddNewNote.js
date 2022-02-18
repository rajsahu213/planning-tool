import React, { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Form from "./Form/Form";

const AddNewNote = (props) => {
    const [open, setOpen] = useState(true);

    const handleCancel = () => {
        setOpen(false);
        props.onCancel();
    };

    const handleSubmit = (formData) => {
        props.onSubmit(formData);
    };

    return (
        <Backdrop sx={{ color: "#aaa" }} style={{ zIndex: 1 }} open={open}>
            <Form
                data={props.data}
                onCancel={handleCancel}
                onFormDataSubmit={handleSubmit}
            />
        </Backdrop>
    );
};

export default AddNewNote;
