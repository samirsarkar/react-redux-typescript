import { render, screen, fireEvent } from "@testing-library/react"
import { describe, test, expect, vi } from "vitest"
import ItemCard from "../ItemCard"
import "@testing-library/jest-dom/vitest"

const testItem = {
  title: "Test Title",
  body: "Test Body",
  id: 1,
  description: "Test Description",
}

describe("ItemCard Component", () => {
  test("renders correctly with props", () => {
    render(<ItemCard item={testItem} onClick={() => {}} />)

    expect(screen.getByText("Test Title")).toBeInTheDocument()

    // Use a function to find text in nested elements
    expect(
      screen.getByText((content) => content.includes("Test Body"))
    ).toBeInTheDocument()
  })

  test("calls onClick function when clicked", () => {
    const mockOnClick = vi.fn()
    render(<ItemCard item={testItem} onClick={mockOnClick} />)

    fireEvent.click(screen.getByText("Test Title"))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
