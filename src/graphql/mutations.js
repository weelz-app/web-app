import { gql } from '@apollo/client'

export const NEW_BOOKING = gql`
    mutation NewBooking($booking: NewBookingInput) {
        newBooking(booking: $booking){
            id
        }
  }
`