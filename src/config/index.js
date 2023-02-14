export const BASE_PATH = 'http://localhost:8000/api';
export const token = localStorage.getItem('token'); 

export function sendRequest(method, data = null){
    const paramas = {
        method: `${ method }`,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ token }`,
        }
    };

    return paramas;
}

export function getRequest(){
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ token }`,
        }
    };

    return params;
}
