import React, { useEffect } from 'react'
import { useState } from 'react'
import NumberWithButtons from '../components/NumberWithButtons'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';

import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined'

import CityInput from '../components/CityInput'
import { useHistory } from 'react-router'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers'
import { useQuery } from '@apollo/client'
import { CITIES } from '../graphql/queries'


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
  main: {
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  input: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.default} inset`
    }
  }
}))

export default function Booking() {
  const classes = useStyles()
  const history = useHistory()
  const [invalid, setInvalid] = useState(true)
  const [bookingData, setBookingData] = useState({
    passengers: 1, luggage: 0
  })
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    if (bookingData.from && bookingData.to && date && time)
      setInvalid(false)
  }, [bookingData, date, time])
  const submit = () => {
    let booking = {
      ...bookingData,
      on: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      at: `${time.getHours()}:${time.getMinutes()}`
    }
    console.log(booking);
    history.push({
      pathname: '/cars',
      state: [{ booking }]
    })
  }

  const { loading, error, data } = useQuery(CITIES)

  //TODO : add a useEffect to check if auth token is still valid
  // if not, sign them out
  return (
    <>
        <CssBaseline />
        <div className={classes.main}>
          <Grid container spacing={1}
            align='center'
          >
            <Grid item xs={12} sm={6}>
              <CityInput id='from' name='from' label='From' cities={loading ? [] : data.cities} autoFocus onChange={city => {
                const c = data.cities.filter(el => el.en === city);
                setBookingData({
                  ...bookingData,
                  from: c[0].id
                }) 
               }
              } />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CityInput id='to' name='to' label='To' cities={loading ? [] : data.cities} onChange={city => {
                  const c = data.cities.filter(el => el.en === city);
                  setBookingData({
                    ...bookingData,
                    to: c[0].id
                  })
                }
              } />
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={12} sm={6}>
                <KeyboardDatePicker
                  fullWidth
                  inputVariant='standard'
                  autoOk={true}
                  disablePast={true}
                  disableToolbar={true}
                  margin='normal'
                  id='date'
                  label='Date'
                  format='dd/MM/yyyy'
                  value={date}
                  onChange={date => setDate(date)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <KeyboardTimePicker
                  fullWidth
                  autoOk={true}
                  inputVariant='standard'
                  margin='normal'
                  id='time'
                  label='Time'
                  value={time}
                  keyboardIcon={<ScheduleOutlinedIcon />}
                  onChange={time => setTime(time)}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <Grid item xs={6} sm={6}>
              <Box align="center" justify="center">
                <PersonIcon color='primary' />
              </Box>
              <NumberWithButtons
                onChange={v =>
                  setBookingData({
                    ...bookingData,
                    passengers: v
                  })}
                min={1}
                max={7}
                init={1}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Box align="center" justify="center">
                <WorkIcon color='primary' />
              </Box>
              <NumberWithButtons
                onChange={v =>
                  setBookingData({
                    ...bookingData,
                    luggage: v
                  })}
                min={0}
                max={5}
                init={0}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={submit}
            disabled={invalid}
          >
            Next
            </Button>


        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
    </>
  )
}
