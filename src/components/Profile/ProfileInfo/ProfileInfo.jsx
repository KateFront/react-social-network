import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.img}
                     src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
                     alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;