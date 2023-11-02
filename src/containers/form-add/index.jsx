/* eslint-disable react/prop-types */
import { useState } from "react";
import { postDataUser } from "../../domain/services";

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
      alert("Password harus memiliki setidaknya 6 karakter.");
      return;
    }
    if (data.category.length <= 0) {
      alert("Mohon pilih salah satu category");
      return;
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
