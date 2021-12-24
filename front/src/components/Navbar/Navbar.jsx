import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <nav className={s.nav}>
        <div className={s.item}><NavLink to="/profile/1" className={({ isActive }) => (isActive ? s.active : 'inactive')}>Profile</NavLink></div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({ isActive }) => (isActive ? s.active : 'inactive')}>Message</NavLink>
            </div>
            <div className={s.item}><NavLink to="/news"  className={({ isActive }) => (isActive ? s.active : 'inactive')}>News</NavLink></div>
            <div className={s.item}><NavLink to="/music"  className={({ isActive }) => (isActive ? s.active : 'inactive')}>Music</NavLink></div>
            <div className={s.item}><NavLink to="/users"  className={({ isActive }) => (isActive ? s.active : 'inactive')}>Users</NavLink></div>
            <div className={s.item}><NavLink to="/settings" className={({ isActive }) => (isActive ? s.active : 'inactive')}>Settings</NavLink></div>
    </nav>
)
export default Navbar;
