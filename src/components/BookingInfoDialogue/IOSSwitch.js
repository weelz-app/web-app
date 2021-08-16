import React from "react";
import Switch from "@material-ui/core/Switch";
import { styled } from "@material-ui/core/styles";

export const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 29.6,
  height: 18,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 1,
    left: 1,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(10px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#00c3e1",
        opacity: 1,
        border: "none"
      }
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#52d869",
      border: "6px solid #fff"
    }
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 15.7,
    height: 15.7
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    border: `1px solid #d4d4d4`,
    backgroundColor: "#d4d4d4",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"], {
      duration: 500
    })
  }
}));
