import React from "react"
import Sidebar from "./components/Sidebar"
export default function App() {
  return (
    <>
      <div className="d-flex vh-100">
        <div className="w-25">
          <Sidebar />
        </div>
        <div className="w-50 bg-secondary">feed</div>
        <div className="w-30">suggestion</div>
      </div>
    </>
  )
}
