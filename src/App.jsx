import { createRoot } from "react-dom/client";
import SearchParams from "./pages/SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./service/store";
import { useEffect, useState } from "react";

const petFinderKey = "DibH8zFscTGS1WCDVqCo4UH7rVsqGD22uxNTs7NeFgTovfwhGM";
const petFinderSecret = "cn1Cm7IlnZf43Lu9uLZLRAgLKqQJtLVNzuK6bKvF";

const App = () => {
  const [accessToken, setAccessToken] = useState();
  useEffect(() => {
    const fetchAccessToken = async () => {
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      params.append("client_id", petFinderKey);
      params.append("client_secret", petFinderSecret);
      const petFinderRes = await fetch(
        "http://api.petfinder.com/v2/oauth2/token",
        {
          method: "POST",
          body: params,
        }
      );
      const result = await petFinderRes.json();
      setAccessToken(`${result.token_type} ${result.access_token}`);
    };
    fetchAccessToken();
  }, []);

  localStorage.setItem("token", accessToken);

  return (
    <div className="h-full bg-base-200">
      <BrowserRouter>
        <Provider store={store}>
          <header>
            <Link to="/">Adopt Me Link To Home!</Link>
          </header>
          <Routes>
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
