import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import ReactCodeInput from 'react-code-input'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory, useLocation } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Alert from '@material-ui/lab/Alert'
import Radium from 'radium'
import config from '../config.json'

const results = {
  VALID: 'valid',
  INVALID: 'invalid',
  EXPIRED: 'expired',
  UNKNOWN: 'unknown',
  TOOMANY: 'too many attempts'
}

const VERIFY_API = `${config.API_BASE_URL}/verify`
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    marginBottom: theme.spacing(4)
  },
  submit: {
    margin: theme.spacing(4, 0, 2)
  },
  err: {
    width: '100%',
    marginTop: theme.spacing(2),
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))
function VerifyCode() {
  const classes = useStyles()
  const history = useHistory()
  let location = useLocation()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [code, setCode] = useState(location.state[0].code || '')

  if (!location.state || !location.state[0] || !location.state[0].uid) {
    history.push('/')
  }

  const submit = useCallback(() => {
    setError('')
    let uid = location.state[0].uid
    let name = location.state[0].name
    setLoading(true)
    fetch(VERIFY_API + `?uid=${uid}&code=${code}`)
      .then(response => response.json())
      .then(r => {
        console.log(r)
        if (!r.error && r.codeValidation === results.VALID) {
          localStorage.setItem('token', r.token)
          localStorage.setItem('uid', uid)
          localStorage.setItem('user-name', name)
          window.dispatchEvent(new Event('storage'))
          history.push('/book')
        } else {
          setLoading(false)
          setError(
            r.error
              ? r.message
              : r.codeValidation +
              ', ' +
              r.remainingAttempts +
              ' attempts remaining'
          )
        }
      })
  }, [code, history, location.state])

  useEffect(() => {
    if (code.length === 4 && !error) submit()
  }, [error, code, submit])

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant='h4' align='center'>
          <p className={classes.title}> Verify phone </p>
        </Typography>

        <Typography className={classes.title} variant='body2' align='center'>
          Check your SMS, we've sent you a pin
        </Typography>

        <Box display='flex' justifyContent='center'>
          <Box>
            <ReactCodeInput
              value={code}
              type='text'
              pattern="\d*"
              autoFocus={true}
              autoComplete='one-time-code'
              fields={4}
              onChange={c => {
                setCode(c)
              }}
              isValid={!error}
              {...{
                inputStyle: {
                  fontFamily: 'monospace',
                  margin: '4px',
                  textAlign: 'center',
                  width: '40px',
                  borderRadius: '3px',
                  fontSize: '2em',
                  height: '40px',
                  color: 'lightskyblue',
                  border: '1px solid lightskyblue',
                  caretColor: 'transparent',
                },
                inputStyleInvalid: {
                  fontFamily: 'monospace',
                  margin: '4px',
                  textAlign: 'center',
                  width: '40px',
                  borderRadius: '3px',
                  fontSize: '2em',
                  height: '40px',
                  color: 'red',
                  border: '2px solid red',
                  caretColor: 'transparent',
                }
              }}
            />
          </Box>
        </Box>
        {error !== '' && (
          <div className={classes.err}>
            <Alert severity='error'>{error}</Alert>
          </div>
        )}
        <Button
          disabled={loading}
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={submit}
        >
          Verify
        </Button>
      </div>
    </Container>
  )
}

export default Radium(VerifyCode)
