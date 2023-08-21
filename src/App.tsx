import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import { useState, FormEvent } from "react";
import beers from "./data/beers";

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

const App = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (event: FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value.toLowerCase();
    setSearch(userInput);
  };

  let beerFilteredByName = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(search);
  });

  // console.log(beerFilteredByName);

  return (
    <HashRouter>
      <div className="app">
        <Nav handleSearch={handleSearch} />

        <Routes>
          <Route path="/" element={<Home beers={beerFilteredByName} />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
