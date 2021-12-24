import Header from "./Header";
import {connect} from "react-redux";
import { toggleAuthCreator} from "../../redux/authReducer";
import {getIsAuthSelect} from "../../redux/selects/auth";

const HeaderContainer = ({ isAuth, toggleAuth}) => {

    return (
        <Header isAuth={isAuth} toggleAuth={toggleAuth} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuthSelect(state)
})
export default connect(mapStateToProps, { toggleAuth: toggleAuthCreator})(HeaderContainer)
