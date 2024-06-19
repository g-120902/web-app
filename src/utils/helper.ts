export function checkLogin(): boolean {
    const cachedLogIn = localStorage.getItem('login');
    if(cachedLogIn){
        return true
    }
    return false
}
declare global {
    var CheckLogin: typeof checkLogin;
}

// Assign the function to the global object
global.CheckLogin = checkLogin;