import { BASE_PATH, getRequest, sendRequest } from "../../config"

export const indexTeachers = async () => {
    const url = `${ BASE_PATH }/courses`;
    const params = getRequest();

    const response = await fetch(url, params);
    const result = await response.json();

    return result;

} 