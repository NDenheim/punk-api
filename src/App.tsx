import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";

const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;