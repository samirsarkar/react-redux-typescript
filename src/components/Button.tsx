import React from "react"

interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mx-2 p-2 border color-gray-500 bg-green-200 hover:bg-green-400 hover:text-white"
    >
      {children}
    </button>
  )
}

export default Button
