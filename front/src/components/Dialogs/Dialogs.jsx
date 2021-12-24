import React from "react";
import s from '../Dialogs/Dialogs.module.css';
import DialogsItem from "./DialogsItem";
import DialogsMessage from "./DialogsMessage";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {TextArea} from "../common/controlsForm/TextArea";

const maxLength10 = maxLengthCreator(10)

const Dialogs = ({dialogs, onSave}) => {
    const saveClick = (data) => {
            onSave(data.messageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.dialogsArray.map(({name, messages}, index) => (
                    <div key={index}>
                        <DialogsItem name={name} index={index} />
                    </div>
                ))}
            </div>
            <div>
                <ReduxFormAddMessageForm onSubmit={saveClick} />

                <div className={s.messages}>
                    {dialogs.messages.map((message, idx) => (
                        <div key={idx}>
                            <DialogsMessage message={message}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} component={TextArea} validate={[required, maxLength10]} placeholder={"Enter Your Message"} name="messageText"  />
                <button type={'submit'}>save</button>
            </div>
        </form>
    )
}

const ReduxFormAddMessageForm = reduxForm({form: 'addMessage'})(AddMessageForm)
export default Dialogs;
