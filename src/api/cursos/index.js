import { BASE_PATH, getRequest, sendRequest } from "../../config"

export const index = async () => {
    const url = `${ BASE_PATH }/courses`;
    const params = getRequest();

    const response = await fetch(url, params);
    const result = await response.json();

    return result;

} 

export const show = async (id) => {
    const url = `${ BASE_PATH }/courses/${ id }`;
    const params = getRequest();
    
    const response = await fetch(url, params);
    const result = await response.json();

    return result;
}

export const edit = async (id, data) => {
    const url = `${ BASE_PATH }/courses/${ id }`;
    const params = sendRequest("PUT", data);

    const response = await fetch(url, params);
    const result = await response.json();

    return result;
}

export const deleteData = async (id) => {
    const url = `${ BASE_PATH }/courses/${ id }`;
    const params = sendRequest("DELETE");

    const response = await fetch(url, params);
    const result = await response.json();

    return result;
}

export const add = async (data) => {
    const url = `${ BASE_PATH }/courses`;
    const params = sendRequest("POST", data);

    const response = await fetch(url, params);
    const result = await response.json();

    return result;
}