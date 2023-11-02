/* eslint-disable react/prop-types */
import { useState } from "react";
import { postDataUser } from "../../domain/services";

import { Alert } from "@mui/material";
import { ModalCustom, Form } from "../../components";

export default function FormAdd({ isModalOpen, onClose, setIsSuccess }) {
  const [data, setData] = useState({
    provider: "",
    email: "",
    password: "",
    category: "work",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password.length < 6) {
      <Alert severity="error">Password harus memiliki setidaknya 6 karakter.</Alert>;
      return;
    }
    if (data.category.length <= 0) {
      <Alert severity="error">Mohon pilih salah satu category</Alert>;
    }
    try {
      const res = await postDataUser(data);
      setIsSuccess(res.message);
      setData({});
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalCustom isModalOpen={isModalOpen} onClose={onClose} title={"Add User"}>
      <Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} data={data} />
    </ModalCustom>
  );
}
