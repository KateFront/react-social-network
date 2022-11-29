import {maxLengthCreator, required} from "../../../utils/validator/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newMessagesBody"}
                       placeholder={"Enter your message"}
                       validate={[required, maxLength50]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: "dialog-add-message-form"})(AddMessageForm);