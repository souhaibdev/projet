const initial_state = {
    isAuthenticated: false,
    user: null,
    users: [{ id: 1, username: "souhaib", email: "souhaibelmizzari@gmail.com", password: "" },],
    resetEmail: "",
    code: "",
    step: 1
};

const authReducer = (state = initial_state, action) => {
    switch(action.type) {
        case "SET_LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case "SET_LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        case "SET_REGISTER":
            return {
                ...state,
                users: [...state.users, action.payload],
                isAuthenticated: true,
                user: action.payload,
            };
        case "SET_RESET_EMAIL":
            return {
                ...state,
                resetEmail: action.payload,
                step: 2,
            };
        case "SET_CODE":
            return {
                ...state,
                code: action.payload,
                step: 3,
            };
        case "SET_STEP":
            return {
                ...state,
                step: action.payload,
            };
        case "RESET_AUTH_STATE":
            return {
                ...state,
                resetEmail: "",
                code: "",
                step: 1,
            };
        case "UPDATE_PASSWORD":
            return {
                ...state,
                users: state.users.map(u => 
                    u.email === action.payload.email
                    ? { ...u, password: action.payload.newPassword }
                    : u
                )
            };
        default:
            return state;
    }
};

export default authReducer;
