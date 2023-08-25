import { render, screen } from "@testing-library/react";
import beers from "../../data/beers";
import BeerInfo from "./BeerInfo";

it("should render the heading on the page", () => {
  render(<BeerInfo beers={beers} />);

  const heading = screen.getByRole("h3");

  expect(heading).toBeInTheDocument();
});
