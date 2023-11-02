/* eslint-disable react/prop-types */
import { Input } from "../../components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "./form.module.scss";

export default function Form({ handleSubmit, handleInputChange, data }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label={"Provider Website"}
        name={"provider"}
        defaultValue={data?.provider}
        onChange={handleInputChange}
        required
      />
      <Input
        label={"Email Provider"}
        name={"email"}
        defaultValue={data?.email}
        onChange={handleInputChange}
        required
      />
      <Input
        label={"Password Provider"}
        name={"password"}
        type="password"
        defaultValue={data?.password}
        onChange={handleInputChange}
        required
      />
      <div>
        <label style={{ fontSize: "16px", fontWeight: 700 }}>Category</label>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="work"
            name="category"
            checked={data?.category === "work"}
            onChange={handleInputChange}
            control={<Radio />}
            label="Work"
          />
          <FormControlLabel
            value="personal"
            name="category"
            checked={data?.category === "personal"}
            onChange={handleInputChange}
            control={<Radio />}
            label="Personal"
          />
          <FormControlLabel
            value="family"
            name="category"
            checked={data?.category === "family"}
            onChange={handleInputChange}
            control={<Radio />}
            label="Family"
          />
        </RadioGroup>
      </div>
      <div className={styles.form__btnContainer}>
        <input type="submit" className={styles.btn} />
      </div>
    </form>
  );
}
