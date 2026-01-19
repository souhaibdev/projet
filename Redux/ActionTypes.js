export const setAffiche = () => {
    return{
        type:"SET_AFFICHE",
    }
}

export const setLogin = (user) => ({
    type: "SET_LOGIN",
    payload: user
});

export const setLogout = () => ({
   type: "SET_LOGOUT" 
  });

export const setRegister = (user) => ({
    type: "SET_REGISTER",
    payload: user
});

export const setResetEmail = (email) => ({
    type: "SET_RESET_EMAIL",
    payload: email
});

export const setCode = (code) => ({
    type: "SET_CODE",
    payload: code
});

export const setStep = (step) => ({
    type: "SET_STEP",
    payload: step
});

export const resetAuthState = () => ({ type: "RESET_AUTH_STATE" });

export const updatePassword = (email, newPassword) => ({
    type: "UPDATE_PASSWORD",
    payload: { email, newPassword }
});

export const setDomainFiltrer = (domain) => {
    return{
        type:"SET_DOMAINFILTRER",
        payload:domain,
    }
}

export const sortByRating = (order = "desc") => {
  return {
    type: "SORT_BY_RATING",
    payload: order,
  };
};
