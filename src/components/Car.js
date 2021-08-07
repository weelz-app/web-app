import Typography from '@material-ui/core/Typography'
import LicensePlate from 'react-license-plate-egypt'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: 16
    },
});

export default function Car({ car }) {
    const classes = useStyles();

    return (<div className={classes.root}>
        <Typography variant='subtitle1' color='secondary' align='left'>
            Car Details
            </Typography>
        <Grid container className={classes.grid}>
            <Grid container >
                <Grid item xs={12}>
                    <Typography variant='h6' align='center'>
                        {car.make}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant='body1' align='center'>
                        {car.year}
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={8}>
                <div align='center' className={classes.plate} >
                    <LicensePlate number={car.plate} width='100' />
                </div>
            </Grid>
            <Grid item xs={12} >

            </Grid>
        </Grid>

        <div style={{ marginTop: 8 }} >

            {car.photoURLs ? car.photoURLs.map((url) => (

                <img alt="car" src={url} width='100%' />

            )) : ''}

        </div>
    </div>
    )
}