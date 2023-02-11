import { logout } from "../api/auth";

export function checkTokenAuth(){
    const token = localStorage.getItem('token');
    if(!token){
        logout();
        return false; 
    }
    return true;
}