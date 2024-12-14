import { useCallback, useEffect, useState } from "react";
import { useRouteParams } from "../../hooks/useRouteParams";
import { UsersService } from "../../services/UserService";
import styles from "./UserInfoPage.module.scss";
import { useRootContext } from "../../hooks/useRootContext";
import { User } from "../../types";
import { Loader } from "../../components/Loader/Loader";
import userIcon from "../../assets/icons/user.svg";
import { Header } from "../../components/Header/Header";

export const UserInfoPage = () => {
  const { userId } = useRouteParams();

  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState(false);

  const { setErrorMessage } = useRootContext();

  const fetchUserInfo = useCallback(async () => {
    setLoading(true);
    try {
      const data = await UsersService.fetchUserInfo(userId);
      setUser(data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Error while fetch user info");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [setErrorMessage, userId]);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  if (loading) {
    return <Loader />;
  }

  const formatUserAddress = (): string => {
    return `${user?.address.street} ${user?.address.suite} ${user?.address.city} ${user?.address.zipcode}`;
  };

  return (
    <>
      <Header goBack title="User Info" />
      <div className={styles.container}>
        <div className={styles.card}>
          <img src={userIcon} alt="userIcon" className={styles.userIcon} />
          <div className={styles.card__header}>
            <h3> {user?.name}</h3>
            <span>{user?.username}</span>
          </div>
          <ul className={styles.card__list}>
            <li>
              <span>Email: </span> {user?.email}
            </li>
            <li>
              <span>Phone: </span> {user?.phone}
            </li>
            <li>
              <span>Website: </span>{" "}
              <a target="_blank" href={`https://${user?.website}`}>
                {user?.website}
              </a>
            </li>
            <li>
              <span>Address: </span> {formatUserAddress()}
            </li>
          </ul>
          <div className={styles.card__company}>
            <div>
              <span>Company: </span>
              {user?.company.name}
            </div>
            <div>
              <span>Catch phrase: </span>
              {user?.company.catchPhrase}
            </div>
            <div>
              <span>BS: </span>
              {user?.company.bs}
            </div>
          </div>
        </div>
        {/* 
        <div>
          <div>Name: {user?.name}</div>
          <div>Phone: {user?.phone}</div>
          <div>Email: {user?.email}</div>
          <div>
            website:{" "}
            
          </div>
          <div>Address: </div>
        </div>
        <div>
          <div>Company: {user?.company.name}</div>
          <div>Catch phrase: {user?.company.catchPhrase}</div>
          <div>BS: {user?.company.bs}</div>
        </div> */}
      </div>
    </>
  );
};
