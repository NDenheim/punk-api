import "./BeerInfo.scss";
import { Beer } from "../../data/types";
import { useParams, Link } from "react-router-dom";
import Back from "../../assets/back-arrow.png";
import Forward from "../../assets/forward-arrow.png";

type BeerInfoProps = {
  beers: Beer[];
};

const BeerInfo = ({ beers }: BeerInfoProps) => {
  let { beerId } = useParams();

  const chosenBeer = beers.find((beer) => beer.id === Number(beerId));

  if (chosenBeer === undefined) {
    return (
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Sorry, we couldn't find a beer with that ID.
      </p>
    );
  }

  let currentId = chosenBeer.id;

  return (
    <div className="all">
      <Link to={"/"}>
        <button className="back">Back to home</button>
      </Link>

      <div className="info">
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
            <li>IBU: {chosenBeer.ibu}</li>
            <li>EBC: {chosenBeer.ebc}</li>
          </ul>
          <p className="card__food">
            <strong>Food Pairings:</strong> {chosenBeer.food_pairing.join(", ")}
          </p>
          <p className="card__tips">
            <strong>Brewer's Tips:</strong> {chosenBeer.brewers_tips}
          </p>
        </div>

        <img
          className="image"
          src={chosenBeer.image_url}
          alt={chosenBeer.name}
        />
      </div>
      <div className="arrows">
        <Link to={`/${currentId - 1}`}>
          <img className="arrow" src={Back} alt="Back Arrow" />
        </Link>
        <Link to={`/${currentId + 1}`}>
          <img className="arrow" src={Forward} alt="Forward Arrow" />
        </Link>
      </div>
      <div className="wrapper">
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default BeerInfo;

// let { beerName } = useParams();

//   const chosenBeer = beers.find((beer) => beer.name === beerName);

//   if (chosenBeer === undefined) {
//     return <p>Sorry, we couldn't find a beer with that name.</p>;
//   }
