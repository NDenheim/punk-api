import "./Home.scss";
import BeerTile from "../../components/BeerTile/BeerTile";
import { Beer } from "../../data/types";
import { MouseEventHandler } from "react";

type HomeProps = {
  beers: Beer[];
  page: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Home = ({ beers, onClick, page }: HomeProps) => {
  return (
    <div className="container">
      <div className="pages">
        <p>Page: {page}</p>
        <ul className="pages__numbers">
          <button onClick={onClick} value={1}>
            1
          </button>
          <button onClick={onClick} value={2}>
            2
          </button>
          <button onClick={onClick} value={3}>
            3
          </button>
          <button onClick={onClick} value={4}>
            4
          </button>
          <button onClick={onClick} value={5}>
            5
          </button>
        </ul>
      </div>
      <section className="all-tiles">
        {beers.map((beer) => (
          <BeerTile
            key={beer.id}
            name={beer.name}
            id={beer.id}
            image={beer.image_url}
            description={beer.description}
            tagline={beer.tagline}
            brewed={beer.first_brewed}
            ph={beer.ph}
            abv={beer.abv}
            ibu={beer.ibu}
          />
        ))}
      </section>

      <div className="pages">
        <p>Page: {page}</p>
        <ul className="pages__numbers">
          <button onClick={onClick} value={1}>
            1
          </button>
          <button onClick={onClick} value={2}>
            2
          </button>
          <button onClick={onClick} value={3}>
            3
          </button>
          <button onClick={onClick} value={4}>
            4
          </button>
          <button onClick={onClick} value={5}>
            5
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Home;
