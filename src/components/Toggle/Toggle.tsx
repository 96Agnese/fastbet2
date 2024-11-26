import React, { useState } from "react";
import styles from "./Toggle.module.scss";

type ToggleProps = {
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

const Toggle: React.FC<ToggleProps> = ({ isChecked = false, onChange }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleToggleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);

    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div className={styles["toggle-container"]}>
      <input
        type="checkbox"
        id="check"
        className={styles["toggle-container__toggle"]}
        checked={checked}
        onChange={handleToggleChange}
      />
      <label htmlFor="check"></label>
    </div>
  );
};

export default Toggle;
