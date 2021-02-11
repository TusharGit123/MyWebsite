import React, { useState, useEffect } from "react";
import { NavbarTwo } from "../navbar/NavbarTwo";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getPost, updatePost } from "../../redux/actions/postAction";

const UpdatePostForm = () => {
  let history = useHistory();
  const post = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { id } = useParams();

  useEffect(() => {
    loadPost();
  });

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  const loadPost = () => {
    dispatch(getPost(id));
  };
  const submitForm = (e) => {
    e.preventDefault();
    const update_post = {
      id: post.id,
      title: title,
      body: body,
    };
    console.log(update_post);
    dispatch(updatePost(update_post));
    history.push("/reactRedux");
  };

  return (
    <div>
      <NavbarTwo displayNavbar={true} />
      <div className="container">
        <div className="py-4">
          <div className="card shadow">
            <div className="card-header" style={{ backgroundColor: "#D3D3D3" }}>
              Update a Post
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
                <button className="btn btn-primary">Update Post</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePostForm;
