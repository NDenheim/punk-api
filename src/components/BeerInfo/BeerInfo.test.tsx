import { render, screen } from "@testing-library/react";
import beers from "../../data/beers";
import BeerInfo from "./BeerInfo";

it("should render the heading on the page", () => {
  // arrange
  render(<BeerInfo beers={beers} />);

  // act
  const heading = screen.getByRole("h3");

  // assert
  expect(heading).toBeInTheDocument();
});
