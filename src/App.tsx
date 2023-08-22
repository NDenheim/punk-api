import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import { useState, FormEvent, useEffect, ChangeEventHandler } from "react";
import beers from "./data/beers";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import { Beer } from "./data/types";

const App = () => {
  const [apiBeers, setApiBeers] = useState<Beer[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers/`;
    // let urlWithParams = url + `?abv_gt=6`;
    // let urlWithParams: string;

    const res = await fetch(url);
    const data = await res.json();
    setApiBeers(data);
  };

  // console.log(apiBeers[0]);

  useEffect(() => {
    getBeers();
  }, [search, isChecked]);

  const handleSearch = (event: FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value.toLowerCase();
    setSearch(userInput);
  };

  let beerFilteredByName = apiBeers.filter((beer) => {
    return beer.name.toLowerCase().includes(search);
  });

  let filteredBeers: Beer[];

  const handleFilter = (event: FormEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);

    // let filteredBeers = beerFilteredByName.filter((beer) => {
    //   beer.abv > 6;
    // });

    if (event.currentTarget.value === " High ABV") {
      //     console.log("It works");

      filteredBeers = beerFilteredByName.filter((beer) => {
        return beer.abv > 6;
      });
    }

    if (event.currentTarget.value === " Acidic") {
      filteredBeers = beerFilteredByName.filter((beer) => {
        return beer.ph < 4;
      });
    }
    // return filteredBeers;

    // beerFilteredByName = filteredBeers;
  };

  return (
    <HashRouter>
      <div className="app">
        <Nav handleSearch={handleSearch} handleFilter={handleFilter} />

        <Routes>
          <Route path="/" element={<Home beers={beerFilteredByName} />} />
          <Route path="/:beerName" element={<BeerInfo beers={apiBeers} />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;

// export const handleRender = (beers: Beer[]) => {
//   const allBeers = beers.map((beer) => {
//     return (
//       <div>
//         <BeerTile
//           key={beer.id}
//           name={beer.name}
//           image={beer.image_url}
//           description={beer.description}
//         />
//       </div>
//     );
//   });
//   return allBeers;
// };
