const TOGGLE_SHOW_EDIT_MODAL = 'TOGGLE_SHOW_EDIT_MODAL';

const initState = {
    isShowModal: false
}

const editModalReducer = (state= initState, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_EDIT_MODAL: {
            return {
                ...state,
                isShowModal: !state.isShowModal
            }
        }

        default: {
            return state
        }
    }
}

export const toggleEditModalCreator = () => ({
    type: TOGGLE_SHOW_EDIT_MODAL,
})


export default editModalReducer
