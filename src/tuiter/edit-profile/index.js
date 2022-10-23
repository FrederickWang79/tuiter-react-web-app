import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { saveProfile } from '../profile/profile-reducer'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const userInfo = (state) => state.profile;

const EditProfile = () => {
    const profile = useSelector(userInfo);
    const dispatch = useDispatch();

    const saveChangesHandler = (event) => {
        let name = document.getElementById('name').value;
        let bio = document.getElementById('bio').value;
        let location = document.getElementById('location').value;
        let website = document.getElementById('website').value;
        let birthday = document.getElementById('birthday').value;
        let newProfile = [name, bio, location, website, birthday];
        dispatch(saveProfile(newProfile));
    }

    return (

        <>
            <div className="row">
                <div className="col-1 d-flex align-items-center justify-content-center">
                    <Link to="/tuiter/profile">
                        <FontAwesomeIcon icon={faTimes}/>
                    </Link>
                </div>
                <div className="col-10">
                    <div style={{ fontSize: '20px' }}>
                        Edit Profile
                    </div>

                </div>

                <div className="col-1">
                    <Link to="/tuiter/profile">
                        <button className="btn btn-light rounded-pill bg-black me-2 float-end"
                                onClick={saveChangesHandler}>
                            <span className="fw-bold text-white">Save</span>
                        </button>
                    </Link>
                </div>
            </div>
            <br></br>

            <div className="wd-profile-visual">
                <img className="wd-profile-bannerPic" height="200px" width="100%" style={{ objectFit: 'cover' }}
                     src={`/images/${profile.bannerPicture}`} alt="banner picture"/>
                <img className="wd-profile-profilePic rounded-circle"
                     height="120px"
                     width="120px"
                     style={{ position: 'relative', border: 'black solid 2px', marginTop: '-55px' }}
                     src={`/images/${profile.profilePicture}`} alt="profile picture"/>
            </div>


            <div className="wd-edit-section">


                <div className="mt-2">
                    <label htmlFor="name">Name</label>
                    <textarea id='name' name='name' style={{width: "100%"}}>
                        {profile.name}
                    </textarea>
                </div>


                <div className="mt-2 ">
                    <label htmlFor="bio">Bio</label>
                    <textarea id='bio' name='bio' style={{width: "100%"}}>
                        {profile.bio}
                    </textarea>
                </div>


                <div className="mt-2">
                    <label htmlFor="location">Location</label>
                    <textarea id='location' name="location" style={{width: "100%"}}>
                        {profile.location}
                    </textarea>
                </div>


                <div className="mt-2">
                    <label htmlFor="website">Website</label>
                    <textarea id='website' name="website" style={{width: "100%"}}>
                        {profile.website}
                    </textarea>
                </div>


                <div>
                    <div>
                        <span>Birth date - </span>
                        <label htmlFor="birthday" className="text-primary">Edit</label>
                    </div>
                    <div>
                        <input id="birthday" type="date" className="bg-light text-white" value={profile.dateOfBirth}/>
                    </div>
                </div>
            </div>
            <br></br>

        </>
    )
}
export default EditProfile





