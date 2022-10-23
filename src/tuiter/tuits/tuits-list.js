import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const selectAllTuits = (state) => state.tuits;

const TuitsList = () => {
    const tuits = useSelector(selectAllTuits);
    return(
            <ul className="list-group">
                {
                    tuits.map((tuit) => {
                        return <TuitItem tuit={tuit}/>
                    })
                }
            </ul>
    );
}

export default TuitsList;



