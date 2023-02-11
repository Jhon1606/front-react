import { BASE_PATH, requestBody, token } from "../../config"

export const login = async (data) => {
    const url = `${ BASE_PATH }/login`;
    
    const params = requestBody("POST", data);
    
    const response = await fetch(url, params);
    const result = await response.json();
    
    if(result.status === 200){
        localStorage.setItem('token', result.token);
        window.location.href = '/';
    }

    return result.message;
}

export const logout = async () => {
    const url = `${ BASE_PATH }/logout`;
    const params = requestBody("POST");

    await fetch(url, params);

    localStorage.removeItem('token');
    window.location.href = '/login';

}
