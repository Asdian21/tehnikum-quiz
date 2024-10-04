import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerLabel } from "../components/AnswerLabel";
import { AppButton } from "../components/AppButton";

const StepTwo = () => {
  const [course, setCourse] = useState(null);

  const variants = [
    {
      id: "variant-1",
      courseName: "Frontend",
    },
    {
      id: "variant-2",
      courseName: "Python",
    },
    {
      id: "variant-3",
      courseName: "DATA Analytics",
    },
    {
      id: "variant-4",
      courseName: "UX/UI",
    },
  ];

  // console.log(course);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar />
          <div className="question">
            <Header headerType="h2" headerText="Какой курс вас интересует?" />
            <ul className="variants">
              {variants.map((elem) => (
                <AnswerLabel
                  id={elem.id}
                  AnswerLabel={elem.courseName}
                  key={elem.id}
                  labelChange={() => setCourse(elem.courseName)}
                />
              ))}
            </ul>
            {!course ? (
              <AppButton isDisabled buttonText="Далее" />
            ) : (
              <AppButton isDisabled={false} buttonText="Далее" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
