import React, { useState } from "react";
import { NavbarTwo } from "../navbar/NavbarTwo";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPost } from "../../redux/actions/postAction";

const AddPostForm = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const new_post = {
      id: shortid.generate(),
      title: title,
      body: body,
    };
    console.log(new_post);
    dispatch(createPost(new_post));
    history.push("/reactRedux");
  };

  return (
    <div>
      <NavbarTwo displayNavbar={true} />
      <div className="container">
        <div className="py-4">
          <div className="card shadow">
            <div className="card-header" style={{ backgroundColor: "#D3D3D3" }}>
              Add a Post
            </div>
            <div className="card-body">
              <form onSubmit={submitForm}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control"
                    placeholder="Enter Post Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="5"
                    className="form-control form-control"
                    placeholder="Enter Post Body Text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  ></textarea>
                </div>
                <button className="btn btn-primary">Add New Post</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPostForm;
