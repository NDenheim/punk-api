import { render, screen } from "@testing-library/react";
import beers from "../../data/beers";
import Home from "./Home";

const onClick = () => {};

it("should render the page number onto the page", () => {
  render(<Home beers={beers} page={1} onClick={onClick} />);

  const pageNumber = screen.getByText("Page: 1");

  expect(pageNumber).toBeInTheDocument();
});
