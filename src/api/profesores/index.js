import { BASE_PATH, getRequest, sendRequest } from "../../config"

export const indexTeachers = async () => {
    const url = `${ BASE_PATH }/teachers`;
    const params = getRequest();

    const response = await fetch(url, params);
    const result = await response.json();

    return result;
} 

export const edit = async (id, data) => {
    const url = `${ BASE_PATH }/teachers/${ id }`;
    const params = sendRequest("PUT", data);

    const response = await fetch(url, params);
    const result = await response.json();

    return result;
}

export const show = async (id) => {
    const url = `${ BASE_PATH }/teachers/${ id }`;
    const params = getRequest();
    
    const response = await fetch(url, params);
    const result = await response.json();
    console.log(result);

    return result;
}