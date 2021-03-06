const SEND_MESSAGE = "samurai-network/dialogs/SEND-MESSAGE";

const initialState = {
    dialogsData: [
        { id: 1, name: "Vasea" },
        { id: 2, name: "Gheorghe" },
        { id: 3, name: "Andrei" },
        { id: 4, name: "Oleg" },
        { id: 5, name: "Sasha" },
        { id: 6, name: "Sveta" },
        { id: 7, name: "Abdulah" },
    ],
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    {
                        id: 5,
                        message: action.newMessageBody,
                        likesCount: 0,
                    },
                ],
            };
        default:
            return state;
    }
};

export const sendMessage = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody,
});

export default dialogsReducer;
