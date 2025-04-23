import React, { useState } from "react"
import { FaHeart, FaRegCommentDots, FaShareAlt } from "react-icons/fa"

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  return (
    <div className="col-md-12 mb-4">
      <div className="card">
        {/* Profile Picture + Username */}
        <div className="d-flex align-items-center p-3">
          <img
            src={post.user.profilePic}
            alt="Profile"
            className="rounded-circle me-3"
            style={{ width: "45px", height: "45px", objectFit: "cover" }}
          />
          <h5 className="mb-0">{post.user.username}</h5>
        </div>

        {/* Post Image */}
        <img
          src={post.image}
          className="card-img-top"
          alt="Post"
          style={{ objectFit: "cover", height: "400px" }}
        />

        {/* Caption + Actions */}
        <div className="card-body">
          <p className="card-text">{post.caption}</p>

          <div className="d-flex justify-content-around my-2">
            <div className="d-flex align-items-center gap-1">
              <FaHeart
                color="red"
                style={{ cursor: "pointer" }}
                onClick={handleLike}
                title="Like"
              />
              <small className="text-muted">{likes} Likes</small>
            </div>
            <FaRegCommentDots
              style={{ cursor: "pointer" }}
              onClick={() => setShowComments(!showComments)}
              title="Comments"
            />
            <i
              class="bi bi-send"
              style={{ cursor: "pointer" }}
              title="Share"
            ></i>
            {/* <FaShareAlt /> */}
          </div>

          {/* Comment Section */}
          {showComments && (
            <div className="mt-3">
              {post.comments.map((comment, index) => (
                <p key={index} className="mb-1">
                  <strong>{comment.user}:</strong> {comment.comment}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Timestamp */}
        <div className="card-footer text-muted text-center">
          {new Date(post.timestamp).toLocaleString()}
        </div>
      </div>
    </div>
  )
}

export default PostCard
