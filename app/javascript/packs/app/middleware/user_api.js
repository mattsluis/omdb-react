import Auth from 'j-toker';
//abstract and config j-toker
Auth.configure({
    apiUrl: '',
    storage: 'localStorage',
    confirmationSuccessUrl: () => `${window.location.protocol}//${window.location.host}/`,
    passwordResetSuccessUrl: () => `${window.location.protocol}//${window.location.host}/reset_password`,
    handleTokenValidationResponse: (response) => {
        // token is validated right after Auth.configure is called
        // in order to determine if returning users' sessions are still valid
        const { success, data: user } = response;
    }
});

export const createUser = (params) => {
    return Auth.emailSignUp(params)
}

export const logIn = (params) => {
    return Auth.emailSignIn(params)
}

export const validateUser = () => {
    console.log("validating...")
    return Auth.validateToken()
}

export const logOutUser = () => {
  Auth.signOut();
}
