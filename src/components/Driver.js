import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles({
    root: {
        marginTop: 16
    },
    title: {
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 52
    }

});

export default function Driver({ driver }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='subtitle1' color='secondary' align='left'>
                Driver Details
            </Typography>

            <Grid container >
                <Grid item xs={3} >
                    <div className={classes.center}>
                        <AssignmentIndIcon style={{ fontSize: 40 }} color='secondary' />
                    </div>
                </Grid>
                <Grid item xs={9}>


                    <Grid item xs={12}>
                        <Typography variant='body1' align='left'>
                            {driver.name} <br />
                            <a href={`tel:${driver.phone}`} >
                                {driver.phone}
                            </a>
                        </Typography>
                    </Grid>


                </Grid>
            </Grid>

        </div>
    )
}