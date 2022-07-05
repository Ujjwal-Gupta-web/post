import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { get_user_by_id } from "../controllers/user";

const PostCard = ({ post }) => {
  let [posted_by_username, setPostedBy] = useState("");
  useEffect(() => {
    get_user_by_id(post.posted_by).then(data => {
      setPostedBy(data.message.username);
    }
    );
  }, [])
  return (
    <div className='p-3 bg-white my-3'>
      <Link className='text-dark text-decoration-none' to={"/post/" + post._id}>
        <h4>{posted_by_username}</h4>
        <hr/>
        <h6 className='text-muted'>{post.title}</h6>
        <p>{post.description}</p>
      </Link>
    </div>

  )
}

export default PostCard