import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ALL_ROUTES } from "./consts/routes";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {ALL_ROUTES.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
