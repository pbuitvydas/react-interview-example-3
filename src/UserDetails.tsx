import React from "react";
import { useUserClient } from "./useUserClient";

export const UserDetails: React.FC<any> = (props) => {
  const userClient = useUserClient();
  const [user, setUser] = React.useState<any>();
  React.useEffect(() => {
    userClient.getUser(props.userId).then(setUser);
  }, []);
  const addressToString = (address: any) => {
    if (address) {
      return Object.entries(address)
        .filter(([key]) => key != "geo")
        .reduce(
          (previousValue, [key, value]) => `${previousValue} ${value}`,
          ""
        );
    } else {
      return "";
    }
  };
  return (
    <React.Fragment>
      <div>
        <h3 style={{ display: "inline-block" }}>User Details</h3>
        <button style={{ marginLeft: "5px" }} onClick={() => props.onClose()}>
          Close
        </button>
        <dl>
          <dt>User Name</dt>
          <dd>{user?.name}</dd>

          <dt>Email</dt>
          <dd>{user?.email}</dd>

          <dt>Phone</dt>
          <dd>{user?.phone}</dd>
          <dt>Address</dt>
          <dd>{addressToString(user?.address)}</dd>
          <dt>Website</dt>
          <dd>
            <a href={user?.website}>{user?.website}</a>
          </dd>
        </dl>
      </div>
    </React.Fragment>
  );
};
