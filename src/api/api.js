import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5e6a7b1c-21b1-4e22-a0fc-e968510da760"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}
export const getUsers2 = (currentPage, pageSize) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`).then(response => response.data);
}

