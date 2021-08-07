import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import logo from '../location_pin.png'
import { makeStyles } from '@material-ui/core/styles'
import ScheduleIcon from '@material-ui/icons/Schedule';
import PaymentIcon from '@material-ui/icons/Payment';


const useStyles = makeStyles({
    root: {
        marginTop: 16,
        marginBottom: 16
    },
    title: {
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 52
    },
    hcenter: {
        display: 'flex',
        alignItems: 'center',
        height: 52
    }

});

export default function TripSummary({ trip }) {
    const classes = useStyles();
    return <>
        <Typography variant='subtitle1' color='secondary' align='left'>
            Your Trip
            </Typography>
        <Card variant='outlined' style={{ backgroundColor: "#f0fafd", border: '0' }}>
            <div className={classes.root}>
                <Grid container alignItems='flex-start' >
                    <Grid item xs={2} className={classes.center}>
                        <img src={logo} height='24px' alt='' />
                    </Grid>
                    <Grid item xs={4} >
                        <Typography variant='caption' color='primary' align='left'>
                            From
                </Typography>
                        <Typography variant='body2' align='left'>
                            {trip.from}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.center}>
                        <ScheduleIcon color='primary' />
                    </Grid>
                    <Grid item xs={4} className={classes.hcenter}>
                        <Typography variant='body2' align='left'>
                            {trip.on} <br />
                            {trip.at}
                        </Typography>
                    </Grid>

                </Grid>

                <Grid container alignItems='flex-start' >
                    <Grid item xs={2} className={classes.center}>
                        <img src={logo} height='24px' alt='' />
                    </Grid>
                    <Grid item xs={4} >
                        <Typography variant='caption' color='primary' align='left'>
                            To
                </Typography>
                        <Typography variant='body2' align='left'>
                            {trip.to}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.center}>
                        <PaymentIcon color='primary' />
                    </Grid>
                    <Grid item xs={4} className={classes.hcenter}>
                        <Typography variant='body2' align='left'>
                            {trip.price} EGP
                    </Typography>
                    </Grid>

                </Grid>
            </div>
        </Card>
    </>
}