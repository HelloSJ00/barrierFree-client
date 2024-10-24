import React from "react";
import styles from "./page.module.css";
import SignupForm from "../_components/SignupForm";

const Signup = () => {
  return (
    <main className={styles.container}>
      <SignupForm />
    </main>
  );
};

export default Signup;
