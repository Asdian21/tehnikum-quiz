import React from "react";
import Welcome from "./pages/Welcome";
import "./styles/main.css";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StepFour from "./pages/StepFour";
import StepThree from "./pages/StepThree";
import Thanks from "./pages/Thanks";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/step-one",
    element: <StepOne />,
  },
  {
    path: "/step-two",
    element: <StepTwo />,
  },
  {
    path: "/step-three",
    element: <StepThree />,
  },
  {
    path: "/step-four",
    element: <StepFour />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
      {/* <Welcome /> */}
      {/* <StepOne /> */}
      {/* <StepTwo /> */}
      {/* <StepThree /> */}
    </div>
  );
};

export default App;
