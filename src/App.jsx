import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="bg-orange-400">
      <h1>Hi</h1>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
