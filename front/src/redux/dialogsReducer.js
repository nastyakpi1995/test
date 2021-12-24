const ADD_MESSAGE = 'ADD_MESSAGE';

const initState = {
    messages: ['Hi', 'How is your it?', 'YO'],
    dialogsArray: [
        {name: 'Sveta',},
        {name: 'Viktor'},
        {name: 'Sergay'},
        {name: 'Sergio'},
        {name: 'Ivan'},
        {name: 'Vitaliy'},
    ],
}

const dialogsReducer = (state= initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const res = [...state.messages, action.body]
            return {
                ...state,
                messages: res
            }
        }
        default: {
            return state
        }
    }

}
export const addNewMessageTextCreator = (text) => ({
    type: ADD_MESSAGE,
    body: text
})


export default dialogsReducer
