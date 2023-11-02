/* eslint-disable react/prop-types */
import styles from "./categories.module.scss";
import capitalize from "../../utils/capitalize";
import { Select } from "@mui/base/Select";
import { Option } from "@mui/base/Option";
import { useNavigate } from "react-router-dom";

export default function Categories({ payload, params }) {
  const navigate = useNavigate();

  const handleNavigate = (endpoint) => {
    navigate(endpoint);
  };

  return (
    <Select placeholder="Choose Category" className={styles.categories} value={params}>
      <div className={styles.categories__contents}>
        <Option value={""} onClick={() => handleNavigate("/")} className={styles.categories__link}>
          All
        </Option>
        {payload?.map((category) => (
          <Option
            key={category?.id}
            value={category?.name}
            className={styles.categories__link}
            onClick={() => handleNavigate(`/category/${category?.name}`)}
          >
            {capitalize(category?.name)}
          </Option>
        ))}
      </div>
    </Select>
  );
}
