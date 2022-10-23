import React from "react";
import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faComment} from "@fortawesome/free-solid-svg-icons";
import { faUpload} from "@fortawesome/free-solid-svg-icons";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
const PostItem = (
{
post = {
    "userIconImage": 'elonmusk.jpeg',
    "userName": 'Elon Musk',
    "userId": 'elonmusk',
    "time": '23h',
    "content": 'Amazing show about @inspiration4x mission!',
    "image": 'banner.jpeg',
    "title": 'Countdown: Inspiration4x mission to space',
    "detail": 'From training to launch to landing',
    "source": 'netflix.com',
    "replies": '4.2K',
    "shares": '3.5K',
    "likes": '37.5K'
}
}
) => {
return(
        <li class="list-group-item wd-tweet-in-topic ">
            
<div class="wd-main wd-padding-top-12">
    <div class="wd-float-left">
        <img class="wd-icon" src={`../../images/${post.userIconImage}`}/>
    </div>
    <div class="wd-float-left wd-main wd-width-506">
        <span class="wd-font-size-15">{post.userName}</span>
        <span class="wd-font-size-15"> @{post.userId} · {post.time}</span>
        <br/>
        <span class="wd-font-size-15">{post.content}</span>
        <div class="wd-round-border">
            <img class="wd-large-image wd-border-bottom" src={`../../images/${post.image}`} />
            <div class="wd-padding-12">
                <span class="wd-font-size-15 wd-bold">{post.title}</span>
                <br/>
                <span class="wd-font-size-15">{post.detail}</span>
                <br/>
                <span class="wd-font-size-15">{post.source}</span>
            </div>
        </div>

        <div class="wd-padding-top-12">
            <a href="#" class="wd-grey wd-no-underline wd-font-size-13 wd-width-onefourth">
                <FontAwesomeIcon icon={faComment} className="wd-padding-right-12"/>
                <span>{post.replies}</span>
            </a>

            <a href="#" class="wd-grey wd-no-underline wd-font-size-13 wd-width-onefourth">
                <FontAwesomeIcon icon={faRetweet} className="wd-padding-right-12"/>
                <span>{post.shares}</span>
            </a>

            <a href="#" class="wd-red wd-no-underline wd-font-size-13 wd-width-onefourth">
                <FontAwesomeIcon icon={faHeart} className="wd-padding-right-12"/>
                <span>{post.likes}</span>
            </a>

            <a href="#" class="wd-grey wd-no-underline wd-font-size-13 wd-width-onefourth">
                <FontAwesomeIcon icon={faUpload} className="wd-padding-right-12"/>
            </a>
        </div>
    </div>
    <div class="wd-float-done"></div>
</div>
        </li>
    );
}
export default PostItem;