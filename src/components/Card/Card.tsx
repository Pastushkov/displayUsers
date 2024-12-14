import { User } from "../../types";
import userIcon from "../../assets/icons/user.svg";
import styles from "./Card.module.scss";
import { useNavigate } from "@tanstack/react-location";

interface Props {
  user: User;
}

export const Card = ({ user }: Props) => {
  const navigate = useNavigate();

  const openUserInfo = () => {
    navigate({
      to: `/user/info/${user.id}`,
    });
  };

  return (
    <div className={styles.card}>
      <img
        src="https://www.bootdey.com/image/340x120/20B2AA/000000"
        alt="Cover"
        className={styles.card__topImage}
      />
      <div className={styles.card__body}>
        <img src={userIcon} alt="User" className={styles.card__userIcon} />
        <h5 className={styles.card__title}>{user.name}</h5>
        <p className={styles.card__company}>{user.company.name}</p>
        <p className={styles.card__email}>{user.email}</p>
      </div>
      <div className={styles.card__footer}>
        <button
          className={styles.card__detailsButton}
          type="button"
          onClick={openUserInfo}
        >
          Details
        </button>
      </div>
    </div>
  );
};
