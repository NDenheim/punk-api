import beers from "../../data/beers";
import "./BeerTile.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

type BeerTileProps = {
  image: string;
  name: string;
  description: string;
};

const BeerTile = ({ name, image, description }: BeerTileProps) => {
  return (
    <div className="beer-tile">
      <div className="beer-tile__center">
        <img className="beer-tile__image" src={image} alt={name} />
        <Link to={`/${name}`}>
          <h2 className="beer-tile__name">{name}</h2>
        </Link>
      </div>
      <p className="beer-tile__description">{description}</p>
    </div>
  );
};

export default BeerTile;
