import React from 'react'
import FeedbackItem from '../components/Feedback/FeedbackItem'

export default {
    title: "Feedback/FeedbackItem",
    component: FeedbackItem,
    argTypes: { setFeedback: { action: 'new-feedback' } },
  };

  const Template = (args) => <FeedbackItem {...args} />;

  export const Main = Template.bind({});
  Main.args = {
    title: "Driver",
    subtitle: "Ahmed",
    feedback:{
        rating: 5,
        comment: "He was super nice!"
    }
  };
  