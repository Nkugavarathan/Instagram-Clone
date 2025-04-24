import React, { useState, useEffect } from "react"

export default function Suggestion() {
  const [profile, setProfile] = useState()
  const [suggestion, setSuggestion] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((data) => data.json())
      .then((profile) => setProfile(profile))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/suggestions")
      .then((data) => data.json())
      .then((suggest) => setSuggestion(suggest))
  }, [])
  return (
    <div className="m-3 ">
      <div>
        {profile ? (
          <div className="d-flex align-items-center ">
            <img
              src={profile.profilePic}
              alt="Profile"
              className="rounded-circle me-3"
              style={{ width: "45px", height: "45px", objectFit: "cover" }}
            />
            <h5 className="mb-0 ">{profile.username}</h5>
            <p className="ms-auto text-primary" style={{ cursor: "pointer" }}>
              Switch
            </p>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
      <div className=" d-flex align-items-center my-2 text-dark">
        <p>Suggested for You</p>
        <b className="ms-auto " style={{ cursor: "pointer" }}>
          See All
        </b>
      </div>
      <div className="suggestion">
        {suggestion.length > 0 ? (
          suggestion.map((sug) => (
            <div
              className="d-flex align-items-center my-2 bg-transparent "
              key={sug.id}
            >
              <img
                src={sug.profilePic}
                alt="Profile"
                className="rounded-circle me-3"
                style={{ width: "45px", height: "45px", objectFit: "cover" }}
              />
              <h5 className="mb-0">{sug.username}</h5>
              <p className="ms-auto text-primary" style={{ cursor: "pointer" }}>
                Follow
              </p>
            </div>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  )
}
