import React from 'react'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import CarSelectionList from '../components/CarSelectionList'
import { useMutation } from '@apollo/client'
import { NEW_BOOKING } from '../graphql/mutations'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function CarSelection() {
    let location = useLocation()
    let history = useHistory()
    const [loading, setLoading] = useState(false)
    if (!location.state || !location.state[0] || !location.state[0].booking) {
        history.push('/')
    }
    const [newBooking] = useMutation(NEW_BOOKING)
    const submit = () => {
        setLoading(true)
        let booking = location.state[0].booking
        newBooking({
            variables: {
                booking
            }
        }).then(response => {
            setLoading(false)
            let id = response.data.newBooking.id
            localStorage.setItem('bookingId', id)
            history.push(`/booking/${id}`)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }
    return <>
        <CssBaseline />
        <CarSelectionList />
        <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={submit}
            disabled={loading}
        >
            Book
            </Button>
    </>
}