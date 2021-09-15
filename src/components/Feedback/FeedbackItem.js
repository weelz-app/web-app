import React from 'react'
import {
    Paper,
    Title,
    SubTitle,
    StarRating,
    FeedbackWrapper,
    StyledRating
} from './FeedbackItemStyles'

export default function FeedbackItem({title, subtitle, feedback, setFeedback, className}) {
    return <Paper className={className}>
        <FeedbackWrapper>
            <div>
                <Title>
                    {title}
                </Title>
                {subtitle ? (
                    <SubTitle>
                        {subtitle}
                    </SubTitle>
                ) : null}
            </div>
            <StarRating>
                <StyledRating className="star" fillColor="#ffc713" emptyColor="#cdcdcd" onClick={(r) => setFeedback({ ...feedback, rating: r })} ratingValue={feedback.rating || 0}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill='currentColor'
                        width="21"
                        height="21"
                        viewBox="0 0 37.322 35.795"
                    >
                        <path strokeWidth="2px" d="M17.185 1.173L12.88 9.9l-9.632 1.4a2.111 2.111 0 0 0-1.167 3.6l6.968 6.8L7.4 31.289a2.108 2.108 0 0 0 3.059 2.222l8.617-4.529 8.617 4.529a2.11 2.11 0 0 0 3.059-2.222L29.1 21.7l6.968-6.79a2.111 2.111 0 0 0-1.167-3.6L25.274 9.9l-4.305-8.727a2.111 2.111 0 0 0-3.784 0z" transform="translate(-0.416 1.001)"/>
                    </svg>
                </StyledRating>
            </StarRating>
        </FeedbackWrapper>
    </Paper>
}