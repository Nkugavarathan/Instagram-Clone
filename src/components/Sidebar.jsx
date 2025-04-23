import React from "react"

export default function Sidebar() {
  return (
    <div className="m-3">
      <div className="d-flex flex-column gap-3 position-fixed">
        <img
          className="logo-text"
          src="src/assets/instagram-text.png"
          alt="Instagram text"
        />
        <div>
          <i className="bi bi-house"></i>Home
        </div>
        <div>
          <i className="bi bi-search"></i>Search
        </div>
        <div>
          <i className="bi bi-compass"></i>Explore
        </div>
        <div>
          <i className="bi bi-play-btn"></i>Reels
        </div>
        <div>
          <i className="bi bi-chat-dots"></i>Messages
        </div>
        <div>
          <i className="bi bi-heart"></i>Notifications
        </div>
        <div>
          <i className="bi bi-plus-square"></i>Create
        </div>
        <div>
          <i className="bi bi-person-circle"></i>Profile
        </div>
      </div>
      <div className="position-fixed bottom-0 d-flex flex-column gap-3">
        <div>
          <i className="bi bi-threads"></i>Threads
        </div>
        <div className="mb-3">
          <i className="bi bi-list"></i>More
        </div>
      </div>
    </div>
  )
}
