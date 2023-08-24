import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "./Nav";

const handleFilter = () => {};

const handleSearch = () => {};

it("should render the nav", () => {
  // arrange
  render(<Nav handleFilter={handleFilter} handleSearch={handleSearch} />);

  // act
  const nav = screen.getByRole("navigation");

  // assert
  expect(nav).toBeInTheDocument();
});

it("should render the heading", () => {
  render(<Nav handleFilter={handleFilter} handleSearch={handleSearch} />);

  const heading = screen.getByText("BEER HUNTER");

  expect(heading).toBeInTheDocument();
});
