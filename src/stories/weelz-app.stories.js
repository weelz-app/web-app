// YourComponent.stories.js | YourComponent.stories.jsx
import React from "react";
import WeelzApp from "../components/Weelz-app";


export default {
  title: "Example/WeelzApp",
  component: WeelzApp,
};

const Template = (args) => <WeelzApp {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
