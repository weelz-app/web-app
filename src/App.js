import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
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
            <Route path="/sign-in" component={SignIn} />
            <Route path="/about" component={About} />
            <Route path="/car-selection" component={CarSelection} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
