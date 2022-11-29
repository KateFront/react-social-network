import {createSelector} from "reselect";


export const getUsersSelector = (state) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
});



export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingWithProgress = (state) => {
    return state.usersPage.followingWithProgress
}
