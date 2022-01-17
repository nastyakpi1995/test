
const types = {
    setMessageDataType: 'setMessageDataType',
    setMessageDataDefaultType: 'setMessageDataDefaultType',
    setThemeType: 'setThemeType',
}

const initState = {
    messageData: {
        isVisible: false,
        message: '',
        type: 'success'
    },
    isDarkTheme: false
}

const authReducer = (state= initState, action) => {
    switch (action.type) {
        case types.setMessageDataType: {
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
        case types.setMessageDataDefaultType: {
            return {
                ...state,
                messageData: {
                    isVisible: false,
                    message: '',
                    type: action.typeData
                }
            }
        }

        case types.setThemeType: {
            return ({
                ...state,
                isDarkTheme: !state.isDarkTheme
            })
        }

        default: {
            return state
        }
    }
}

export const setMessageDataCreator = (messageData) => ({
    type: types.setMessageDataType,
    messageData,
})
export const setMessageDataDefaultCreator = (typeData) => ({
    type: types.setMessageDataDefaultType,
    typeData
})
export const setThemeCreator = () => ({
    type: types.setThemeType,
})

export default authReducer
