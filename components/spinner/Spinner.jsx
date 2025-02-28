import React from "react";
import {BeatLoader} from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner = ({isLoading}) => {
  return (
      <BeatLoader
        color={"black"}
        loading={isLoading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  );
};

export default Spinner;
