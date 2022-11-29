import React from "react";
import {connect} from "react-redux";
import {    follow, requestUsers, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {UserType} from "../../types/type";
import {AppStateType} from "../../redux/redux-store";
import {
    getCurrentPage,
    getFollowingWithProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingWithProgress: Array<number>
}
type OwnPropsType = {
    pageTitle: string
}
type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}
type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingWithProgress={this.props.followingWithProgress}
            />
        </>
    }
}

/*let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingWithProgress: state.usersPage.followingWithProgress
    }
}*/
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingWithProgress: getFollowingWithProgress(state)
    }
}


export default compose(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps, {
        follow,
        unfollow,
        getUsers: requestUsers
    }))(UsersContainer);