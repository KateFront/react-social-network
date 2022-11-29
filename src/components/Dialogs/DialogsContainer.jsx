import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import {compose} from "redux";
import {sendMessageCreator} from "../../redux/dialogs-reducer";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessagesBody) => {
            dispatch(sendMessageCreator(newMessagesBody));
        }
    }
};



export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthNavigate)(Dialogs);