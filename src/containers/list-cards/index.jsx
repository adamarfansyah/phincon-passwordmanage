/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDataUser } from "../../domain/services";

import { CardUser, ModalCustom } from "../../components/";
import { Alert } from "@mui/material";
import styles from "./listCards.module.scss";

export default function ListCards({ payload }) {
  const navigate = useNavigate();
  const [idUser, setIdUser] = useState();
  const [isSuccess, setIsSuccess] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigateToDetailUser = (id) => {
    navigate(`/user/${id}`);
  };

  const submitDelete = async (id) => {
    try {
      const res = await deleteDataUser(id);
      setIsSuccess(res.message);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (id) => {
    setIsModalOpen(true);
    setIdUser(id);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const cardUser = payload?.map((user) => (
    <CardUser key={user.id} user={user} handleNavigate={navigateToDetailUser} onDelete={onDelete} />
  ));

  return (
    <>
      {isSuccess ? <Alert>{isSuccess}</Alert> : null}
      {isModalOpen ? (
        <ModalCustom isModalOpen={isModalOpen} title={"Delete User"} onClose={onClose}>
          <h3>Are you sure want to delete this Provider ? </h3>
          <div className={styles.listCards__btnContainer}>
            <button onClick={() => submitDelete(idUser)} className={styles.listCards__btn}>
              Submit
            </button>
            <button onClick={() => onClose()} className={styles.listCards__btnCancel}>
              Cancel
            </button>
          </div>
        </ModalCustom>
      ) : null}
      <div className={styles.cardsUser}>{cardUser}</div>
    </>
  );
}
