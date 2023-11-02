/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDataUserById } from "../../domain/services";
import { FormUpdate } from "../../containers";
import { Alert } from "@mui/material";
import styles from "./detailUser.module.scss";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function DetailUserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [isSuccess, setIsSuccess] = useState("");

  useEffect(() => {
    fetchDataUserById(userId).then((user) => setUser(user));
  }, [userId]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess("");
      }, 1500);
    }
  }, [isSuccess]);

  return (
    <>
      {isSuccess ? <Alert>{isSuccess}</Alert> : null}
      <div className={styles.detailUser}>
        <Link to={"/"} className={styles.detailUser__link}>
          <ArrowBackIosIcon />
          Back to Home
        </Link>
        <div className={styles.detailUser__header}>
          <h1>Detail Provider</h1>
          <p>Update data provider</p>
        </div>
        <div>{user && <FormUpdate user={user} setIsSuccess={setIsSuccess} />}</div>
      </div>
    </>
  );
}
