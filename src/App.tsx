import React from "react";
import "./styles.css";
import { User, UserListItem, UserClient } from "./UserClient";
import { useUserClient } from "./useUserClient";
import { UserDetails } from "./UserDetails";

export default function App() {
  const userClient = useUserClient();
  const [users, setUsers] = React.useState<UserListItem[]>([]);
  const [selectedUserId, setSelectedUserId] = React.useState<number>();
  const [reloadFlag, setReloadFlag] = React.useState<unknown>({});
  React.useEffect(() => {
    userClient.getUsers().then((users) => setUsers(users));
  }, [reloadFlag]);
  const handleDetailsClose = () => {
    setSelectedUserId(undefined);
    setReloadFlag({});
  };
  return (
    <div className="App">
      <h3>User List</h3>
      <table>
        <tr>
          <th>User Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>

        {users.map((user, idx) => (
          <tr key={idx}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => setSelectedUserId(user.id)}>View</button>
            </td>
          </tr>
        ))}
      </table>
      {selectedUserId && (
        <UserDetails userId={selectedUserId} onClose={handleDetailsClose} />
      )}
    </div>
  );
}
