import { TRIP } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import TripSummary from '../components/TripSummary'
import { useParams } from "react-router-dom";
import Driver from '../components/Driver';
import Car from '../components/Car';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        margin: 4,
        marginTop: 16,
    },
    title: {
        
        variant: 'subtitle1',
    },
    
    grid: {
        marginBottom: 8,
    },
    plate: {
        
    }
});

export default function TripStatus() {
    let { id } = useParams();
    //const bookingId = localStorage.getItem('bookingId')
    const classes = useStyles();
    const { loading, error, data } = useQuery(TRIP, {
        variables: { id },
    })
    return (
        <Container component='main' maxWidth='sm' >
            <div className={classes.root}>
            <Typography align='center'>
            {loading ? 'Please wait ... ' : ''}
            {error ? `Something went wrong: ${error}` : ''}
            </Typography>
            <TripSummary trip={data ? data.trip : {}} />
            <Driver driver={data ? data.trip.driver : {}} />
            <Car car={data ? data.trip.car : {}} />
            </div>
        </Container>
    )

}