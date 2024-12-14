import { useLocation } from "@tanstack/react-location";
import styles from "./Header.module.scss";
import chevronLeftIcon from "../../assets/icons/chevron-left.svg";

interface Props {
  goBack?: boolean;
  title: string;
}

export const Header = ({ goBack, title }: Props) => {
  const location = useLocation();

  return (
    <div className={styles.header}>
      {goBack && (
        <div
          onClick={() => location.history.back()}
          className={styles.header__goBack}
        >
          <img alt="goBack" src={chevronLeftIcon} />
        </div>
      )}
      <div className={styles.header__title}>{title}</div>
    </div>
  );
};
