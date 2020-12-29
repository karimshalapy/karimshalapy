import React from 'react'
import classes from './AvatarImage.module.css'
import avatarImage from '../../../../assets/images/me.jpg'

interface Props {

}

const AvatarImage: React.FC<Props> = props => {
    return (
        <div>
            <div className={classes.ImageWrapper}>
                <img src={avatarImage} alt="Avatar" />
            </div>
        </div>
    )
}

export default AvatarImage
