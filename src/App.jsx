import { createRoot } from "react-dom/client";
import SearchParams from "./pages/SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./service/store";
import Details from "./pages/Details";

const App = () => {
  return (
    <div className="h-screen bg-base-200">
      <BrowserRouter>
        <Provider store={store}>
          <header>
            <Link to="/">Adopt Me Link To Home!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
