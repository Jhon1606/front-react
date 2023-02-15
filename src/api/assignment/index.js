import { BASE_PATH, getRequest, sendRequest } from "../../config";

export const assignTeacherInCourse = async (teacher_id, course_id) =>  {

    const url = `${ BASE_PATH }/assignment/teacher/${ teacher_id }/course/${ course_id }`;
    const params = sendRequest("PUT");
    
    const response = await fetch(url, params);
    const result = await response.json();
    
    return result;
}

export const assignRemove = async (id) => {

    const url = `${ BASE_PATH }/assignment/${ id }`;
    const params = sendRequest("DELETE");

    const response = await fetch(url, params);
    const result = await response.json();

    return result;
}