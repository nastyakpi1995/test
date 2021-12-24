import React from "react";
import {addNewMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoс/withAuthRedirect";
import {compose} from "redux";
import {getDialogsSelect} from "../../redux/selects/dialogs";

const mapStateToProps = (state) => ({
    dialogs: getDialogsSelect(state),
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {onSave: addNewMessageTextCreator})
)(Dialogs)
