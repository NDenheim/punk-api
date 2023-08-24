import "./App.scss";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import { useState, FormEvent, useEffect } from "react";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import { Beer } from "./data/types";
import Foam from "../src/assets/beer-foam.png";

const App = () => {
  const [apiBeers, setApiBeers] = useState<Beer[]>([]);
  const [search, setSearch] = useState<string>("");
  const [abv, setABV] = useState<boolean>(false);
  const [range, setRange] = useState<boolean>(false);
  const [acidic, setAcidic] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers/?&page=${page}&per_page=80&`;

    let urlWithParams = url;
    // console.log(urlWithParams);

    if (search !== "") {
      urlWithParams += `beer_name=${search}&`;
    }

    if (abv) {
      urlWithParams += `abv_gt=6&`;
    }

    if (range) {
      urlWithParams += `brewed_before=01-2010&`;
    }

    const res = await fetch(urlWithParams);
    const data = await res.json();
    setApiBeers(data);

    if (data == "") {
      alert("No beers match you search :(");
      // return (
      //   <div>
      //     <p style={{ textAlign: "center", fontSize: "20px" }}>
      //       Sorry, no beers match you search!
      //     </p>
      //   </div>
      // );
    }
  };

  useEffect(() => {
    getBeers();
  }, [search, abv, range, acidic]);

  useEffect(() => {
    getBeers();
    window.scrollTo(0, 0);
  }, [page]);

  const handlePageChange = (event: FormEvent<HTMLButtonElement>) => {
    const chosenPage = event.currentTarget.value;
    setPage(Number(chosenPage));
  };

  const handleSearch = (event: FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value.toLowerCase();
    const joinedInput = userInput.split(" ").join("_");
    setSearch(joinedInput);
  };

  const handleFilter = (event: FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === " High ABV") {
      setABV(!abv);
    }

    if (event.currentTarget.value === " Classic Range") {
      setRange(!range);
    }

    if (event.currentTarget.value === " Acidic") {
      setAcidic(!acidic);
    }
  };

  let phBeers: Beer[] = apiBeers;

  if (acidic) {
    phBeers = apiBeers.filter((beer) => {
      return beer.ph < 4 && beer.ph !== null;
    });
  }

  return (
    <HashRouter>
      <div className="app">
        <Nav handleSearch={handleSearch} handleFilter={handleFilter} />

        <Routes>
          <Route
            path="/"
            element={
              <Home beers={phBeers} onClick={handlePageChange} page={page} />
            }
          />
          <Route path="/:beerId" element={<BeerInfo beers={apiBeers} />} />
        </Routes>
      </div>
    </HashRouter>
  );
};
export default App;
