import React from 'react'
import { ThemeProvider } from 'styled-components';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import RouterWidget from './router'

const theme = createMuiTheme();
const createAppStyles = makeStyles({
  app: {
    height: '100vh',
    overflow: 'hidden'
  }
})
const App = function () {
  const appStyle = createAppStyles()
  return <ThemeProvider theme={theme}>
    <div className={appStyle.app}>
      <RouterWidget></RouterWidget>
    </div>
  </ThemeProvider>
}

export default App;