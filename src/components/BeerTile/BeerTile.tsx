import "./BeerTile.scss";
import { Link } from "react-router-dom";

type BeerTileProps = {
  image: string;
  name: string;
  description: string;
  tagline: string;
  brewed: string;
  ph: number;
  abv: number;
  id: number;
  ibu: number;
};

const BeerTile = ({
  name,
  id,
  image,
  tagline,
  description,
  brewed,
  ph,
  abv,
  ibu,
}: BeerTileProps) => {
  return (
    <Link to={`/${id}`} style={{ textDecoration: "none" }}>
      <div className="beer-tile">
        <div>
          <h2 className="beer-tile__name">{name}</h2>
          <p className="beer-tile__tagline">{tagline}</p>
        </div>
        <div className="beer-tile__info">
          <img className="beer-tile__image" src={image} alt={name} />
          <div className="beer-tile__center">
            <ul className="card__facts">
              <li className="card__facts--brew-date">First brewed: {brewed}</li>
              <li className="card__facts--ph">pH: {ph}</li>
              <li className="card__facts--abv">ABV: {abv}</li>
              <li className="card__facts--ibu">IBU: {ibu}</li>
            </ul>
            <p className="beer-tile__description">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BeerTile;
