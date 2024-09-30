import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(true);
  const [phoneError, setPhoneError] = useState(false);
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
              inputType="tel"
              hasError={phoneError}
              labelValue={phoneValue}
              labelChange={setPhoneValue}
            />
            {/* <label className="input-wrapper" htmlFor="username">
              Ваш номер
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              />
              <span id="error-message">Введите номер в правильном формате</span>
            </label> */}
            <AppButton buttonText="Далее" isDisabled={true} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
