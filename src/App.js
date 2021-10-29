import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import EmailVerification from "./pages/EmailVerification";
import CarSelection from "./pages/CarSelection";
import Trip from "./pages/Trip";
import Feedback from "./pages/Feedback";
import MyTrips from "./pages/MyTrips";
import Notifications from "./pages/Notifications";
import Navbar from "./components/Navbar/Navbar";
import { getUserAuthToken } from "./utils";
import { ApolloProvider } from '@apollo/client/react'
import { setContext } from '@apollo/client/link/context'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import config from './config.json'


export default function App() {
  const [lang, setLang] = useState(localStorage.getItem("language"))

  const changeLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    localStorage.setItem("language", newLang);
    setLang(newLang)
  }
  
  function initApolloClient() {
    let token = getUserAuthToken()
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token
        }
      }
    })
    const httpLink = createHttpLink({
      uri: `${config.API_BASE_URL}/graphql`
    })
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      fetchOptions: {
        mode: 'no-cors',
      }
    })
  }
  const client = initApolloClient()
  return (
    <div className={`App ${lang}`}>
      <ApolloProvider client={client}>
        <Router>
          <Navbar lang={lang} changeLang={() => changeLang()} />
          <div className="content">
            <Switch>
              <Route exact path="/" component={() => (getUserAuthToken() ? <Home lang={lang} /> : <SignIn />)} />
              <Route path="/signIn" component={SignIn} />
              <Route path="/verify" component={EmailVerification} />
              <Route path="/trip/:id" component={Trip} />
              <Route path="/my-trips" component={MyTrips} />
              <Route path="/feedback" component={Feedback} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/cars" component={CarSelection} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </div>
  );
}
