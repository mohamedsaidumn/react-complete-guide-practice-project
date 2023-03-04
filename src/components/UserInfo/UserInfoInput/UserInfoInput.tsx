import React, { ReactNode, FormEvent } from "react";
import styles from "./UserInfoInput.module.css";

type propsType = {
  onSaveUserInfo: () => void;
};

const UserInfoInput = (props: any) => {
  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles["form-controls"]}>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input type="text" />
        </div>
        <div className={styles["form-control"]}>
          <label>Age (Years)</label>
          <input type="text" />
        </div>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserInfoInput;
