import React from "react";

import { DestinationOptionDemo } from "./DestinationOptionDemo";

export default {
  title: "Example/DestinationOptionDemo",
  component: DestinationOptionDemo,
  argTypes: {},
};

const Template = (args) => <DestinationOptionDemo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
