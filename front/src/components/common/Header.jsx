import React, {useCallback, useEffect, useState} from "react";
import {Layout, Menu} from "antd";
import {
    UsergroupDeleteOutlined,
    AreaChartOutlined,
    KeyOutlined,
} from '@ant-design/icons';
import {NavLink, useNavigate} from "react-router-dom";
import {authToken, savedUser} from "../../utils/constants";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {useDispatch} from "react-redux";

const {Header} = Layout

const HeaderContainer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(savedUser))
        if (user) {
            setUser(user)
        }
    }, [])

    const logOut = useCallback(() => {
        const prepareMessageData = {
            isVisible: true,
            message: 'you log out successfully',
            success: 'success'
        }

        dispatch(setMessageDataCreator(prepareMessageData))
        localStorage.setItem(authToken, '')
        localStorage.setItem(savedUser, JSON.stringify(null))
        navigate('/login')
    }, [])

    return (
        <Header>
            <div>
                <div style={{  float: 'left',
                    width: 170,
                    height: '100%',
                    display: 'flex',
                }}>
                    <div style={{
                        width: 40,
                        height: 65,
                        border: '2px solid #c6c2c2',
                        borderRadius: 15,
                        marginRight: 15
                    }}>
                        <img style={{ width: '100%'}}
                             src={'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'} />
                            </div>
                            <div style={{color: 'white'}}>{user?.username}</div>
                            <div style={{color: 'white', cursor: 'pointer', marginLeft: 10}} onClick={logOut}>Log out</div>
                        </div>

                        {user?.isadmin ? (
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                                <Menu.Item key="1" icon={<KeyOutlined />}><NavLink to={'/profiles'} >Profiles</NavLink></Menu.Item>
                                <Menu.Item key="2" icon={<AreaChartOutlined />}><NavLink to={'/dashboard'}>DashBoard</NavLink></Menu.Item>
                                <Menu.Item key="3" icon={<UsergroupDeleteOutlined />}><NavLink to={'/users'}>Users</NavLink> </Menu.Item>
                            </Menu>
                        ) : null}

                    </div>
                </Header>
    )
}

export default HeaderContainer
