import React from "react";
import s from '../Dialogs/Dialogs.module.css';

const DialogsMessage = ({message}) => {
    return (
            <div className={s.message}>{message}</div>
    )
}

export default DialogsMessage;
