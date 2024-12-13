import { Outlet, Router } from "@tanstack/react-location";
import { location, routes } from "./routes";

function App() {
  return (
    <Router location={location} routes={routes}>
      <Outlet />
    </Router>
  );
}

export default App;
