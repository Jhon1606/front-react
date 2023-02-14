import { BASE_PATH, getRequest, sendRequest } from "../../config"

export const login = async (data) => {
    const url = `${ BASE_PATH }/login`;
    
    const params = sendRequest("POST", data);
    
    const response = await fetch(url, params);
    const result = await response.json();
    
    if(result.status === 200){
        localStorage.setItem('token', result.token);
        window.location.href = '/'
    }

    return result.message;
}

export const checkAuthToken = async () => {
    
    const url = `${ BASE_PATH }/check-auth`;
    const params = getRequest();

    const response = await fetch(url, params).then(result => { return result });
    const result = await response.json();

    return result;
}

export const logout = async () => {
    const url = `${ BASE_PATH }/logout`;
    const params = sendRequest("POST");

    await fetch(url, params);

    localStorage.removeItem('token');
}