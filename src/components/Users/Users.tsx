import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/user.png";
import {UserType} from "../../types/type";
import styles from "./Users.module.css";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (padeNumber: number) => void
    users: Array<UserType>
    followingWithProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let Users: React.FC<PropsType> = ({   currentPage,
                                      users,
                                      totalUsersCount,
                                      onPageChanged,
                                      pageSize,
                                      ...props
                                  }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span key={p} className={currentPage === p ? styles.selectedPage : ''}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>
                        {p}
                    </span>
            })}
        </div>
        {users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingWithProgress
                            .some(id => id === u.id)}
                                  onClick={() => {
                                      props.unfollow(u.id)
                                  }}>
                            Unfollow</button>
                        : <button disabled={props.followingWithProgress
                            .some(id => id === u.id)}
                                  onClick={() => {
                                      props.follow(u.id)
                                  }}>
                            Follow</button>}
                </div>
            </span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </span>
        </div>)}
    </div>
}

export default Users;