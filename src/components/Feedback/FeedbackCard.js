import React, { useState } from 'react'
import FeedbackItem from './FeedbackItem'
import { Button, ButtonWrapper, Comment } from './FeedbackCardStyles'
import { Card } from "react-bootstrap";

export default function FeedbackCard({ feedback, setFeedback, toggleFeedbackThanks }) {
    const [driverFeedback, setDriverFeedback] = useState(feedback.driver)
    const [carFeedback, setCarFeedback] = useState(feedback.car)
    const [overallFeedback, setOverallFeedback] = useState(feedback.overall)
    const [overallComment, setOverallComment] = useState(feedback.comment)

    const submitFeedback = () => {
        setFeedback({ driver: driverFeedback, car: carFeedback, overall: overallFeedback, comment: overallComment })
        toggleFeedbackThanks()
    }

    return (
        <Card style={{
            padding: "20px 24px"
        }}>
            <FeedbackItem title={"Car"} subtitle={carFeedback.name} feedback={carFeedback} setFeedback={setCarFeedback} />
            <FeedbackItem title={"Driver"} subtitle={driverFeedback.name} feedback={driverFeedback} setFeedback={setDriverFeedback} />
            <FeedbackItem title={"Overall"} className="overall" feedback={overallFeedback} setFeedback={setOverallFeedback} />
            <Comment
                value={overallComment}
                placeholder="Tell us how we can imporve"
                onChange={(e) => setOverallComment(e.target.value)}
            />
            <ButtonWrapper>
                <Button onClick={() => submitFeedback()}>
                    Submit
                </Button>
            </ButtonWrapper>
        </Card>
    )
}