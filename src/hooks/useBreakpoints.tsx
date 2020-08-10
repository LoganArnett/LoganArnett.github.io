"use strict";
// you don't need copy this copmontent
// just install hooks, see https://github.com/VSymonenko/useBreakpoints#-installation
import { useState, useEffect } from "react";

interface BreakpointSizeOptions {
  min: number;
  max: number;
}

interface BreakpointSizeObject {
  [key: string]: BreakpointSizeOptions;
}

interface BreakpointObject {
  [key: string]: boolean | string;
}

export const useBreakpoints = (
  arg: BreakpointSizeObject = {
    xs: {
      min: 0,
      max: 600
    },
    sm: {
      min: 601,
      max: 960
    },
    md: {
      min: 961,
      max: 1024
    },
    lg: {
      min: 1025,
      max: 1280
    },
    xl: {
      min: 1281,
      max: 999999
    }
  }
) => {
  const [points, setBreakpoints] = useState({});
  const breakpoints: BreakpointObject = {};
  const handleResize = () => {
    for (const prop in arg) {
      // Determine whether an object has the specified property as a direct property.
      // Property must have min and max.
      if (arg[prop].hasOwnProperty("min") && arg[prop].hasOwnProperty("max")) {
        if (arg[prop].max) {
          breakpoints[prop] =
            arg[prop].max > window.innerWidth &&
            arg[prop].min < window.innerWidth;
        } else {
          // For maximum without limit.
          breakpoints[prop] = arg[prop].min < window.innerWidth;
        }
      } else {
        throw new Error(`${prop} must have properties min and max`);
      }
    }
    // get name for screen resolution
    breakpoints.screen = Object.keys(breakpoints)
      .filter(prop => breakpoints[prop] && prop !== "screen" && prop)
      .toString();
    setBreakpoints(breakpoints);
  };

  // Pass empty array to only run once on mount
  useEffect(() => handleResize(), []);

  // simulate componentDidMount and componentDidUpdate.
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // simulate componentWillUnmount react lifecycle hook.
    // Every effect may return a function that cleans up after it. This is optional.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return points;
}
