import './App.css'
import { useMemo, useState, useEffect } from 'react'
import SignUp from './pages/SignUp'
import TopAppBar from './components/TopAppBar'
import TripStatus from './pages/TripStatus'
import VerifyCode from './pages/VerifyCode'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { ApolloProvider } from '@apollo/client/react'
//import useMediaQuery from '@material-ui/core/useMediaQuery'
import Booking from './pages/Booking'
import config from './config.json'
import CarSelection from './pages/CarSelection'
import MyTrips from './pages/MyTrips'
import { Box } from '@material-ui/core'
import Container from '@material-ui/core/Container'

function initApolloClient() {
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: localStorage.getItem('token')
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

function App() {
  const [userName, setUserName] = useState(localStorage.getItem('user-name'))
  useEffect(() => {
    window.addEventListener('storage', () => {
      let user = localStorage.getItem('user-name')
      setUserName(user)
    })
  })
  // TODO: Re-enable dark mode after the issue (#1) has been fixed
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersDarkMode = false
  const theme = useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: 'Montserrat'
        },
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#00C3E1',
            contrastText: '#fff'
          },
          secondary: {
            main: '#584995',
            contrastText: '#fff'
          }
        }
      }),
    [prefersDarkMode]
  )

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          {userName ? <TopAppBar title={userName} /> : ''}
          <Box m={8} />
          <Container maxWidth='md'>
            <Switch>
              <Route exact path='/'>
                <SignUp />
              </Route>
              <Route path='/verify'>
                <VerifyCode />
              </Route>
              <Route path='/book'>
                <Booking />
              </Route>
              <Route path='/trip/:id'>
                <TripStatus />
              </Route>
              <Route path='/cars'>
                <CarSelection />
              </Route>
              <Route path='/trips'>
                <MyTrips />
              </Route>
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}
export default App
