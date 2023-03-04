import React from "react";
import styles from "./App.module.css";
import Card from "./components/UI/Card";
import UserInfoInput from "./components/UserInfo/UserInfoInput/UserInfoInput";

function App() {
  return (
    <Card className="">
      <UserInfoInput />
    </Card>
  );
}

export default App;
