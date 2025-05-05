import React, { useEffect, useState } from "react"
import PostCard from "./PostCard"
function Post() {
  const [posts, setPosts] = useState([])

  //   useEffect(() => {
  //     fetch("http://localhost:3001/posts")
  //       .then((response) => response.json())
  //       .then((data) => setPosts(data))
  //       .catch((error) => console.log(error))
  //   }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/posts")
        const data = await response.json()
        console.log(data) // Check what data you are receiving
        setPosts(data) // update posts
      } catch (error) {
        console.error("Error fetching posts:", error)
      }
    }

    fetchPosts()
  }, [])
  return (
    <div className="container mt-5">
      <div className="row">
        {posts.length > 0 ? (
          // posts.map((post) => (
          //   <div className="col-md-12 mb-4" key={post.id}>
          //     <div className="card">
          //       <div className="d-flex align-items-center p-3">
          //         {/* Profile Picture */}
          //         <img
          //           src={post.user.profilePic}
          //           className="rounded-circle me-3"
          //           alt="Profile"
          //           width="50"
          //           height="50"
          //         />
          //         {/* Username */}
          //         <h5 className="mb-0">{post.user.username}</h5>
          //       </div>

          //       {/* Post Image */}
          //       <img
          //         src={post.image}
          //         className="img-fluid"
          //         alt="Post"
          //         style={{ width: "100%", height: "300px", objectFit: "cover" }}
          //       />

          //       <div className="card-body">
          //         {/* Caption */}
          //         <p className="card-text">{post.caption}</p>

          //         {/* Likes & Comments Count */}
          //         <div className="d-flex justify-content-between mb-2">
          //           <span>❤️ {post.likes} Likes</span>
          //           <span>💬 {post.comments.length} Comments</span>
          //         </div>

          //         {/* Comments */}
          //         <div>
          //           {post.comments.map((comment, index) => (
          //             <p key={index} className="mb-1">
          //               <strong>{comment.user}</strong>: {comment.comment}
          //             </p>
          //           ))}
          //         </div>
          //       </div>

          //       {/* Timestamp */}
          //       <div className="card-footer text-muted text-end">
          //         {new Date(post.timestamp).toLocaleString()}
          //       </div>
          //     </div>
          //   </div>
          // ))

          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}

export default Post
