import { deleteTuitThunk, updateTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";
import React from "react";
import "./tuit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li className="list-group-item">
      <table>
        <tr>
          <td className="align-text-top">
            <img
              className="rounded-circle wd-avatar-image"
              src={`/images/${tuit.image}`}
            />
          </td>
          <td className="ps-3" style={{ width: "100%" }}>
            <i
              className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i>

            <span className="fw-bold">{tuit.userName}</span>
            <span className="ms-1 text-secondary">{tuit.handle}</span>
            <span className="ms-1 text-secondary"> {tuit.time}</span>
            {tuit.tuit}
            <div>
              Likes: {tuit.likes}
              <i
                onClick={() =>
                  dispatch(
                    updateTuitThunk({
                      ...tuit,
                      likes: tuit.likes + 1,
                    })
                  )
                }
                className="bi bi-heart-fill me-2 text-danger"
              ></i>
            </div>

            <div>
              Dislikes: {tuit.dislikes}
              <i
                onClick={() =>
                  dispatch(
                    updateTuitThunk({
                      ...tuit,
                      dislikes: tuit.dislikes + 1,
                    })
                  )
                }
                className="bi bi-hand-thumbs-down-fill me-2 text-danger"
              ></i>
            </div>

            <div class="wd-padding-top-12">
              <a
                href="#"
                class="wd-grey wd-no-underline wd-font-size-13 wd-width-onefourth"
              >
                <FontAwesomeIcon
                  icon={faComment}
                  className="wd-padding-right-12"
                />
                <span> {tuit.replies}</span>
              </a>

              <a
                href="#"
                class="wd-grey wd-no-underline wd-font-size-13 wd-width-onefourth"
              >
                <FontAwesomeIcon
                  icon={faRetweet}
                  className="wd-padding-right-12"
                />
                <span> {tuit.retuits}</span>
              </a>

              <a
                href="#"
                class="wd-red wd-no-underline wd-font-size-13 wd-width-onefourth"
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className="wd-padding-right-12"
                />
                <span> {tuit.likes}</span>
              </a>

              <a
                href="#"
                class="wd-grey wd-no-underline wd-font-size-13 wd-width-onefourth"
              >
                <FontAwesomeIcon
                  icon={faUpload}
                  className="wd-padding-right-12"
                />
              </a>
            </div>
          </td>
        </tr>
      </table>
    </li>
  );
};

export default TuitItem;
