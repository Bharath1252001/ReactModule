import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./Components/Searchbar";
import Weather from "./Components/Weather";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SearchBar />} />
          <Route exact path="/Weather/:city" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
