import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { ApolloProvider } from '@apollo/client'
import { client } from './graphql/client'

import Dashboard from './pages/Dashboard/Dashboard'

const theme = createTheme({})

const classes = {
  header: {
    backgroundColor: 'green',
  },
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <CssBaseline />
        <Helmet>
          <title>SpaceX API Demo</title>
        </Helmet>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <Router>
              <Routes>
                <Route path="//*" element={<Dashboard />} />
              </Routes>
            </Router>
          </div>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  )
}

export default App
