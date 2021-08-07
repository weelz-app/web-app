import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import logo from '../logo_main.png'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import config from '../config.json'

const SIGNUP_API = `${config.API_BASE_URL}/signup`

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://weelz.app/'>
        Weelz Solutions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(4, 0)
  },
  placeholder: {
    height: 40
  },
  logo: {
    margin: theme.spacing(2),
  },
  // Override the autofill background color change 
  // seems to not work on safari on iphone devices!
  input: {
    
    "&:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.default} inset`
    },
    "&:-webkit-autofill:focus": {
      WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.default} inset`
    }
  }
}))

export default function SignUp() {
  const classes = useStyles()
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('token')
    //TODO validate token expiry
    if (token) {
      history.push('/book')
    }
  }, [history])
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    setLoading(true)

    fetch(SIGNUP_API + `?phone=${data.phone}&name=${data.name}`)
      .then(response => response.json())
      .then(r => {
        console.log(r)
        if (!data.error)
          history.push({
            pathname: '/verify',
            state: [{ uid: r.uid, name: data.name, code: r.codeForDebug }]
          })
        else setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <img className={classes.logo} width='50%' src={logo} alt='Logo' />
        <form className={classes.form} autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('name', { required: true, maxLength: 40 })}
            variant='outlined'
            margin='normal'
            fullWidth
            label='Name'
            id='fname'
            autoFocus
            error={errors.name != null}
            helperText={errors.name != null ? 'Name is required!' : ''}
            disabled={loading}
            autoComplete="name"
            inputProps={{ className: classes.input }}
          />
          <TextField
            {...register('phone', {
              required: true,
              pattern: /^01[0,1,2]\d{8}$/i
            })}
            variant='outlined'
            margin='normal'
            fullWidth
            id='tel'
            label='Phone Number'
            error={errors.phone != null}
            helperText={errors.phone != null ? 'Invalid phone format!' : ''}
            disabled={loading}
            autoComplete="tel-national"
            inputProps={{ className: classes.input, inputMode: 'numeric'  }}
          />
          <FormControl error={errors.check != null}>
            <Typography variant='body2' color='textSecondary'>
              <FormControlLabel
                control={
                  <Controller
                    name='check'
                    control={control}
                    defaultValue={false}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Checkbox color='primary' {...field} disabled={loading} />
                    )}
                  />
                }
                label='I accept T&C'
              />
            </Typography>
            {errors.check != null && (
              <FormHelperText>
                You have to accept the terms and conditions to continue.
              </FormHelperText>
            )}
          </FormControl>

          <Button
            disabled={loading}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
        <div className={classes.placeholder}>
          {loading && <CircularProgress />}
        </div>
      </div>

      <Copyright />
    </Container>
  )
}
