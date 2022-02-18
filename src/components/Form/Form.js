import React from "react";
import styles from "./Form.module.css";

const Form = (props) => {
    const initFormData = props.data
        ? props.data
        : {
              name: "",
              group: "",
              text: "",
          };

    const [formData, setFormData] = React.useState(initFormData);

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
        props.onFormDataSubmit(formData);
        handleCancel(event);
    };

    const handleCancel = (event) => {
        event.preventDefault();
        props.onCancel();
    };

    return (
        <form className={styles["form-container"]} onSubmit={handleSubmit}>
            <h3>New Highlight</h3>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                name="name"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Group"
                value={formData.group}
                name="group"
                onChange={handleChange}
            />
            <textarea
                name="text"
                placeholder="Description"
                value={formData.text}
                onChange={handleChange}
            />
            <div className={styles.buttonContainer}>
                <button>Add</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default Form;
