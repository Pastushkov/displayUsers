import crossIcon from "../../assets/icons/cross.svg";
import errorIcon from "../../assets/icons/error.svg";

import styles from "./ErrorBoundary.module.scss";

interface Props {
  message?: string;
  close: () => void;
}

export const ErrorBoundary = ({ close, message }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <img src={errorIcon} alt="error" />
        <div>
          {message ||
            "Server Error! The changes have not been saved. Please try again later."}
        </div>
        <img
          src={crossIcon}
          className={styles.crossIcon}
          alt="cross"
          onClick={close}
        />
      </div>
    </div>
  );
};
