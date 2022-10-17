const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item wd-tweet-in-topic ">
            
<div class="wd-main wd-padding-top-12 wd-border-bottom">
    <div class="wd-float-left">
        <img class="wd-icon" src=../../images/${post.userIconImage}
        />
    </div>
    <div class="wd-float-left wd-main wd-width-506">
        <span class="wd-white wd-font-size-15">${post.userName}</span>
        <span class="wd-grey wd-font-size-15"> @${post.userId} · ${post.time}</span>
        <br/>
        <span class="wd-white wd-font-size-15">${post.content}</span>
        <div class="wd-round-border">
            <img class="wd-large-image wd-border-bottom" src=../../images/${post.image} />
            <div class="wd-padding-12">
                <span class="wd-white wd-font-size-15 wd-bold">${post.title}</span>
                <br/>
                <span class="wd-grey wd-font-size-15">${post.detail}</span>
                <br/>
                <span class="wd-grey wd-font-size-15">${post.source}</span>
            </div>
        </div>

        <div class="wd-padding-top-12">
            <a href="#" class="wd-grey wd-no-underline wd-font-size-13 wd-width-onefourth">
                <i class="fa fa-comment wd-padding-right-12"></i>
                <span>${post.replies}</span>
            </a>

            <a href="#" class="wd-grey wd-no-underline wd-font-size-13 wd-width-onefourth">
                <i class="fa fa-share wd-padding-right-12"></i>
                <span>${post.shares}</span>
            </a>

            <a href="#" class="wd-red wd-no-underline wd-font-size-13 wd-width-onefourth">
                <i class="fa fa-heart wd-padding-right-12"></i>
                <span>${post.likes}</span>
            </a>

            <a href="#" class="wd-grey wd-no-underline wd-font-size-13 wd-width-onefourth">
                <i class="fa fa-upload wd-padding-right-12"></i>
            </a>
        </div>
    </div>
    <div class="wd-float-done"></div>
    </br>
</div>
        </li>
    
    `);
}
export default PostSummaryItem;