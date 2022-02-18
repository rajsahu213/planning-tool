import React from "react";
import styles from "./Header.module.css";
import { BiNote } from "react-icons/bi";

const Header = (props) => {
    const handleNewNoteClick = () => {
        props.onNewNoteClick();
    };
    const handleGroupHighlightClick = () => {
        props.onGroupHighlightClick();
    };
    return (
        <header className={styles.header}>
            <button className={styles.createNew} onClick={handleNewNoteClick}>
                New Highlight <BiNote />
            </button>
            <button
                className={styles.createNew}
                onClick={handleGroupHighlightClick}
            >
                Group Highlight
            </button>
        </header>
    );
};

export default Header;
