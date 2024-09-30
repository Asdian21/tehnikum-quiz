import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [checkBtn, setCheckBtn] = useState(true);

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const phoneRegex =
    /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;

  const handleClick = () => {
    if (!nameRegex.test(nameValue)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!phoneRegex.test(phoneValue)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  useEffect(() => {
    if (nameValue && phoneValue) {
      setCheckBtn(false);
    } else {
      setCheckBtn(true);
    }
  });

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header
            headerType="h1"
            headerText="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <AppLabel
              labelText="Ваше имя"
              errorText="Введите имя в правильном формате"
              id="username"
              isRequired
              inputPlaceholder="Имя"
              inputType="text"
              labelValue={nameValue}
              labelChange={setNameValue}
              hasError={nameError}
            />
            <AppLabel
              labelText="Ваше номер"
              errorText="Введите номер в правильном формате"
              id="phone"
              isRequired={true}
              inputPlaceholder="+998 9- --- -- --"
              inputType="number"
              hasError={phoneError}
              labelValue={phoneValue}
              labelChange={setPhoneValue}
            />
            <AppButton
              buttonText="Далее"
              isDisabled={checkBtn}
              buttonClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
