import React from "react";
import styles from "./Card.module.css";
import { ImPencil } from "react-icons/im";
import { MdOutlineDelete } from "react-icons/md";

const Card = (props) => {
    const { data } = props;
    const { provided, innerRef } = props;

    let title = "";
    if (data.title) {
        title = <div className={styles.title}>{data.title}</div>;
    }

    return (
        <div
            id={data.id}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={innerRef}
        >
            <div
                style={{ backgroundColor: data.color }}
                className={styles.container}
            >
                <div className={styles.header}>
                    {title}
                    <div className={styles.icons}>
                        <ImPencil
                            className={styles.icon}
                            onClick={() => props.onEdit(data.id)}
                        />
                        <MdOutlineDelete
                            className={styles.icon}
                            onClick={() => props.onDelete(data.id)}
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
