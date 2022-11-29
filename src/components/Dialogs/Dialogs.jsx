import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialogItem => <DialogItem key={dialogItem.id} name={dialogItem.name}
                                                                      id={dialogItem.id}/>);
    let messagesElements = state.messages.map(messageItem => <Message key={messageItem.id}
                                                                      message={messageItem.message}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessagesBody);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>

                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;