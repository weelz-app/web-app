import React, { useState } from 'react'
import FeedbackItem from './FeedbackItem'
import { Button } from './FeedbackCardStyles'
import { Card } from "react-bootstrap";

export default function FeedbackCard({ feedback, setFeedback }) {
    const [driverFeedback, setDriverFeedback] = useState(feedback.driver)
    const [carFeedback, setCarFeedback] = useState(feedback.car)
    const [overallFeedback, setOverallFeedback] = useState(feedback.overall)

    return (
        <Card>
            <FeedbackItem title={"Car"} subtitle={carFeedback.name} feedback={carFeedback} setFeedback={setCarFeedback} />
            <FeedbackItem title={"Driver"} subtitle={driverFeedback.name} feedback={driverFeedback} setFeedback={setDriverFeedback} />
            <FeedbackItem title={"Overall"} feedback={overallFeedback} setFeedback={setOverallFeedback} />
            <div>
                <Button onClick={() => { setFeedback({ driver: driverFeedback, car: carFeedback, overall: overallFeedback }) }}>
                    Submit
                </Button>
            </div>
        </Card>
    )
}