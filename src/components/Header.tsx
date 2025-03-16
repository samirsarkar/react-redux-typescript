import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { RoutingPaths } from "../constants/constants"

const Header: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <nav
      id="header"
      className="sticky top-0 left-0 w-full flex items-center justify-between p-4 shadow-md bg-gray-600"
    >
      <div
        className="cursor-pointer"
        onClick={() => navigate(RoutingPaths.home)}
      >
        <img src="/json-4.png" alt="Home" className="h-8 w-8" />
      </div>
      {location.pathname.includes("/post/") && (
        <button
          onClick={() => navigate(RoutingPaths.postList)}
          className="text-blue-500 hover:text-white-700 hover:bg-blue-200 p-2 items-center"
        >
          All Items
        </button>
      )}
    </nav>
  )
}

export default Header
