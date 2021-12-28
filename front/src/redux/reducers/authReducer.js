const SET_MESSAGE_DATA = 'SET_MESSAGE_DATA';
const SET_MESSAGE_DATA_DEFAULT = 'SET_MESSAGE_DATA_DEFAULT';

const initState = {
    messageData: {
        isVisible: false,
        message: '',
        type: 'success'
    }
}

const authReducer = (state= initState, action) => {
    switch (action.type) {
        case SET_MESSAGE_DATA: {
            const {message, success} = action.messageData
            return {
                ...state,
                messageData: {
                    isVisible: true,
                    message,
                    type:  success ? 'success' : 'error'
                }
            }
        }
        case SET_MESSAGE_DATA_DEFAULT: {
            return {
                ...state,
                messageData: {
                    isVisible: false,
                    message: '',
                    type: action.typeData
                }
            }
        }

        default: {
            return state
        }
    }
}

export const setMessageDataCreator = (messageData) => ({
    type: SET_MESSAGE_DATA,
    messageData,
})
export const setMessageDataDefaultCreator = (typeData) => ({
    type: SET_MESSAGE_DATA_DEFAULT,
    typeData
})

export default authReducer
