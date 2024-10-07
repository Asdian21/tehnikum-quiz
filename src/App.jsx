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
    components: <Welcome />,
  },
  {
    path: "/step-one",
    components: <StepOne />,
  },
  {
    path: "/step-two",
    components: <StepTwo />,
  },
  {
    path: "/step-three",
    components: <StepThree />,
  },
  {
    path: "/step-four",
    components: <StepFour />,
  },
  {
    path: "/thanks",
    components: <Thanks />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
      {/* <Welcome /> */}
      {/* <StepOne /> */}
      {/* <StepTwo /> */}
    </div>
  );
};

export default App;
