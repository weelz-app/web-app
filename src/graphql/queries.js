import { gql } from '@apollo/client'

export const BOOKING = gql`
    query Booking($id: String){
        booking(id:$id) {
            id
            ts
            from {en, ar}
            to {en, ar}
            at
            on
            status{
                type
                title{en, ar}
            }
            passengers
            luggage
            pets
            nonSmoking
            carOption {type, title {en, ar}, description{en, ar}}
            price
            pickup { address }
            dropOff { address }
            driver {
                name
                phone
            }
            car {
                type
                make
                year
                plate
                photoURLs
            }
        }
    }
`

export const MY_BOOKINGS = gql`
    query MyBookings{
        myBookings {
            id
            from {en, ar}
            to {en, ar}
            at
            on
            status{
                type
                title{en, ar}
            }
        }
    }
`

export const MY_NOTIFICATIONS = gql`
    query MyNotifications{
        myNotifications {
            id
            type 
            bookingId
            ts
            status
            title{en, ar}
            description{en, ar}
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
        cities {id, ar, en}
    }
`