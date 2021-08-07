import Typography from '@material-ui/core/Typography'
import { MY_BOOKINGS } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import TripSummary from '../components/TripSummary'

export default function BookingStatus() {
    //const bookingId = localStorage.getItem('bookingId')
    const { loading, error, data } = useQuery(MY_BOOKINGS)
    return (
        <>
            <Typography variant='h6' color='textSecondary' align='center'>
                Your Trips
            </Typography>

            {loading ? 'Please wait' : ''}
            {error ? `Something went wrong: ${error}` : ''}
            {data ? data.myBookings.map((booking, index) => (<TripSummary key={index} booking={booking} />)) : ''}


        </>
    )

}