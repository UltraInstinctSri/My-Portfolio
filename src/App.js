import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/Route";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen bg-gray-900">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
