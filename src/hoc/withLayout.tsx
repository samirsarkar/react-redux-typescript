import { JSX } from "react"
import Header from "../components/Header"

export default function withLayout(Component: () => JSX.Element) {
  return function WrappedComponent() {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
          <Component />
        </div>
      </>
    )
  }
}
