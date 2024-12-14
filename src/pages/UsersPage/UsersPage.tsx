import { useCallback, useEffect, useState } from "react";
import styles from "./UsersPage.module.scss";
import { User } from "../../types";
import { UsersService } from "../../services/UserService";
import { Loader } from "../../components/Loader/Loader";
import { Card } from "../../components/Card/Card";
import { useRootContext } from "../../hooks/useRootContext";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import crossIcon from "../../assets/icons/cross.svg";

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [filteredUser, setFilteredUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  const { setErrorMessage } = useRootContext();

  const fetchUsersList = useCallback(async () => {
    setLoading(true);
    try {
      const data = await UsersService.fetchUsersList();
      setUsers(data);
      setFilteredUsers(data);
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    if (value) {
      setFilteredUsers((users) =>
        users.filter(({ name }) =>
          name.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
        ),
      );
    } else {
      setFilteredUsers(users);
    }
  };

  const clearSearch = () => {
    setSearch("");
    setFilteredUsers(users);
  };

  return (
    <>
      <Header title="Users List" />
      <div className={styles.container}>
        <div>
          <span>Search by user name</span>
          <div className={styles.search}>
            <Input
              placeholder="Search..."
              value={search}
              onChange={handleInputChange}
            />
            <span className={search ? "" : styles.invisible}>
              <img src={crossIcon} alt="cross" onClick={clearSearch} />
            </span>
          </div>
        </div>
        <div className={styles.list}>
          {filteredUser.map((user) => {
            return <Card user={user} key={user.id} />;
          })}
        </div>
      </div>
    </>
  );
};
