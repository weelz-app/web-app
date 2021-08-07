import React from "react";

import { ExtraOptionDemo } from "./ExtraOptionDemo";

export default {
  title: "Example/ExtraOptionDemo",
  component: ExtraOptionDemo,
  argTypes: {},
};

const Template = (args) => <ExtraOptionDemo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
