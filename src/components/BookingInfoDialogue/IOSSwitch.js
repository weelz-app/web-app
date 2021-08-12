import React from "react";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

export const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 29.6,
    height: 18,
    padding: 0
  },
  switchBase: {
    padding: 1,
    left: 1,
    "&$checked": {
      transform: "translateX(10px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#00c3e1",
        opacity: 1,
        border: "none"
      }
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff"
    }
  },
  thumb: {
    width: 15.7,
    height: 15.7
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid #d4d4d4`,
    backgroundColor: "#d4d4d4",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});
