import { useCallback, useEffect, useState } from "react";
import styles from "./UsersPage.module.scss";
import { User } from "../../types";
import { UsersService } from "../../services/UserService";
import { Loader } from "../../components/Loader/Loader";
import { Card } from "../../components/Card/Card";
import { useRootContext } from "../../hooks/useRootContext";
import { Header } from "../../components/Header/Header";

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const { setErrorMessage } = useRootContext();

  const fetchUsersList = useCallback(async () => {
    setLoading(true);
    try {
      const data = await UsersService.fetchUsersList();
      setUsers(data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Error while fetch users list");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, [setErrorMessage]);

  useEffect(() => {
    fetchUsersList();
  }, [fetchUsersList]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header title="Users List" />
      <div className={styles.container}>
        {users.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
      </div>
    </>
  );
};
