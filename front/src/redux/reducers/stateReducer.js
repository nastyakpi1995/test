const types = {
    SET_TEMP_THEME_TYPE: 'SET_TEMP_THEME_TYPE',
    SET_MENU_ACTIVE_TYPE: 'SET_MENU_ACTIVE_TYPE'
}

const initState = {
    tempTheme: 'light',
    menuActive: 'profiles'
}

const stateReducer = (state= initState, action) => {
    switch (action.type) {
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

export default stateReducer;


export const setThemeCreator = (payload) => ({
    type: types.SET_TEMP_THEME_TYPE,
    payload
})
export const setMenuActiveCreator = (payload) => ({
    type: types.SET_MENU_ACTIVE_TYPE,
    payload
})