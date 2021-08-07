// YourComponent.stories.js | YourComponent.stories.jsx
import React from "react";
import TripDriver from "../components/TripDriver";


export default {
  title: "Example/TripDriver",
  component: TripDriver,
};

const Template = (args) => <TripDriver {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
