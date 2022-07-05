import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { get_comments } from '../controllers/comment';
import { get_post_by_id } from '../controllers/post';
import { get_user_by_id } from '../controllers/user';

const Post = () => {
  let { post_id } = useParams();
  let [post, setPost] = useState({});
  let [posted_by_username, setPostedBy] = useState("");
  let [comments, setComments] = useState([]);

  useEffect(() => {
    get_post_by_id(post_id).then(data => {
      if (data.tag) {
        setPost(data.message);
        get_user_by_id(data.message.posted_by).then(data => {
          setPostedBy(data.message.username);
          get_comments().then(data => setComments(data));
        }
        );
      }
    })
  }, [])
  return (<div className='container'>
    <div className='my-3'>
      <Link to="/"><button className='btn btn-outline-dark'>Go Back</button></Link>
    </div>
    <div className='bg-white p-3 my-3'>
      <h4>{posted_by_username}</h4>
      <hr />
      <h6 className='text-muted'>{post.title}</h6>
      <p>{post.description}</p>
    </div>
    <h4>Comments</h4>
    {
      comments ? comments.map(comment =>
        <div className='bg-white p-3 my-3'>
          <h6 className='text-muted'>{comment.email}</h6>
          <p>{comment.body}</p>
        </div>
      )
        : "No comments found"
    }

  </div>
  )
}

export default Post