/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./layout.module.scss";
import FormAdd from "../form-add";

import { Navigation } from "../../components/";
import { Alert } from "@mui/material";

export default function Layout({ children }) {
  const [isModalForm, setIsModalForm] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess("");
      }, 1500);
    }
  }, [isSuccess]);

  const handleOpen = () => {
    setIsModalForm(true);
  };

  const handleClose = () => {
    setIsModalForm(false);
  };

  return (
    <>
      {isSuccess ? <Alert>{isSuccess}</Alert> : null}
      <FormAdd isModalOpen={isModalForm} onClose={handleClose} setIsSuccess={setIsSuccess} />
      <Navigation handleOpen={handleOpen} />
      <main className={styles.layout}>{children}</main>
    </>
  );
}
