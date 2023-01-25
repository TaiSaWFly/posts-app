import React, { useEffect } from "react";
import usersStore from "../../../store/UsersStore";
import { observer } from "mobx-react-lite";
import { Avatar, Card } from "antd";

const { Meta } = Card;

const User = observer(({ userId }) => {
  const user = usersStore.getUsers(userId);

  useEffect(() => {
    usersStore.loadUser(userId);
  }, [userId]);

  return (
    <>
      {user ? (
        <Meta
          avatar={
            <Avatar
              src={`https://picsum.photos/1500/1500.jpg?random=${userId}`}
            />
          }
          title={user.name}
        />
      ) : (
        "Loading..."
      )}
    </>
  );
});

export default User;
