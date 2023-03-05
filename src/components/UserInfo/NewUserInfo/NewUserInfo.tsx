import React, { useState, FormEvent, SyntheticEvent } from "react";
//import styles from "./NewUserInfo.module.css";
import { UserInfoType } from "../../../types/types";
import NewUserInfoForm from "./NewUserInfoForm";

type propsType = {
  onPostAddNewUserInfo: (userInfo: UserInfoType) => void;
};

const NewUserInfo = (props: propsType) => {
  //States
  const [usernameState, setUsernameState] = useState("");
  const [ageState, setAgeState] = useState("");

  //Handlers
  const usernameStateChangeHandler = (event: SyntheticEvent) => {
    let target: HTMLInputElement = event.target as HTMLInputElement;
    setUsernameState(target.value);
  };
  const ageStateChangeHandler = (event: SyntheticEvent) => {
    let target: HTMLInputElement = event.target as HTMLInputElement;
    setAgeState(target.value);
  };

  const preAddNewUserInfoHandler = (event: FormEvent) => {
    event.preventDefault();
    setUsernameState("");
    setAgeState("");
  };

  return (
    <NewUserInfoForm
      usernameVal={usernameState}
      ageVal={ageState}
      onUsernameStateChange={usernameStateChangeHandler}
      onAgeStateChange={ageStateChangeHandler}
      onFormSubmit={preAddNewUserInfoHandler}
    />
  );
};

export default NewUserInfo;
