const types = {
    setMessageDataType: 'setMessageDataType',
    setMessageDataDefaultType: 'setMessageDataDefaultType'
}

const initState = {
    messageData: {
        isVisible: false,
        message: '',
        type: 'success'
    }
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
                    type:  success ? 'success' : 'error'
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

export default authReducer
