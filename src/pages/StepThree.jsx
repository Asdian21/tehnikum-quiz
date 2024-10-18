import React, { useState, useContext } from "react";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerLabel } from "../components/AnswerLabel"; // Проверь, существует ли этот компонент
import { ThemeContext } from "../new_contexts/ThemeContext";
import { useLocation } from "react-router-dom";

const StepThree = () => {
  const location = useLocation();
  const { previousNameValue, previousPhoneValue, eshkereValue, course } =
    location.state || "";

  const { theme } = useContext(ThemeContext);
  const [emoji, setEmoji] = useState("");

  const emojiVariants = [
    {
      emoji_id: "var-1",
      emojiName: "laugh",
      emojiImg: <img src="./img/laugh.png" alt="laugh" />,
    },
    {
      emoji_id: "var-2",
      emojiName: "love",
      emojiImg: <img src="./img/hearts.png" alt="hearts" />,
    },
    {
      emoji_id: "var-3",
      emojiName: "cool",
      emojiImg: <img src="./img/smirk.png" alt="smirk" />,
    },
    {
      emoji_id: "var-4",
      emojiName: "shock",
      emojiImg: <img src="./img/fright.png" alt="fright" />,
    },
  ];

  return (
    <div className={`container ${theme === "dark" ? "_dark" : ""}`}>
      <div className="container">
        <div className="wrapper">
          <div className="emoji-quiz">
            <ProgressBar currentStep={3} currentValue="75%" />
            <div className="question">
              <Header headerType="h2" headerText="Занимательный вопрос" />
              <ul className="emoji-variants">
                {emojiVariants.map((elem) => (
                  <AnswerLabel
                    id={elem.emoji_id}
                    AnswerLabel={elem.emojiName}
                    emojiImg={elem.emojiImg}
                    key={elem.emoji_id}
                    labelChange={() => setEmoji(elem.emojiName)}
                  />
                ))}
              </ul>
              <LinkButton path="/step-four" />
              {/* <p>{course}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
