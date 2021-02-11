import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/actions/postAction";

const PostCard = ({ postItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-3 mb-4" key={postItem.id}>
      <div className="card">
        <div className="icon-div">
          <Link to={`/updatepost/${postItem.id}`} className="edit-icon">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </Link>

          <span
            className="delete-icon"
            onClick={() => dispatch(deletePost(postItem.id))}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </span>
        </div>
        <img
          src={`https://source.unsplash.com/collection/${postItem.id}/1600x900`}
          alt={postItem.title}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{postItem.title}</h5>
          <p className="card-text">{postItem.body}</p>
          <Link to={`/post/${postItem.id}`}>
            <button className="btn view-button">View Post</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
