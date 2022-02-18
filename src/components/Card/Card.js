import React, { useState } from "react";
import styles from "./Card.module.css";
import { ImPencil } from "react-icons/im";
import { MdOutlineDelete } from "react-icons/md";
import AddNewNote from "../AddNewNote";

const Card = (props) => {
    const [isEdit, setIsEdit] = useState(false);
    const { provided, innerRef } = props;
    const { data } = props;

    return (
        <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={innerRef}
        >
            {isEdit && (
                <AddNewNote
                    data={data}
                    onCancel={() => setIsEdit(false)}
                    onSubmit={(data) => props.onEdit(data)}
                />
            )}
            <div
                style={{ backgroundColor: data.color }}
                className={styles.container}
            >
                <div className={styles.header}>
                    {props.displayGroup && data.group && (
                        <div className={styles.group}>{data.group}</div>
                    )}
                    <div className={styles.icons}>
                        <ImPencil
                            className={styles.icon}
                            onClick={() => setIsEdit(true)}
                        />
                        <MdOutlineDelete
                            className={styles.icon}
                            onClick={() => props.onDelete()}
                        />
                    </div>
                </div>

                <p>{data.text}</p>
                <p> - {data.name}</p>
            </div>
        </div>
    );
};

export default Card;
