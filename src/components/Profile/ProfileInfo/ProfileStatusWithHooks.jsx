import React, {useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);


    return (
        <div>
            {editMode
                <div>
                    <span>{props.status || '-----'}</span>
                </div>
            }
            {
                <div>
                    <input autoFocus={true}/>
                </div>
            }
        </div>
    );
}
export default ProfileStatusWithHooks;