import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
            <ul class="list-group bg-secondary">
                <li class="list-group-item fw-bold" >
                    Who to follow</li>               
                ${
                    who.map(each => {
                        return(WhoToFollowListItem(each));
                    }).join('')
                }
            </ul>
                    
    `);
}
export default WhoToFollowList;