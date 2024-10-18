import React, { useContext } from "react";
import { ThemeContext } from "../new_contexts/ThemeContext";
import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";

const Thanks = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const {
    previousNameValue = "",
    previousPhoneValue = "",
    eshkereValue = "",
    course = "",
    emoji = "",
    number = "",
  } = location.state || {};

  let emojiState = "";
  if (emoji === "laugh") {
    emojiState = <img src="./img/laugh.png" alt="laugh" />;
  } else if (emoji === "love") {
    emojiState = <img src="./img/hearts.png" alt="hearts" />;
  } else if (emoji === "cool") {
    emojiState = <img src="./img/smirk.png" alt="smirk" />;
  } else if (emoji === "shock") {
    emojiState = <img src="./img/fright.png" alt="fright" />;
  }

  return (
    <div className={`container ${theme === "dark" ? "_dark" : ""}`}>
      <div className="container">
        <div className="wrapper">
          <div className="thanks">
            <img src="./img/bell.png" alt="bell" />
            <Header
              headerText="Спасибо за прохождение опроса!"
              headerType="h1"
            />
            <span>Ваше имя: {previousNameValue}</span> <br />
            <span>Ваш номер телефона: {previousPhoneValue}</span> <br />
            <span>
              Вы ответили {eshkereValue} получению специального IT образования
            </span>
            <br />
            <span>Выбранный вами курс: {course}</span> <br />
            <span>Вы программируете по {number} часов в день</span> <br />
            <span>Ваше эмоциональное состояние: {emojiState}</span>
            <AppButton buttonType="submit" buttonText="Получить ссылку" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
