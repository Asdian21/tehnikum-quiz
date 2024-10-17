import React from "react";
import { AppButton } from "./AppButton";
import { Link } from "react-router-dom";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export const LinkButton = ({ path, isDisabled, ...props }) => {
  return (
    <Link to={path} {...props}>
      <AppButton buttonText="Далее" isDisabled={isDisabled} />
    </Link>
  );
};
