import React, { useContext } from "react";
import { ThemeContext } from "../new_contexts/ThemeContext";

const Thanks = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container ${theme === "dark" ? "_dark" : ""}`}>
      <div className="container">
        <div className="wrapper">
          <div className="thanks">
            <img src="./img/bell.png" alt="bell" />
            <h1>Спасибо за прохождение опроса!</h1>
            <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
            <button type="button" id="get-link">
              Получить ссылку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
