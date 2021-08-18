import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import CarSelection from "./pages/CarSelection";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            {/* <Route path="/car-selection" component={CarSelection} /> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}
