import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"
import PostCard from '../components/PostCard';
import { add_post, get_posts } from "../controllers/post";

const Home = () => {
  document.body.style.background = "#eaeded";
  let navigate = useNavigate();
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("user")) { get_posts().then(data => data.tag && setPosts(data.message)); }
    else { navigate("/login"); }
  }, [])
  return (
    <>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add post</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="new_post_title" class="form-label">Title</label>
                <input type="email" class="form-control" id="new_post_title" />
              </div>
              <div class="mb-3">
                <label for="new_post_description" class="form-label">Description</label>
                <textarea className='form-control' id="new_post_description"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-dark"
                onClick={() => {
                  let obj = {
                    title: document.getElementById("new_post_title").value,
                    description: document.getElementById("new_post_description").value
                  };
                  add_post(obj).then(data => {
                    alert(data.message);
                    if (data.tag) {
                      window.location.reload();
                    }
                  });
                }}
              >Add</button>
            </div>
          </div>
        </div>
      </div>

      <div className='my-3 container'>
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add new post
        </button>
        <br />
        {posts.length > 0 ? posts.map(post => <PostCard post={post} />) : "No posts available"}
      </div>
    </>
  )
}

export default Home