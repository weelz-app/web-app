// YourComponent.stories.js | YourComponent.stories.jsx
import React from "react";
import TripSummaryC from "../components/trip-summary";


export default {
  title: "Example/TripSummaryC",
  component: TripSummaryC,
};

const Template = (args) => <TripSummaryC {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
