import { gql } from '@apollo/client'


export const TRIP = gql`
    query trip($id: String){
        trip(id: $id) {
            id
            from
            to
            at
            on
            price
            car {
                plate
                make
                year
                photoURLs
            }
            driver {
                name
                phone
            }
        }
    }
`

export const MY_BOOKINGS = gql`
    query MyBookings{
        myBookings {
            id
            from
            to
            at
            on
            status
        }
    }
`

export const CAR_OPTIONS = gql`
    query GetCarOptions($booking: NewBookingInput) {
        carOptions(booking: $booking){
            type,
            description {
                en
            },
            imgURL,
            maxPassengers,
            maxLuggage,
            price,
            offerPrice
        }
    }
`

export const CITIES = gql`
    query GetCities {
        cities {
            id,
            en
        }
    }
`