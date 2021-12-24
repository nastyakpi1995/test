import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, toggleAuth}) => {

    return (
        <header className={s.header}>
            <img className={s.header_img} src={'https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg'} />
            <div>
                {!isAuth ? <NavLink to={'/login'}>login</NavLink> : (
                    <div>
                        <NavLink to={'/profile'}>Dmitry</NavLink>
                        <button onClick={toggleAuth}>log out</button>
                    </div>
                )}
            </div>
        </header>
    )
}
export default Header
