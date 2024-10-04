import React from "react";
import { Header } from "./Header";

export const OneProgressBar = ({}) => {
  return (
    <div>
      <div className="indicator">
        <div className="indicator__text">
          <span className="indicator__description">
            <Header
              headerType="h2"
              headerText="Скидка за прохождение опроса:"
            />
          </span>
          <span className="indicator__value">
            <span>15%</span>
          </span>
        </div>
        <div className="indicator__progressbar">
          <div className="indicator__unit indicator__unit-1"></div>
          <div className="indicator__unit indicator__unit-2"></div>
          <div className="indicator__unit indicator__unit-3"></div>
          <div className="indicator__unit indicator__unit-4"></div>
        </div>
      </div>
    </div>
  );
};
