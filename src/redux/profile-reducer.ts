import {profileAPI, usersAPI} from "../api/api";
import {PostType, ProfileType} from "../types/type";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 10},
        {id: 2, message: 'it`s my first post', likeCount: 15}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {...state,
                //posts: [...state.posts, newPost],
                posts: [],
                newPostText: ''};
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type SetStatusType = {
    type: typeof SET_STATUS,
    status: string
}

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status});


export const getUserProfile = (userId: number) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
};
export const getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
};
export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
};


export default profileReducer;