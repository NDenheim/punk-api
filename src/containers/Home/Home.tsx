import "./Home.scss";
import BeerTile from "../../components/BeerTile/BeerTile";
import { Beer } from "../../data/types";
import beers from "../../data/beers";

// export const handleRender = (beers: Beer[]) => {
//   const allBeers = beers.map((beer) => {
//     return (
//       <div>
//         <BeerTile
//           name={beer.name}
//           image={beer.image_url}
//           description={beer.description}
//         />
//       </div>
//     );
//   });
//   return allBeers;
// };

const Home = () => {
  return (
    <div>
      <section>
        {beers.map((beer) => {
          return (
            <div>
              <BeerTile
                name={beer.name}
                image={beer.image_url}
                description={beer.description}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
