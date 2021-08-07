import React from "react";

import { NotificationDemo } from "./NotificationDemo";

export default {
  title: "Example/NotificationDemo",
  component: NotificationDemo,
  argTypes: {},
};

const Template = (args) => <NotificationDemo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
