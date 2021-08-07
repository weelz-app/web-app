import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useHistory } from 'react-router-dom'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function TopAppBar ({ title }) {
  const classes = useStyles()
  const history = useHistory()
  const signOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('uid')
    localStorage.removeItem('user-name')
    window.dispatchEvent( new Event('storage') )
    history.push('/')
  }
  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            {title}
          </Typography>
          <IconButton aria-label='sign out' onClick={signOut}>
            <ExitToAppOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
