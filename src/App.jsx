import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import HelloWorld from './pages/HelloWorld'

const theme = createTheme({})

const classes = {
  header: {
    backgroundColor: 'green',
  },
}

const App = () => {
  return (
    <HelmetProvider>
      <CssBaseline />
      <Helmet>
        <title>SpaceX API Demo</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Router>
            <Routes>
              <Route path="//*" element={<HelloWorld />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
