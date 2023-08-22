import "./BeerInfo.scss";
import { Beer } from "../../data/types";
import { useParams } from "react-router-dom";

type BeerInfoProps = {
  beers: Beer[];
};

const BeerInfo = ({ beers }: BeerInfoProps) => {
  let { beerName } = useParams();

  const chosenBeer = beers.find((beer) => beer.name === beerName);

  if (chosenBeer === undefined) {
    return <p>Sorry, we couldn't find a beer with that name.</p>;
  }

  return (
    <div className="info">
      <img className="image" src={chosenBeer.image_url} alt={chosenBeer.name} />
      <div className="card">
        <h3 className="card__heading">{chosenBeer.name}</h3>
        <h5 className="card__tagline">{chosenBeer.tagline}</h5>
        <p className="card__description">{chosenBeer.description}</p>
        <ul className="card__facts">
          <li className="card__facts--brew-date">
            First brewed: {chosenBeer.first_brewed}
          </li>
          <li className="card__facts--ph">pH: {chosenBeer.ph}</li>
          <li className="card__facts--abv">ABV: {chosenBeer.abv}</li>
        </ul>
      </div>
    </div>
  );
};

export default BeerInfo;
