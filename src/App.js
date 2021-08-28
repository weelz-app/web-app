import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import EmailVerification from "./pages/EmailVerification";
import CarSelection from "./pages/CarSelection";
import Trip from "./pages/Trip";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content" style={{paddingTop: "92.5px"}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/email-verification" component={EmailVerification} />
            <Route path="/trip-details" component={Trip} />
            <Route path="/about" component={About} />
            <Route path="/car-selection" component={CarSelection} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
