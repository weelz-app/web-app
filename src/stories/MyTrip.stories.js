import React from "react";

import { MytripDemo } from "./MytripDemo";

export default {
  title: "Example/MytripDemo",
  component: MytripDemo,
  argTypes: {},
};

const Template = (args) => <MytripDemo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
