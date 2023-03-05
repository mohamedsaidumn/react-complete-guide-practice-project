import React, { ReactNode, FormEvent, SyntheticEvent } from "react";
import styles from "./NewUserInfoForm.module.css";
import { UserInfoType } from "../../../types/types";

type propsType = {
  usernameVal: string;
  ageVal: string;
  onUsernameStateChange: (event: SyntheticEvent) => void;
  onAgeStateChange: (age: SyntheticEvent) => void;
  onFormSubmit: (event: FormEvent) => void;
};

const NewUserInfoForm = (props: propsType) => {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div className={styles["form-controls"]}>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input
            type="text"
            value={props.usernameVal}
            onChange={props.onUsernameStateChange}
          />
        </div>
        <div className={styles["form-control"]}>
          <label>Age (Years)</label>
          <input
            type="text"
            value={props.ageVal}
            onChange={props.onAgeStateChange}
          />
        </div>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default NewUserInfoForm;
