import { createMuiTheme } from '@material-ui/core/styles'
import { deepPurple, amber } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: deepPurple[300],
      main: deepPurple[500],
      dark: deepPurple[700]
    },
    secondary: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
      contrastText: deepPurple[900]
    },
    type: 'dark'
  }
})

export default theme