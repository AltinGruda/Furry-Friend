import { createRoot } from "react-dom/client";
import SearchParams from "./pages/SearchParams";

const App = () => {
  return (
    <div className="h-full bg-base-200">
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
