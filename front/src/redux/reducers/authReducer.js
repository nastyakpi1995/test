const types = {
    SET_MESSAGE_DATA_TYPE: 'SET_MESSAGE_DATA_TYPE',
    SET_MESSAGE_DATA_DEFAULT_TYPE: 'SET_MESSAGE_DATA_DEFAULT_TYPE',
    SET_TEMP_THEME_TYPE: 'SET_TEMP_THEME_TYPE',
    SET_MENU_ACTIVE_TYPE: 'SET_MENU_ACTIVE_TYPE'
}

const initState = {
    messageData: {
        isVisible: false,
        message: '',
        type: 'success'
    },
    tempTheme: 'light',
    menuActive: 'profiles'
}

const authReducer = (state= initState, action) => {
    switch (action.type) {
        case types.SET_MESSAGE_DATA_TYPE: {
            const {message, success} = action.messageData
            return {
                ...state,
                messageData: {
                    isVisible: true,
                    message,
                    type: success ? 'success' : 'error'
                }
            }
        }
        case types.SET_MESSAGE_DATA_DEFAULT_TYPE: {
            return {
                ...state,
                messageData: {
                    isVisible: false,
                    message: '',
                    type: action.typeData
                }
            }
        }

        case types.SET_TEMP_THEME_TYPE: {
            return ({
                ...state,
                tempTheme: action.payload
            })
        }
        case types.SET_MENU_ACTIVE_TYPE: {
            return ({
                ...state,
                menuActive: action.payload
            })
        }

        default: {
            return state
        }
    }
}

export default authReducer;

export const setMessageDataCreator = (messageData) => ({
    type: types.SET_MESSAGE_DATA_TYPE,
    messageData,
})
export const setMessageDataDefaultCreator = (typeData) => ({
    type: types.SET_MESSAGE_DATA_DEFAULT_TYPE,
    typeData
})
export const setThemeCreator = (payload) => ({
    type: types.SET_TEMP_THEME_TYPE,
    payload
})
export const setMenuActiveCreator = (payload) => ({
    type: types.SET_MENU_ACTIVE_TYPE,
    payload
})