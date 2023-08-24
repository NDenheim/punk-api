import beers from "../../data/beers";
import "./BeerTile.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

type BeerTileProps = {
  image: string;
  name: string;
  description: string;
  tagline: string;
  brewed: string;
  ph: number;
  abv: number;
};

const BeerTile = ({
  name,
  image,
  tagline,
  description,
  brewed,
  ph,
  abv,
}: BeerTileProps) => {
  return (
    <Link to={`/${name}`} style={{ textDecoration: "none" }}>
      <div className="beer-tile">
        <div>
          <h2 className="beer-tile__name">{name}</h2>
          <p className="beer-tile__tagline">{tagline}</p>
        </div>
        {/* <Link to={`/${name}`} style={{ textDecoration: "none" }}> */}
        <div className="beer-tile__info">
          <img className="beer-tile__image" src={image} alt={name} />
          {/* <Link to={`/${name}`} style={{ textDecoration: "none" }}> */}
          <div className="beer-tile__center">
            <p className="beer-tile__description">{description}</p>

            <ul className="card__facts">
              <li className="card__facts--brew-date">First brewed: {brewed}</li>
              <li className="card__facts--ph">pH: {ph}</li>
              <li className="card__facts--abv">ABV: {abv}</li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BeerTile;

// const BeerTile = ({ name, image, description }: BeerTileProps) => {
//   return (
//     <Link to={`/${name}`} style={{ textDecoration: "none" }}>
//       <div className="beer-tile">
//         <div className="beer-tile__center">
//           {/* <Link to={`/${name}`} style={{ textDecoration: "none" }}> */}
//           <img className="beer-tile__image" src={image} alt={name} />
//           {/* <Link to={`/${name}`} style={{ textDecoration: "none" }}> */}
//           <h2 className="beer-tile__name">{name}</h2>
//         </div>
//         <p className="beer-tile__description">{description}</p>
//       </div>
//     </Link>
//   );
// };
