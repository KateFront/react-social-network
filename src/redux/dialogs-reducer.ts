const SEND_MESSAGE = 'SEND-MESSAGE';


type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Mihail'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Viktor'},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'Hey'},
        {id: 5, message: 'Yumi'},
    ] as Array<MessagesType>,
}

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}
type SendMessageCreatorType ={
    type: typeof SEND_MESSAGE,
    newMessagesBody: string
}

export const sendMessageCreator = (newMessagesBody: string): SendMessageCreatorType => ({type: SEND_MESSAGE, newMessagesBody});


export default dialogsReducer;