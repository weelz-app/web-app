import React from 'react'
import FeedbackCard from '../components/Feedback/FeedbackCard'

export default {
    title: "Feedback/FeedbackCard",
    component: FeedbackCard,
    argTypes: { setFeedback: { action: 'new-feedback' } },
};

const Template = (args) => <FeedbackCard {...args} />;

export const Main = Template.bind({});
Main.args = {
    feedback: {
        driver: {
            name: "Ahmed",
            rating: 4,
            comment: "Perfect"
        },
        car: {
            name: "Kia 2000",
            rating: 2,
            comment: "Terrible"
        },
        overall: {
            rating: 3,
            comment: "Ok"
        }
    }
};
