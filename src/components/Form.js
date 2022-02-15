import React from "react";
import styles from "./Form.module.css";

const Form = (props) => {
    const [formData, setFormData] = React.useState(props.formData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.getFormData(formData);
        handleCancel(event);
    };

    const handleCancel = (event) => {
        event.preventDefault();
        props.onCancel();
    };

    return (
        <form className={styles["form-container"]} onSubmit={handleSubmit}>
            <h3>{props.type}</h3>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                name="name"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Title"
                value={formData.title}
                name="title"
                onChange={handleChange}
            />
            <textarea
                name="text"
                placeholder="Description"
                value={formData.text}
                onChange={handleChange}
            />
            <div className={styles.buttonContainer}>
                <button>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default Form;
