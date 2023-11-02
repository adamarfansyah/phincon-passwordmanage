/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { updateDataUser } from "../../domain/services";

import { Form } from "../../components";
import styles from "./form.module.scss";

export default function FormUpdate({ user, setIsSuccess }) {
  const [data, setData] = useState({
    id: user?.id,
    provider: user?.provider,
    email: user?.email,
    password: user?.password,
    category: user?.category,
  });

  useEffect(() => {
    setData({
      id: user?.id,
      provider: user?.provider,
      email: user?.email,
      password: user?.password,
      category: user?.category,
    });
  }, [user]);

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
      alert("Password must be 6 characters");
      return;
    }
    if (data.category.length <= 0) {
      alert("Please choose one category");
      return;
    }
    try {
      const res = await updateDataUser(data);
      setIsSuccess(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.formUpdate}>
      <Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} data={data} />
    </div>
  );
}
