import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useState} from "react";

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
  const [lang, setLang] = useState(localStorage.getItem("language"))

  const changeLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    localStorage.setItem("language", newLang);
    setLang(newLang)
  }

  return (
    <div className={`App ${lang}`}>
      <Router>
        <Navbar lang={lang} changeLang={() => changeLang()} />
        <div className="content">
          <Switch>
            <Route exact path="/" component={() => ( <Home lang={lang} /> )} />
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
