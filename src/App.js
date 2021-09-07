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
import Feedback from "./pages/Feedback";
import MyTrips from "./pages/MyTrips";
import Notifications from "./pages/Notifications";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className={`App ar`}>
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/email-verification" component={EmailVerification} />
            <Route path="/trip-details" component={Trip} />
            <Route path="/my-trips" component={MyTrips} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/car-selection" component={CarSelection} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
