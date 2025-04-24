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
    fetch("http://localhost:3000/story")
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
      <div className="story d-flex">
        {stories.map((story, index) => (
          <div
            key={story.id}
            onClick={() => handleStoryClick(index)}
            style={{ cursor: "pointer" }}
          >
            <div className="gradient-border">
              <img
                src={story.user.profilePic}
                alt="profilepic"
                className="rounded-circle"
              />
            </div>
            <p className="text-truncate">{story.user.username}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentStory !== null && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
      )}
    </>
  )
}
