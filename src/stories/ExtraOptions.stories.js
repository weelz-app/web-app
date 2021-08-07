import React from "react";

import { ExtraOptionDemo } from "./ExtraOptionsDemo";

export default {
  title: "Example/ExtraOptionsDemo",
  component: ExtraOptionDemo,
  argTypes: {},
};

const Template = (args) => <ExtraOptionDemo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
