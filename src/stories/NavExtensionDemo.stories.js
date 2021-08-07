import React from "react";

import { NavExtensionDemo } from "./NavExtensionDemo";

export default {
    title: "Example/NavExtensionDemo",
    component: NavExtensionDemo,
    argTypes: {},
};

const Template = (args) => <NavExtensionDemo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
