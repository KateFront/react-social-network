import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {


    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
           {/* <div>
                <img className={classes.img}
                     src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
                     alt=""/>
            </div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt='#'/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;