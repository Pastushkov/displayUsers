import { useRouteParams } from "../../hooks/useRouteParams";
import styles from "./UserInfoPage.module.scss";

export const UserInfoPage = () => {
  const { userId } = useRouteParams();
  console.log("User ID-> ", userId);

  return <div className={styles.container}>User info</div>;
};
