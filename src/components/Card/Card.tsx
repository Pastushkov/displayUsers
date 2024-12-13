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
      to: `/user/${user.id}`,
    });
  };

  return (
    <div className={styles.container} onClick={openUserInfo}>
      <img src={userIcon} alt="user" className={styles.userIcon} />
      <div>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.row}>{user.company.name}</div>
        <div className={styles.phone}>{user.phone}</div>
      </div>
    </div>
  );
};
