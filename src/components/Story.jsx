// import React, { useEffect, useState } from "react"

// export default function Story() {
//   const [stories, setStories] = useState([])
//   useEffect(() => {
//     fetch("http://localhost:3000/story")
//       .then((data) => data.json())
//       .then((story) => setStories(story))
//   }, [])
//   return (
//     <div className="story d-flex">
//       {stories.length > 0 ? (
//         stories.map((story) => (
//           <div key={story.id}>
//             <div className="gradient-border">
//               <img
//                 src={story.user.profilePic}
//                 alt="profilepic"
//                 className="rounded-circle "
//               />
//             </div>

//             <p className="text-truncate" style={{ width: "50px" }}>
//               {story.user.username}
//             </p>
//           </div>
//         ))
//       ) : (
//         <div></div>
//       )}
//     </div>
//   )
// }

import React, { useEffect, useState } from "react"

export default function Story() {
  const [stories, setStories] = useState([])
  const [currentStory, setCurrentStory] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/story")
      .then((data) => data.json())
      .then((story) => setStories(story))
  }, [])

  const handleStoryClick = (index) => {
    setCurrentStory(index)
  }

  const closeModal = () => {
    setCurrentStory(null)
  }

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
  }

  return (
    <>
      {/* Horizontal scroll for story thumbnails */}

      <div
        className="story d-flex align-items-center overflow-auto py-2 px-3 "
        style={{
          gap: "12px",
          whiteSpace: "nowrap",
          height: "100px",
        }}
      >
        {stories.map((story, index) => (
          <div
            key={story.id}
            onClick={() => handleStoryClick(index)}
            style={{ cursor: "pointer", textAlign: "center" }}
          >
            <div className="gradient-border mx-auto">
              <img
                src={story.user.profilePic}
                alt="profilepic"
                className="rounded-circle"
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
            </div>
            <p
              className="text-white"
              style={{ maxWidth: "60px", fontSize: "0.8rem" }}
            >
              {story.user.username}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentStory !== null && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button className="close-button" onClick={closeModal}>
              ×
            </button>

            {/* Header with profile image and username */}
            <div className="d-flex align-items-center mb-3">
              <img
                src={stories[currentStory].user.profilePic}
                alt="user"
                className="rounded-circle me-2"
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
              <strong>{stories[currentStory].user.username}</strong>
            </div>

            {/* Story image and navigation */}
            <div className="d-flex align-items-center">
              <button onClick={prevStory} className="nav-button">
                ←
              </button>
              <img
                src={stories[currentStory].image}
                alt="Story"
                className="story-img"
              />
              <button onClick={nextStory} className="nav-button">
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
