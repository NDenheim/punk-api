import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

const handleFilter = () => {};

const handleSearch = () => {};

it("should render the nav", () => {
  render(<Nav handleFilter={handleFilter} handleSearch={handleSearch} />);

  const nav = screen.getByRole("navigation");

  expect(nav).toBeInTheDocument();
});

it("should render the heading", () => {
  render(<Nav handleFilter={handleFilter} handleSearch={handleSearch} />);

  const heading = screen.getByText("BEER HUNTER");

  expect(heading).toBeInTheDocument();
});
