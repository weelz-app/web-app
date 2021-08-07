import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function FeedbackItemDemo() {

    const feedback = {
        rating: 3,
        comment: "Ok"
    }
    const setFeedback = (feedback) => console.log(feedback)

    return <FeedbackItem title="Demo" subtitle="Description" feedback={feedback} setFeedback={setFeedback} />
}
