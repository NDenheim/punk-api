import "./Home.scss";
import BeerTile from "../../components/BeerTile/BeerTile";
import { Beer } from "../../data/types";

type HomeProps = {
  beers: Beer[];
};

const Home = ({ beers }: HomeProps) => {
  return (
    <div className="container">
      <section className="all-tiles">
        {beers.map((beer) => (
          <BeerTile
            key={beer.id}
            name={beer.name}
            image={beer.image_url}
            description={beer.description}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
