import React from "react";

import { NavBar } from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "Example/Navbar",
  component: NavBar,
  argTypes: {},
};

const Template = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  username: "Bassam",
};
