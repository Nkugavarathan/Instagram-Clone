import React from "react"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Suggestion from "./components/Suggestion"
export default function App() {
  return (
    <>
      <div className="d-flex vh-100">
        <div className="w-25">
          <Sidebar />
        </div>
        <div className="w-50 bg-secondary">
          <Feed />
        </div>
        <div className="w-30">
          <Suggestion />
        </div>
      </div>
    </>
  )
}
