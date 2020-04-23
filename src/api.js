// https://yrglset.herokuapp.com/api/goals/2020

import axios from "axios";

export const fetchEvent = (offset) => {
  console.log("in fetch", offset);

  return axios
    .get("https://gola-be.herokuapp.com/api/events?offset=" + offset)
    .then(({ data: { events } }) => {
      return events;
    });
};
