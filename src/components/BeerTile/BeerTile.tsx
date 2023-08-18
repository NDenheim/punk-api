import "./BeerTile.scss";

type BeerTileProps = {
  image: string;
  name: string;
  description: string;
};

const BeerTile = ({ name, image, description }: BeerTileProps) => {
  return (
    <div className="beer-tile">
      <img className="beer-tile__image" src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default BeerTile;
