import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";


const Profile = ({setEdit}) => {
    const profile = useSelector((state) => state.profile);

    return (
        <>
            <div className="row">
                <div className="col-1">
                    <div style={{marginTop:'13px'}}>
                        <FontAwesomeIcon icon={faArrowLeftLong}/>
                    </div>
                </div>
                <div className="col-11">
                    <div className="wd-profile-userName"style={{ fontSize: '28px'}}>
                        {profile.name}
                    </div>

                    <div style={{fontSize: '14px', color: 'darkgray', position: 'relative', bottom: '5px'}}>
                        {profile.tweetsNum} Tweets
                    </div>
                </div>
            </div>
            <div>
                <img
                    src={`/images/${profile.bannerPicture}`}
                    height="200px" width="100%" style={{ objectFit: 'cover' }}/>

            </div>

            {/*profile user info*/}
            <div className="row">
                <div className="col ms-2" style={{position:'relative'}}>

                    <img
                        src={`/images/${profile.profilePicture}`}
                        className="rounded-circle"
                        height="120px"
                        width="120px"
                        style={{ position: 'relative',  border: 'black  solid 2px', marginTop: "-55px"}}
                    />
                    <div >
                        <span style={{ fontSize: '24px', fontWeight: "bold"}}>
                            {profile.name}
                        </span>
                        <br/>
                        <span style={{color: 'gray'}}>
                            @{profile.handle}
                        </span>
                    </div>
                </div>

                <div className="col">
                    <Link to="/tuiter/edit-profile">
                        <button className="btn btn-dar rounded-pill border-dark float-end mt-2 float-right">
                            Edit Profile
                        </button>
                    </Link>

                </div>
            </div>

            <div className="ms-2" style={{position: 'relative', top: '9px'}}>
                <div>
                    {profile.bio}
                </div>
                <div className="row" style={{color: 'darkgray', position: 'relative', top: '9px'}}>
                    <div className="col-3 ">
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                        <span className="p-2">{profile.location}</span>
                    </div>
                    <div className="col-4">
                        <FontAwesomeIcon icon={faBirthdayCake}/>
                        <span className="p-2">Born {profile.dateOfBirth}</span>
                    </div>
                    <div className="col-4">
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                        <span className="p-2">Joined {profile.dateJoined}</span>
                    </div>
                </div>
                <div className="row" style={{position: 'relative', top: '15px'}}>
                    <div className="col-5">
                        <span style={{fontWeight:'bold'}} className="p-1">
                            {profile.followingCount}
                        </span>

                        <span style={{color: 'darkgray'}} className="p-1">
                            Following
                        </span>
                    </div>
                    <div className="col-5">
                        <span style={{fontWeight:'bold'}} className="p-1">
                            {profile.followersCount}
                         </span>
                        <span style={{color: 'darkgray'}} className="p-1">
                            Followers
                        </span>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Profile;


